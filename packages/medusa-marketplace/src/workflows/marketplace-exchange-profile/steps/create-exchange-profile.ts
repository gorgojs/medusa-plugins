import { createStep, StepResponse } from "@medusajs/workflows-sdk"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceExchangeProfileDTO } from "../../../types"

export type CreateExchangeProfileStepInput = Omit<MarketplaceExchangeProfileDTO, "id" | "stock_location_id">

export const createExchangeProfileStep = createStep(
  "create-exchange-profile",
  async (input: CreateExchangeProfileStepInput, { container }) => {
    const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)

    const exchangeProfile = await service.createMarketplaceExchangeProfiles(input)
    
    return new StepResponse(exchangeProfile, exchangeProfile.id)
  },
  async (id, { container }) => {
    if (!id) return

    const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
    service.deleteMarketplaceExchangeProfiles(id)
  }
)
