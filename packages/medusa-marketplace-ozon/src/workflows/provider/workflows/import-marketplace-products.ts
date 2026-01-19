import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importMarketplaceProductsStep } from "../steps"
import { MarketplaceOzonCredentialsType } from "../../../providers/marketplace-ozon/types"

export type ImportMarketplaceProductsOzonWorkflowInput = {
  credentials: MarketplaceOzonCredentialsType
}

export const importMarketplaceProductsWorkflow = createWorkflow(
  "import-ozon-products",
  (input: ImportMarketplaceProductsOzonWorkflowInput) => {
    const importResult = importMarketplaceProductsStep({ credentials: input.credentials })
    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)
