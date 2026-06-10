import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"

export type DeleteIntegrationRecordStepInput = {
  plugin_id: string
  instance_id: string | null
  hard?: boolean
}

export const deleteIntegrationRecordStep = createStep(
  "delete-integration-record",
  async (input: DeleteIntegrationRecordStepInput, { container }) => {
    const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const [existing] = await service.listIntegrations(
      { plugin_id: input.plugin_id, instance_id: input.instance_id },
      { take: 1 }
    )
    if (!existing) return new StepResponse({ deleted: false })
    if (input.hard) {
      await service.deleteIntegrations(existing.id)
    } else {
      await service.updateIntegrations({ id: existing.id, is_enabled: false })
    }
    return new StepResponse({ deleted: true })
  }
)
