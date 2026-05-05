import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { logIntegrationEventStep } from "../steps"
import { LogIntegrationEventWorkflowInput } from "../../../types"

export const logIntegrationEventWorkflowId = "log-integration-event"

export const logIntegrationEventWorkflow = createWorkflow(
  logIntegrationEventWorkflowId,
  (input: LogIntegrationEventWorkflowInput) => {
    const result = logIntegrationEventStep(input)

    return new WorkflowResponse(result)
  }
)
