import { createWorkflow, WorkflowResponse, transform } from "@medusajs/framework/workflows-sdk"
import {
  validateAndEncryptStep,
  upsertIntegrationRecordStep,
  emitIntegrationEventStep
} from "../steps"

export type UpsertIntegrationWorkflowInput = {
  plugin_id: string
  instance_id?: string | null
  title?: string | null
  payload: Record<string, unknown>
}

export const upsertIntegrationWorkflowId = "upsert-integration"

export const upsertIntegrationWorkflow = createWorkflow(
  upsertIntegrationWorkflowId,
  function (input: UpsertIntegrationWorkflowInput) {
    const prepared = validateAndEncryptStep({
      plugin_id: input.plugin_id,
      instance_id: input.instance_id,
      payload: input.payload,
    })

    const recordInput = transform({ input, prepared }, (data) => ({
      plugin_id: data.input.plugin_id,
      instance_id: data.input.instance_id ?? null,
      title: data.input.title ?? null,
      plugin_kind: data.prepared.plugin_kind,
      schema_version: data.prepared.schema_version,
      settings: data.prepared.settings,
      credentials_ciphertext: data.prepared.credentials_ciphertext,
      credentials_iv: data.prepared.credentials_iv,
    }))

    const record = upsertIntegrationRecordStep(recordInput)

    emitIntegrationEventStep(
      transform({ input }, (d) => ({
        name: "integration.updated",
        data: {
          plugin_id: d.input.plugin_id,
          instance_id: d.input.instance_id ?? null,
          change: "update",
        },
      }))
    )

    return new WorkflowResponse(record)
  }
)
