import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { INTEGRATION_MODULE, IntegrationModuleService } from "@gorgo/medusa-integration"

export type GetIntegrationSettingsStepInput = {
  plugin_id: string
  instance_id?: string | null
}

export const getIntegrationSettingsStep = createStep(
  "get-integration-settings",
  async (input: GetIntegrationSettingsStepInput, { container }) => {
    const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const settings = await service.getResolvedSettings(input.plugin_id, input.instance_id)
    return new StepResponse(settings)
  }
)
