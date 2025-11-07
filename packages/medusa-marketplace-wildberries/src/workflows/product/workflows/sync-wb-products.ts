import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { syncWbCardsStep } from "../steps/sync-wb-cards"
import { prepareDataForSyncStep } from "../steps/prepare-data-for-sync"
import { createProductsStep } from "../steps/create-products"
import { updateProductCardsStep } from "../steps/update-product-cards"
import { mergeProductCardsStep } from "../steps/merge-product-cards"
import { collectErrorsStep } from "../steps/collect-errors"

export type SyncWbProductsWorkflowInput = Array<string>

export const syncWbProductsWorkflowId = "sync-wb-products"

export const syncWbProductsWorkflow = createWorkflow(
  syncWbProductsWorkflowId,
  (input: SyncWbProductsWorkflowInput = []) => {
    const syncResult = syncWbCardsStep()

    const { productsToCreate, productCardsToUpdate, productCardsToMerge } = prepareDataForSyncStep(input)

    const createResponse = createProductsStep(productsToCreate)

    const updateResponse = updateProductCardsStep(productCardsToUpdate)

    const mergeResponse = mergeProductCardsStep(productCardsToMerge)

    const cardsErrors = collectErrorsStep()

    const result = {
      createResponse,
      updateResponse,
      mergeResponse,
      cardsErrors,
      syncResult,
    }
    
    return new WorkflowResponse(result)
  }
)
