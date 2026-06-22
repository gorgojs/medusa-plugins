import { createWorkflow, WorkflowResponse, transform } from "@medusajs/framework/workflows-sdk"
import {
  validateAndEncryptStep,
  upsertIntegrationRecordStep,
  emitIntegrationEventStep
} from "../steps"

export type UpsertIntegrationWorkflowInput = {
  provider_id: string
  title?: string | null
  payload: Record<string, unknown>
}

export const upsertIntegrationWorkflowId = "upsert-integration"

export const upsertIntegrationWorkflow = createWorkflow(
  upsertIntegrationWorkflowId,
  function (input: UpsertIntegrationWorkflowInput) {
    const prepared = validateAndEncryptStep({
      provider_id: input.provider_id,
      payload: input.payload,
    })

    const recordInput = transform({ input, prepared }, (data) => ({
      provider_id: data.input.provider_id,
      title: data.input.title ?? null,
      module: data.prepared.module,
      schema_version: data.prepared.schema_version,
      options: data.prepared.options,
      credentials_ciphertext: data.prepared.credentials_ciphertext,
      credentials_iv: data.prepared.credentials_iv,
    }))

    const record = upsertIntegrationRecordStep(recordInput)

    emitIntegrationEventStep(
      transform({ input }, (d) => ({
        name: "integration.updated",
        data: {
          provider_id: d.input.provider_id,
          change: "update",
        },
      }))
    )

    return new WorkflowResponse(record)
  }
)
