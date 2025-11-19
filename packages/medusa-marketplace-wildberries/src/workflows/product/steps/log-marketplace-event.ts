import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
// import { MARKETPLACE_EVENT_MODULE } from "../../../modules/marketplace-event"
// import MarketplaceEventModuleService from "../../../modules/marketplace-event/service"

export type LogMarketplaceEventStepInput = any

export const logMarketplaceEventStep = createStep(
  "log-marketplace-event",
  async (input: LogMarketplaceEventStepInput, { container }) => {
    // const service = container.resolve<MarketplaceEventModuleService>(MARKETPLACE_EVENT_MODULE)
    // const result = await service.logEvent(input)
    // return new StepResponse(result)
    
    return new StepResponse(input)
  }
)
