import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importOzonProductsStep } from "../steps"

export const importOzonMarketplaceProductsWorkflow = createWorkflow(
  "import-products-marketplace-ozon",
  (input) => {
    const importResult = importOzonProductsStep(input)

    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)