import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { LogEventInput } from "../../../types"
import { IntegrationModuleService } from "../../../modules/integration/services"

export type LogIntegrationEventStepInput = LogEventInput

export const logIntegrationEventStep = createStep(
  "log-integration-event",
  async (input: LogIntegrationEventStepInput, { container }) => {
    const service = container.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
    const result = await service.logEvent(input)
    
    return new StepResponse(result)
  }
)
