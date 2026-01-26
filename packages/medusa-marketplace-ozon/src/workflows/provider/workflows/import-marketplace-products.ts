import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importMarketplaceProductsStep } from "../steps"
import { ProductDTO } from "@medusajs/framework/types"

export type ImportMarketplaceProductsOzonWorkflowInput = {
  products: ProductDTO[]
}

export const importMarketplaceProductsWorkflow = createWorkflow(
  "import-ozon-products",
  (input: ImportMarketplaceProductsOzonWorkflowInput) => {
    const importResult = importMarketplaceProductsStep({ products: input.products })
    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)
