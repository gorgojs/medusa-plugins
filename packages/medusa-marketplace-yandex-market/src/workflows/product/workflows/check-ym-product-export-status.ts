import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"

export const checkYmProductExportStatusWorkflow = createWorkflow(
  "check-ym-product-export-status",
  (input) => {
    return new WorkflowResponse(true)
  }
)
