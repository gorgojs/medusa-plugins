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
import { IntegrationWildberriesCredentialsType } from "../../../providers/integration-wildberries/types"

export type IntegrationProductsType = {
  create: ContentV2CardsUploadPostRequestInner[]
  update: ContentV2CardsUpdatePostRequestInner[]
  merge: ContentV2CardsUploadAddPostRequest[]
}

export type ExportIntegrationProductsWbWorkflowInput = {
  credentials: IntegrationWildberriesCredentialsType
} & IntegrationProductsType

export const exportIntegrationProductsWbWorkflowId = "export-integration-products-wb"

export const exportIntegrationProductsWbWorkflow = createWorkflow(
  exportIntegrationProductsWbWorkflowId,
  (input: ExportIntegrationProductsWbWorkflowInput) => {
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
