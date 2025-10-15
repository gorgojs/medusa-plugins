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
import { MarketplaceWildberriesCredentialsType } from "../../../providers/marketplace-wildberries/types"

export type MarketplaceProductsType = {
  create: ContentV2CardsUploadPostRequestInner[]
  update: ContentV2CardsUpdatePostRequestInner[]
  merge: ContentV2CardsUploadAddPostRequest[]
}

export type ExportMarketplaceProductsWbWorkflowInput = {
  credentials: MarketplaceWildberriesCredentialsType
} & MarketplaceProductsType

export const exportMarketplaceProductsWbWorkflowId = "export-marketplace-products-wb"

export const exportMarketplaceProductsWbWorkflow = createWorkflow(
  exportMarketplaceProductsWbWorkflowId,
  (input: ExportMarketplaceProductsWbWorkflowInput) => {
    const credentials = input.credentials

    const createResponse = createProductsStep({
      credentials,
      products: input.create
    })
    const updateResponse = updateProductCardsStep({
      credentials,
      productCards: input.update
    })
    const mergeResponse = mergeProductCardsStep({
      credentials,
      productCards: input.merge
    })
    const cardsErrors = collectErrorsStep({ credentials })

    const result = {
      createResponse,
      updateResponse,
      mergeResponse,
      cardsErrors
    }
    return new WorkflowResponse(result)
  }
)
