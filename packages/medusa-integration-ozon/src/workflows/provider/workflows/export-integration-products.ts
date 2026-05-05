import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { createIntegrationProductsStep } from "../steps"
import { IntegrationOzonCredentialsType } from "../../../providers/integration-ozon/types"
import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api"

export type ExportIntegrationProductsOzonWorkflowInput = {
  create: V3ImportProductsRequestItem[]
  credentials: IntegrationOzonCredentialsType
}

export const exportIntegrationProductsWorkflow = createWorkflow(
  "export-ozon-products",
  (input: ExportIntegrationProductsOzonWorkflowInput) => {
    const createResponse  = createIntegrationProductsStep({ products: input.create, credentials: input.credentials })
    const result = {
      createResponse
    }
    
    return new WorkflowResponse(result)
  }
)
