import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  createProductsStep,
  updateProductCardsStep,
  mergeProductCardsStep,
  collectErrorsStep
} from "../steps"

import {
  ContentV2CardsUploadPostRequestInner,
  ContentV2CardsUpdatePostRequestInner,
  ContentV2CardsUploadAddPostRequest
} from "../../../lib/wildberries-products-client"


export type GetMarketplaceProductsWbWorkflowInput = {
  create: ContentV2CardsUploadPostRequestInner[]
  update: ContentV2CardsUpdatePostRequestInner[]
  merge: ContentV2CardsUploadAddPostRequest[]
}

export const exportMarketplaceProductsWbWorkflowId = "export-marketplace-products-wb"

export const exportMarketplaceProductsWbWorkflow = createWorkflow(
  exportMarketplaceProductsWbWorkflowId,
  (input: GetMarketplaceProductsWbWorkflowInput) => {

    const createResponse = createProductsStep(input.create)
    const updateResponse = updateProductCardsStep(input.update)
    const mergeResponse = mergeProductCardsStep(input.merge)
    const cardsErrors = collectErrorsStep()

    const result = {
      createResponse,
      updateResponse,
      mergeResponse,
      cardsErrors
    }
    return new WorkflowResponse(result)
  }
)
