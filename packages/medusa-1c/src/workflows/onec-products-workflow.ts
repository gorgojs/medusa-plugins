import {
  updateProductsWorkflow,
  useQueryGraphStep,
} from "@medusajs/medusa/core-flows";
import {
  createWorkflow,
  transform,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { UpdateProductWorkflowInputDTO } from "@medusajs/framework/types";
import {
  CreateProductVariantWorkflowInputDTO,
  ProductDTO,
} from "@medusajs/types";
import { OffersOutput } from "../types";
import { normalizeCurrencyCode } from "../utils/exchange-utils";

export const onecProductsWorkflow = createWorkflow(
  "onec-products-workflow",
  (input: { offersData: OffersOutput }) => {
    const { data: stores } = useQueryGraphStep({
      entity: "store",
      fields: ["default_currency_code"],
    });

    const externalIdsFilters = transform({ offersData: input.offersData }, (data) => {
      const productIds = new Set<string>();
      data.offersData.offers.forEach((offer) => {
        productIds.add(offer.id!.split("#")[0]);
      });
      return Array.from(productIds);
    });

    const { data: existingProducts } = useQueryGraphStep({
      entity: "product",
      fields: ["id", "external_id", "variants.*"],
      filters: { external_id: externalIdsFilters },
    }).config({ name: "existing-products" });

    const { productsToUpdate } = transform(
      { existingProducts, stores, offersData: input.offersData },
      (data: {
        existingProducts: ProductDTO[];
        stores: { default_currency_code: string }[];
        offersData: OffersOutput;
      }) => {
        const productsToUpdate: UpdateProductWorkflowInputDTO[] = [];

        const defaultCurrencyCode = (
          data.stores[0]?.default_currency_code || "rub"
        ).toLowerCase();

        const retailId = (data.offersData.offersPackage?.priceTypes ?? [])[0]?.id;

        const propertiesMap = new Map<string, OffersOutput["properties"][0]>();
        data.offersData.properties.forEach((prop) => {
          propertiesMap.set(prop.name, prop);
        });

        const groupedOffers = new Map<string, OffersOutput["offers"]>();
        data.offersData.offers.forEach((offer) => {
          const productId = offer.id!.split("#")[0];
          if (!groupedOffers.has(productId)) groupedOffers.set(productId, []);
          groupedOffers.get(productId)!.push(offer);
        });

        data.existingProducts.forEach((product) => {
          const offersForProduct = groupedOffers.get(product.external_id!);
          if (!offersForProduct) return;

          const skuToVariantId = new Map<string, string>();
          (product.variants ?? []).forEach((v: any) => {
            if (v.sku) skuToVariantId.set(v.sku, v.id);
          });

          const usedOptionTitles = new Set<string>();
          let draftVariants: CreateProductVariantWorkflowInputDTO[] =
            offersForProduct.map((offer) => {
              const variantOptions: Record<string, string> = {};
              if (offer.characteristics?.length) {
                offer.characteristics.forEach((char) => {
                  const optionTitle = char.name.replace(/\s*\(.*\)$/, "").trim();
                  usedOptionTitles.add(optionTitle);
                  variantOptions[optionTitle] = char.value;
                });
              }
              const sku = offer.article || offer.id;
              const existingVariantId = skuToVariantId.get(sku!);
              const onecCharId = offer.characteristics?.find((c: any) => c.id)?.id
                || (offer.id!.includes("#") ? offer.id!.split("#")[1] : undefined);
              return {
                ...(existingVariantId ? { id: existingVariantId } : {}),
                title: offer.name,
                sku,
                manage_inventory: true,
                prices: (() => {
                  const retail = offer.prices?.filter((p) => p.priceTypeId === retailId && Number(p.pricePerUnit) > 0) ?? [];
                  const source = retail.length ? retail : (offer.prices?.filter((p) => Number(p.pricePerUnit) > 0) ?? []);
                  return source.map((p) => ({
                    amount: Number(p.pricePerUnit),
                    currency_code: normalizeCurrencyCode(p.currency || defaultCurrencyCode),
                  }));
                })(),
                options: variantOptions,
                metadata: {
                  isSpecific: offer.id!.includes("#"),
                  ...(onecCharId ? { onec_characteristic_id: onecCharId } : {}),
                },
              };
            });

          const hasSpecificVariants = draftVariants.some((v) => v.metadata?.isSpecific);
          const finalVariants = hasSpecificVariants
            ? draftVariants.filter((v) => v.metadata?.isSpecific)
            : draftVariants;

          const finalOptions = Array.from(usedOptionTitles).map((title) => {
            const prop = propertiesMap.get(title);
            const values = prop?.dictionaryValues?.map((dv) => dv.value) || [];
            return { title, values };
          });

          if (finalOptions.length > 0) {
            finalVariants.forEach((v) => {
              if (v.metadata) delete (v.metadata as any).isSpecific;
            });
          } else {
            finalOptions.push({ title: "Default Option", values: ["Default Option Value"] });
            if (finalVariants.length > 0) {
              finalVariants[0].options = { "Default Option": "Default Option Value" };
              if (finalVariants[0].metadata) delete (finalVariants[0].metadata as any).isSpecific;
            }
          }

          productsToUpdate.push({
            id: product.id,
            options: finalOptions,
            variants: finalVariants as any[],
          });
        });

        return { productsToUpdate };
      }
    );

    updateProductsWorkflow.runAsStep({ input: { products: productsToUpdate } });

    return new WorkflowResponse({ ok: true });
  }
);
