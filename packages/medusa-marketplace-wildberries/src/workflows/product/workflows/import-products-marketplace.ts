import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  logMarketplaceEventStep
} from "../steps"

export type ImportProductsMarketplaceWorkflowInput = {
  ids?: String[]
}

export const importProductsMarketplaceWorkflow = createWorkflow(
  "import-products-marketplace",
  (input: ImportProductsMarketplaceWorkflowInput) => {
    // ... steps
    const result = logMarketplaceEventStep({})

    return new WorkflowResponse(result)
  }
)
