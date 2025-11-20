import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  importProductsStep,
  logMarketplaceEventStep
} from "../steps"

export type ImportProductsMarketplaceWorkflowInput = {
  ids?: String[]
}

export const importProductsMarketplaceWorkflow = createWorkflow(
  "import-products-marketplace",
  (input: ImportProductsMarketplaceWorkflowInput) => {
    
    const importResult = importProductsStep()
    
    const result = logMarketplaceEventStep(importResult)

    return new WorkflowResponse(result)
  }
)
