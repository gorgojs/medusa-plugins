import { createWorkflow, WorkflowResponse, transform } from "@medusajs/framework/workflows-sdk"
import { deleteIntegrationRecordStep, emitIntegrationEventStep } from "../steps"

export type DeleteIntegrationWorkflowInput = {
  provider_id: string
  hard?: boolean
}

export const deleteIntegrationWorkflowId = "delete-integration"

export const deleteIntegrationWorkflow = createWorkflow(
  deleteIntegrationWorkflowId,
  function (input: DeleteIntegrationWorkflowInput) {
    const result = deleteIntegrationRecordStep(
      transform({ input }, (d) => ({
        provider_id: d.input.provider_id,
        hard: d.input.hard ?? false,
      }))
    )
    emitIntegrationEventStep(
      transform({ input }, (d) => ({
        name: "integration.updated",
        data: {
          provider_id: d.input.provider_id,
          change: d.input.hard ? "delete" : "disable",
        },
      }))
    )
    return new WorkflowResponse(result)
  }
)
