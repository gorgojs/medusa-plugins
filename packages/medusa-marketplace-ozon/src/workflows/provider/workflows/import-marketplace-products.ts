import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importMarketplaceProductsStep } from "../steps"

export const importMarketplaceProductsWorkflow = createWorkflow(
  "import-ozon-products",
  (input) => {
    const importResult = importMarketplaceProductsStep(input)

    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)