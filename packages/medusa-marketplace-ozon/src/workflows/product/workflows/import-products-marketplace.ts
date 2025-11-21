import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"

export type ImportProductsMarketplaceWorkflowInput = {
  ids: String[]
}

export const importProductsMarketplaceWorkflow = createWorkflow(
  "import-products-marketplace",
  (input: ImportProductsMarketplaceWorkflowInput) => {
    // const offerIds = getOfferIdsStep(input.ids)
    // const marketplaceProducts = getProductsMarketpaceStep(offerIds)
    // const products = mapProductsStep(marketplaceProducts)
    // const result = saveProductsStep(products)
    // return new WorkflowResponse(result)
    return new WorkflowResponse(true)
  }
)