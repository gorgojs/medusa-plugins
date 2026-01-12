import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importProductsStep } from "../steps"
import { MarketplaceCredentialsType } from "@gorgo/medusa-marketplace/modules/marketplace/types"

export type ImportMarketplaceProductsWbWorkflowInput = {
  credentials: MarketplaceCredentialsType
}

export const importMarketplaceProductsWbWorkflowId = "import-marketplace-products-wb"

export const importMarketplaceProductsWbWorkflow = createWorkflow(
  importMarketplaceProductsWbWorkflowId,
  (input: ImportMarketplaceProductsWbWorkflowInput) => {
    const importResult = importProductsStep({ credentials: input.credentials })

    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)
