import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getProductsStep,
  getMarketplaceProductsStep,
  importProductsStep,
  mapMarketplaceProductsStep
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"
import { strict } from "assert"


export type ImportProductsMarketplaceWorkflowInput = {
  ids?: string[]
}

export const importMarketplaceProductsWorkflow = createWorkflow(
  "import-products-marketplace",
  (input: ImportProductsMarketplaceWorkflowInput) => {
    const products = getProductsStep(input)
    const marketplaceProducts = getMarketplaceProductsStep(products)
    const medusaProducts = mapMarketplaceProductsStep(marketplaceProducts)
    const startedAt = new Date()
    const importResult = importProductsStep(medusaProducts)
    console.log(importResult)
    logMarketplaceEventWorkflow.runAsStep({
      input: {
        startedAt,
        finishedAt: new Date(),
        action: "UPDATE",
        direction: "MARKETPLACE_TO_MEDUSA",
        entityType: "PRODUCT",
        requestData: input,
        responseData: importResult,
      }
    })
    // const offerIds = getOfferIdsStep(input.ids)
    // const marketplaceProducts = getProductsMarketpaceStep(offerIds)
    // const products = mapProductsStep(marketplaceProducts)
    // const result = saveProductsStep(products)
    // return new WorkflowResponse(result)
    return new WorkflowResponse(importResult)
  }
)
