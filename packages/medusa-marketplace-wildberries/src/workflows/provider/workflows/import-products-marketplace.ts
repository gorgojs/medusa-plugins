import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importProductsStep } from "../steps"

export const importProductsMarketplaceWorkflowId = "import-products-marketplace-wb"

export const importProductsMarketplaceWorkflow = createWorkflow(
  importProductsMarketplaceWorkflowId,
  () => {
    const importResult = importProductsStep()

    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)
