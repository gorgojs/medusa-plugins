import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importProductsStep } from "../steps"
import { IntegrationWildberriesCredentialsType } from "../../../providers/integration-wildberries/types"

export type ImportIntegrationProductsWbWorkflowInput = {
  credentials: IntegrationWildberriesCredentialsType
}

export const importIntegrationProductsWbWorkflowId = "import-integration-products-wb"

export const importIntegrationProductsWbWorkflow = createWorkflow(
  importIntegrationProductsWbWorkflowId,
  (input: ImportIntegrationProductsWbWorkflowInput) => {
    const importResult = importProductsStep({ credentials: input.credentials })

    const result = {
      importResult
    }
    
    return new WorkflowResponse(result)
  }
)
