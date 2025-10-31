import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { logMarketplaceEventStep } from "../steps"
import { LogEventInput } from "../../../modules/marketplace/service"

export type LogMarketplaceEventWorkflowInput = LogEventInput

export const logMarketplaceEventWorkflowId = "log-marketplace-event"

export const logMarketplaceEventWorkflow = createWorkflow(
  logMarketplaceEventWorkflowId,
  (input: LogMarketplaceEventWorkflowInput) => {
    const result = logMarketplaceEventStep(input)

    return new WorkflowResponse(result)
  }
)
