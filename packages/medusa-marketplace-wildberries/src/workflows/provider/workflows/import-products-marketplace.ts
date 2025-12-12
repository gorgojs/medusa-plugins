import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importProductsStep } from "../steps"

export const importMarketplaceProductsWbWorkflowId = "import-marketplace-products-wb"

export const importMarketplaceProductsWbWorkflow = createWorkflow(
  importMarketplaceProductsWbWorkflowId,
  () => {
    const importResult = importProductsStep()

    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)
