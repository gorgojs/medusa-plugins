import {
  attachInventoryItemToVariants,
  createInventoryItemsWorkflow,
  useQueryGraphStep,
} from "@medusajs/medusa/core-flows";
import {
  createWorkflow,
  transform,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import { OffersOutput } from "../types";
import {
  upsertStockLocationsStep,
  StockLocationMapping,
} from "./steps/upsert-stock-locations";
import {
  upsertInventoryLevelsStep,
  InventoryLevelEntry,
} from "./steps/upsert-inventory-levels";

export const onecInventoryWorkflow = createWorkflow(
  "onec-inventory-workflow",
  (input: { offersData: OffersOutput }) => {
    const externalIdsFilters = transform({ offersData: input.offersData }, (data) => {
      const productIds = new Set<string>();
      data.offersData.offers.forEach((offer) => {
        productIds.add(offer.id!.split("#")[0]);
      });
      return Array.from(productIds);
    });

    const stockLocationsMap = upsertStockLocationsStep(
      transform({ offersData: input.offersData }, (d) => d.offersData.warehouses ?? [])
    );

    const { data: productsWithInventory } = useQueryGraphStep({
      entity: "product",
      fields: [
        "id",
        "external_id",
        "variants.id",
        "variants.sku",
        "variants.title",
        "variants.inventory_items.inventory_item_id",
      ],
      filters: { external_id: externalIdsFilters },
    });

    const { itemsToCreate, tagsForCreate, levelsToUpsert } = transform(
      { productsWithInventory, stockLocationsMap, offersData: input.offersData },
      (data: {
        productsWithInventory: any[];
        stockLocationsMap: StockLocationMapping[];
        offersData: OffersOutput;
      }) => {
        const offerBySku = new Map<string, OffersOutput["offers"][0]>();
        data.offersData.offers.forEach((offer) => {
          offerBySku.set(offer.article || offer.id!, offer);
        });

        const locationById = new Map<string, string>();
        data.stockLocationsMap.forEach((m) => {
          locationById.set(m.onecWarehouseId, m.stockLocationId);
        });

        const itemsToCreate: { sku: string; title?: string; location_levels?: { location_id: string; stocked_quantity: number }[] }[] = [];
        const tagsForCreate: string[] = [];
        const levelsToUpsert: InventoryLevelEntry[] = [];

        for (const product of data.productsWithInventory) {
          for (const variant of (product.variants ?? [])) {
            const offer = offerBySku.get(variant.sku);
            if (!offer) continue;

            const stocks = ((offer as any).stocks ?? [])
              .map((s: any) => ({
                stockLocationId: locationById.get(s.warehouseId),
                quantity: s.quantity,
              }))
              .filter((s: any) => !!s.stockLocationId);

            const existingItemId = variant.inventory_items?.[0]?.inventory_item_id;

            if (existingItemId) {
              if (stocks.length) {
                levelsToUpsert.push({ inventoryItemId: existingItemId, stocks });
              }
            } else {
              itemsToCreate.push({
                sku: variant.sku,
                title: variant.title,
                ...(stocks.length ? {
                  location_levels: stocks.map((s: any) => ({
                    location_id: s.stockLocationId,
                    stocked_quantity: s.quantity,
                  })),
                } : {}),
              });
              tagsForCreate.push(variant.id);
            }
          }
        }

        return { itemsToCreate, tagsForCreate, levelsToUpsert };
      }
    );

    const createdItems = createInventoryItemsWorkflow.runAsStep({
      input: { items: itemsToCreate },
    });

    const linksToCreate = transform(
      { createdItems, tagsForCreate },
      (data: { createdItems: { id: string }[]; tagsForCreate: string[] }) =>
        data.createdItems.map((item, i) => ({
          inventoryItemId: item.id,
          tag: data.tagsForCreate[i],
        }))
    );

    attachInventoryItemToVariants(linksToCreate);

    upsertInventoryLevelsStep(levelsToUpsert);

    return new WorkflowResponse({ ok: true });
  }
);
