import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getProductsStep,
  mapProductsStep,
  exportProductsStep,
} from "../steps"

export type ExportProductsMarketplaceWorkflowInput = {
  ids?: string[]
}

export const exportProductsMarketplaceWorkflowId = "export-products-marketplace"

export const exportProductsMarketplaceWorkflow = createWorkflow(
  exportProductsMarketplaceWorkflowId,
  (input: ExportProductsMarketplaceWorkflowInput) => {
    const products = getProductsStep(input)
    const marketplaceProducts = mapProductsStep(products)
    // const startedAt = Date.now()
    const result = exportProductsStep(marketplaceProducts)
    // run logMarketplaceEventWorkflow as step with startedAt and transformed result

    // TODO: define proper output
    return new WorkflowResponse(result)
  }
)
