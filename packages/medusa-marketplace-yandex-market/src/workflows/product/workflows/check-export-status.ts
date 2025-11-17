import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getExportsStep
} from "../steps"

export type CheckExportStatusWorkflowInput = {
  ids: String[]
}

export const checkExportStatusWorkflow = createWorkflow(
  "check-export-status",
  (input: CheckExportStatusWorkflowInput) => {
    
    const marketplaceExports = getExportsStep(input)

    // getExportStatus()


    return new WorkflowResponse({})
  }
)
