import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { createProductsStep, mergeProductCardsStep, prepareDataForSyncStep, updateProductCardsStep } from "../steps"
import { collectErrorsStep } from "../steps/collect-errors"

export type ExportProductsMarketplaceWorkflowInput = Array<string>

export const exportProductsMarketplaceWorkflowId = "export-products-marketplace"

export const exportProductsMarketplaceWorkflow = createWorkflow(
  exportProductsMarketplaceWorkflowId,
  (input: ExportProductsMarketplaceWorkflowInput = []) => {
    const { productsToCreate, productCardsToUpdate, productCardsToMerge } = prepareDataForSyncStep(input)
    const createResponse = createProductsStep(productsToCreate)
    const updateResponse = updateProductCardsStep(productCardsToUpdate)
    const mergeResponse = mergeProductCardsStep(productCardsToMerge)
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
