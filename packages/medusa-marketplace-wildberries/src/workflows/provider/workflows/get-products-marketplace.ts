import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { prepareDataForSyncStep } from "../steps"

export type GetProductsMarketplaceWorkflowInput = {
  ids?: string[]
}

export const getProductsMarketplaceWorkflowId = "get-products-marketplace"

export const getProductsMarketplaceWorkflow = createWorkflow(
  getProductsMarketplaceWorkflowId,
  (input: GetProductsMarketplaceWorkflowInput) => {

    const result = prepareDataForSyncStep(input) // TODO: loop over arrays

    return new WorkflowResponse(result)
  }
)
