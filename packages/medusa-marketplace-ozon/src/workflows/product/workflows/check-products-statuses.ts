import {
  createWorkflow,
  WorkflowResponse,
  when
} from "@medusajs/workflows-sdk"
import {
  importProductsStep,
  getOfferIdsStep,
  checkProductsStatusesStep
} from "../steps"

export type checkProductsStatusesWorkflowInput = {
  ids: string[]
}

export const checkProductsStatusesWorkflow = createWorkflow(
  "check-products-statuses",
  (input: checkProductsStatusesWorkflowInput) => {
    const importedProducts = importProductsStep()
    const offerIds = getOfferIdsStep(importedProducts)
    const result = checkProductsStatusesStep(offerIds)

    return new WorkflowResponse(result)
  }
)
