import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { ProductDTO } from "@medusajs/framework/types"
import { importProductsToMedusaStep } from "../steps"

export type ImportProductsToMedusaYmWorkflowInput = {
  products: ProductDTO[]
}

export const importProductsToMedusaYmWorkflowId = "import-products-to-medusa-ym"

export const importProductsToMedusaYmWorkflow = createWorkflow(
  importProductsToMedusaYmWorkflowId,
  (input: ImportProductsToMedusaYmWorkflowInput) => {
    const importResult = importProductsToMedusaStep({ products: input.products })
    return new WorkflowResponse(importResult)
  }
)
