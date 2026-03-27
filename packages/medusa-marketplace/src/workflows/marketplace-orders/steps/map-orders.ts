import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { MarketplaceDTO, MedusaOrder } from "../../../types"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"

export type MapToMedusaOrdersStepInput = {
  marketplace: MarketplaceDTO
  providerId: string
  orders: any[]
}

export const mapToMedusaOrdersStep = createStep(
  "map-to-medusa-orders",
  async (input: MapToMedusaOrdersStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { marketplace, providerId, orders } = input

    const medusaOrders = await marketplaceService.mapToMedusaOrders(providerId, {
      container,
      marketplace,
      marketplaceOrders: orders
    })

    return new StepResponse<MedusaOrder[]>(medusaOrders)
  }
)
