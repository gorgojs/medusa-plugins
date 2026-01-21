import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { LogEventInput } from "../../../types"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"

export type LogMarketplaceEventStepInput = LogEventInput

export const logMarketplaceEventStep = createStep(
  "log-marketplace-event",
  async (input: LogMarketplaceEventStepInput, { container }) => {
    const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
    const result = await service.logEvent(input)
    
    return new StepResponse(result)
  }
)
