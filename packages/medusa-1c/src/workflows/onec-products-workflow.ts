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
              return {
                title: offer.name,
                sku: offer.article || offer.id,
                manage_inventory: true,
                prices: offer.prices?.map((p) => ({
                  amount: Number(p.pricePerUnit),
                  currency_code: normalizeCurrencyCode(p.currency || defaultCurrencyCode),
                })),
                options: variantOptions,
                metadata: { isSpecific: offer.id!.includes("#") },
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
            finalVariants.forEach((v) => delete v.metadata);
          } else {
            finalOptions.push({ title: "Default Option", values: ["Default Option Value"] });
            if (finalVariants.length > 0) {
              finalVariants[0].options = { "Default Option": "Default Option Value" };
              delete finalVariants[0].metadata;
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
