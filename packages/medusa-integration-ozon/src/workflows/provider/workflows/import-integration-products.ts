import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importIntegrationProductsStep } from "../steps"
import { ProductDTO } from "@medusajs/framework/types"
import { IntegrationOzonCredentialsType } from "../../../providers/integration-ozon/types"

export type ImportIntegrationProductsOzonWorkflowInput = {
  products: ProductDTO[]
  credentials: IntegrationOzonCredentialsType
}

export const importIntegrationProductsWorkflow = createWorkflow(
  "import-ozon-products",
  (input: ImportIntegrationProductsOzonWorkflowInput) => {
    const importResult = importIntegrationProductsStep({ products: input.products })
    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)
