import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/workflows-sdk"
import {
  getProductsStep,
  getMarketplaceProductsStatusStep,
  updateMarketplaceProductsStatusStep
} from "../steps"

export type UpdateMarketplaceProductsStatusWorkflowInput = {
  ids: string[]
}

export const updateMarketplaceProductsStatusWorkflow = createWorkflow(
  "update-marketplace-products-status",
  (input: UpdateMarketplaceProductsStatusWorkflowInput) => {
    const products = getProductsStep(input)
    const marketplaceProductsStatus = getMarketplaceProductsStatusStep(products)
    const result = updateMarketplaceProductsStatusStep(marketplaceProductsStatus)

    return new WorkflowResponse(marketplaceProductsStatus)
  }
)
