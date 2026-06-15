import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { getIntegrationSettingsStep } from "../steps"

export type GetIntegrationSettingsWorkflowInput = {
  plugin_id: string
  instance_id?: string | null
}

export const getIntegrationSettingsWorkflowId = "get-integration-settings"

export const getIntegrationSettingsWorkflow = createWorkflow(
  getIntegrationSettingsWorkflowId,
  (input: GetIntegrationSettingsWorkflowInput) => {
    const settings = getIntegrationSettingsStep({
      plugin_id: input.plugin_id,
      instance_id: input.instance_id
    })
    return new WorkflowResponse(settings)
  }
)
