import { createWorkflow, WorkflowResponse, transform } from "@medusajs/framework/workflows-sdk"
import { runTestConnectionStep, emitIntegrationEventStep } from "../steps"

export type TestIntegrationConnectionWorkflowInput = {
  plugin_id: string
  instance_id?: string | null
}

export const testIntegrationConnectionWorkflowId = "test-integration-connection"

export const testIntegrationConnectionWorkflow = createWorkflow(
  testIntegrationConnectionWorkflowId,
  function (input: TestIntegrationConnectionWorkflowInput) {
    const result = runTestConnectionStep(
      transform({ input }, (d) => ({
        plugin_id: d.input.plugin_id,
        instance_id: d.input.instance_id ?? null,
      }))
    )
    emitIntegrationEventStep(
      transform({ input, result }, (d) => ({
        name: "integration.tested",
        data: {
          plugin_id: d.input.plugin_id,
          instance_id: d.input.instance_id ?? null,
          status: d.result.status,
          message: d.result.message,
        },
      }))
    )
    return new WorkflowResponse(result)
  }
)
