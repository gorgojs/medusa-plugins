import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"
import type { PluginKind } from "../../../modules/integration/descriptor/define"

export type UpsertIntegrationRecordStepInput = {
  plugin_id: string
  instance_id: string | null
  plugin_kind: PluginKind
  schema_version: number
  settings: Record<string, unknown>
  credentials_ciphertext: string | null
  credentials_iv: string | null
  title?: string | null
}

export const upsertIntegrationRecordStep = createStep(
  "upsert-integration-record",
  async (input: UpsertIntegrationRecordStepInput, { container }) => {
    const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const [existing] = await service.listIntegrations(
      { plugin_id: input.plugin_id, instance_id: input.instance_id },
      { take: 1 }
    )
    let record
    if (existing) {
      record = await service.updateIntegrations({ id: existing.id, ...input })
    } else {
      record = await service.createIntegrations(input)
    }
    return new StepResponse(record, { id: record.id, existed: !!existing })
  }
)
