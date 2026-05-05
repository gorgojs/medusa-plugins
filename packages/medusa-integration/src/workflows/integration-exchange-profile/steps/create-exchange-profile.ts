import { createStep, StepResponse } from "@medusajs/workflows-sdk"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { IntegrationExchangeProfileDTO } from "../../../types"

export type CreateExchangeProfileStepInput = Omit<IntegrationExchangeProfileDTO, "id" | "stock_location_id">

export const createExchangeProfileStep = createStep(
  "create-exchange-profile",
  async (input: CreateExchangeProfileStepInput, { container }) => {
    const service = container.resolve<IntegrationModuleService>(INTEGRATION_MODULE)

    const exchangeProfile = await service.createIntegrationExchangeProfiles(input)
    
    return new StepResponse(exchangeProfile, exchangeProfile.id)
  },
  async (id, { container }) => {
    if (!id) return

    const service = container.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
    service.deleteIntegrationExchangeProfiles(id)
  }
)
