import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import MarketplaceModuleService, { LogEventInput } from "../../../modules/marketplace/service"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"

export type LogMarketplaceEventStepInput = LogEventInput

export const logMarketplaceEventStep = createStep(
  "log-marketplace-event",
  async (input: LogMarketplaceEventStepInput, { container }) => {
    const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
    const result = await service.logEvent(input)
    
    return new StepResponse(result)
  }
)