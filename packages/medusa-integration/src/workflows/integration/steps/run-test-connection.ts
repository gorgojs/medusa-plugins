import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"

export type RunTestConnectionStepInput = {
  plugin_id: string
  instance_id: string | null
}

export const runTestConnectionStep = createStep(
  "run-test-connection",
  async (input: RunTestConnectionStepInput, { container }) => {
    const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const result = await service.runTestConnection(input.plugin_id, input.instance_id)

    const [existing] = await service.listIntegrations(
      { plugin_id: input.plugin_id, instance_id: input.instance_id },
      { take: 1 }
    )
    if (existing) {
      await service.updateIntegrations({
        id: existing.id,
        last_test_at: new Date(),
        last_test_status: result.status,
        last_test_message: result.message ?? null,
      })
    }
    return new StepResponse(result)
  }
)
