import { useQueryGraphStep } from "@medusajs/medusa/core-flows";
import { createWorkflow, transform, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import { OffersOutput } from "../types";
import { syncPriceListsStep } from "./steps/sync-price-lists-step";

export const onecPriceListsWorkflow = createWorkflow(
  "onec-price-lists-workflow",
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

    const { data: products } = useQueryGraphStep({
      entity: "product",
      fields: ["variants.id", "variants.sku"],
      filters: { external_id: externalIdsFilters },
    }).config({ name: "products-for-price-lists" });

    syncPriceListsStep(
      transform({ stores, products, offersData: input.offersData }, (data) => {
        const variants = (data.products as any[]).flatMap((p) => p.variants ?? []);
        return {
          priceTypes: data.offersData.offersPackage.priceTypes ?? [],
          offers: data.offersData.offers,
          variants,
          retailPriceTypeId: null,
          defaultCurrencyCode: (data.stores[0]?.default_currency_code || "rub").toLowerCase(),
        };
      })
    );

    return new WorkflowResponse({ ok: true });
  }
);
