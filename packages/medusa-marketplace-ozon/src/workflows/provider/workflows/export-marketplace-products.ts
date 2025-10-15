import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { createMarketplaceProductsStep } from "../steps"
import { MarketplaceOzonCredentialsType } from "../../../providers/marketplace-ozon/types"
import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api"

export type ExportMarketplaceProductsOzonWorkflowInput = {
  create: V3ImportProductsRequestItem[]
  credentials: MarketplaceOzonCredentialsType
}

export const exportMarketplaceProductsWorkflow = createWorkflow(
  "export-ozon-products",
  (input: ExportMarketplaceProductsOzonWorkflowInput) => {
    const createResponse  = createMarketplaceProductsStep({ products: input.create, credentials: input.credentials })
    const result = {
      createResponse
    }
    
    return new WorkflowResponse(result)
  }
)
