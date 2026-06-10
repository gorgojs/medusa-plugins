import { createWorkflow, WorkflowResponse, transform } from "@medusajs/framework/workflows-sdk"
import { deleteIntegrationRecordStep, emitIntegrationEventStep } from "../steps"

export type DeleteIntegrationWorkflowInput = {
  plugin_id: string
  instance_id?: string | null
  hard?: boolean
}

export const deleteIntegrationWorkflowId = "delete-integration"

export const deleteIntegrationWorkflow = createWorkflow(
  deleteIntegrationWorkflowId,
  function (input: DeleteIntegrationWorkflowInput) {
    const result = deleteIntegrationRecordStep(
      transform({ input }, (d) => ({
        plugin_id: d.input.plugin_id,
        instance_id: d.input.instance_id ?? null,
        hard: d.input.hard ?? false,
      }))
    )
    emitIntegrationEventStep(
      transform({ input }, (d) => ({
        name: "integration.updated",
        data: {
          plugin_id: d.input.plugin_id,
          instance_id: d.input.instance_id ?? null,
          change: d.input.hard ? "delete" : "disable",
        },
      }))
    )
    return new WorkflowResponse(result)
  }
)
