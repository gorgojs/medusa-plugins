import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { Modules } from "@medusajs/framework/utils";
import { IInventoryService } from "@medusajs/types";

export type InventoryLevelEntry = {
  inventoryItemId: string;
  stocks: { stockLocationId: string; quantity: number }[];
};

export const upsertInventoryLevelsStep = createStep(
  "upsert-inventory-levels-step",
  async (entries: InventoryLevelEntry[], { container }) => {
    if (!entries?.length) return new StepResponse({ ok: true });

    const inventoryService = container.resolve<IInventoryService>(Modules.INVENTORY);

    for (const entry of entries) {
      if (!entry.stocks.length) continue;

      const existingLevels = await inventoryService.listInventoryLevels({
        inventory_item_id: entry.inventoryItemId,
      });

      const existingByLocation = new Set(existingLevels.map((l) => l.location_id));

      const toCreate = entry.stocks
        .filter((s) => !existingByLocation.has(s.stockLocationId))
        .map((s) => ({
          inventory_item_id: entry.inventoryItemId,
          location_id: s.stockLocationId,
          stocked_quantity: s.quantity,
        }));

      const toUpdate = entry.stocks
        .filter((s) => existingByLocation.has(s.stockLocationId))
        .map((s) => ({
          inventory_item_id: entry.inventoryItemId,
          location_id: s.stockLocationId,
          stocked_quantity: s.quantity,
        }));

      if (toCreate.length > 0) await inventoryService.createInventoryLevels(toCreate);
      if (toUpdate.length > 0) await inventoryService.updateInventoryLevels(toUpdate);
    }

    return new StepResponse({ ok: true });
  }
);
