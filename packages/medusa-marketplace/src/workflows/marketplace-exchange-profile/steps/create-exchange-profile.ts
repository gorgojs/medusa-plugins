import { createStep, StepResponse } from "@medusajs/workflows-sdk"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { OrderType } from "../../../modules/marketplace/models/marketplace-exchange-profile"

export type CreateExchangeProfileStepInput = {
  marketplaceId: string,
  warehouseId: string,
  orderType: OrderType,
}

export const createExchangeProfileStep = createStep(
  "create-exchange-profile",
  async (input: CreateExchangeProfileStepInput, { container }) => {
    const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)

    const exchangeProfile = await service.createMarketplaceExchangeProfiles({
      marketplace_id: input.marketplaceId,
      warehouse_id: input.warehouseId,
      order_type: input.orderType,
    })
    
    return new StepResponse(exchangeProfile,exchangeProfile.id)
  },
  async (id, { container }) => {
    if (!id) return

    const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
    service.deleteMarketplaceExchangeProfiles(id)
  }
)
