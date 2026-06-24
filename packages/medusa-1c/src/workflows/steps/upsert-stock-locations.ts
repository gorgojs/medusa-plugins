import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { Modules } from "@medusajs/framework/utils";
import { IStockLocationService } from "@medusajs/types";
import { Warehouse } from "commerceml-parser-core";

export type StockLocationMapping = {
  onecWarehouseId: string;
  stockLocationId: string;
};

export const upsertStockLocationsStep = createStep(
  "upsert-stock-locations-step",
  async (warehouses: Warehouse[], { container }): Promise<StepResponse<StockLocationMapping[], string[]>> => {
    if (!warehouses?.length) {
      return new StepResponse([], []);
    }

    const stockLocationService = container.resolve<IStockLocationService>(Modules.STOCK_LOCATION);

    const existingLocations = await stockLocationService.listStockLocations(
      {},
      { select: ["id", "name", "metadata"] }
    );

    const locationByOnecId = new Map<string, string>();
    for (const loc of existingLocations) {
      const onecId = loc.metadata?.onec_warehouse_id as string | undefined;
      if (onecId) locationByOnecId.set(onecId, loc.id);
    }

    const toCreate = warehouses.filter((w) => !locationByOnecId.has(w.id));
    const createdIds: string[] = [];

    if (toCreate.length > 0) {
      const created = await stockLocationService.createStockLocations(
        toCreate.map((w) => ({
          name: w.name || w.id,
          metadata: { onec_warehouse_id: w.id },
        }))
      );
      const createdArray = Array.isArray(created) ? created : [created];
      for (let i = 0; i < createdArray.length; i++) {
        locationByOnecId.set(toCreate[i].id, createdArray[i].id);
        createdIds.push(createdArray[i].id);
      }
    }

    const result: StockLocationMapping[] = warehouses
      .filter((w) => locationByOnecId.has(w.id))
      .map((w) => ({
        onecWarehouseId: w.id,
        stockLocationId: locationByOnecId.get(w.id)!,
      }));

    return new StepResponse(result, createdIds);
  },
  async (createdIds: string[] | undefined, { container }) => {
    if (!createdIds?.length) return;
    const stockLocationService = container.resolve<IStockLocationService>(Modules.STOCK_LOCATION);
    await stockLocationService.deleteStockLocations(createdIds);
  }
);
