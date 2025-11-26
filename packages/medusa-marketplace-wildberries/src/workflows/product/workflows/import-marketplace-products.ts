import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  importProductsStep
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"

export type ImportMarketplaceProductsWorkflowInput = {
  ids?: String[]
}

export const importMarketplaceProductsWorkflow = createWorkflow(
  "import-marketplace-products",
  (input: ImportMarketplaceProductsWorkflowInput) => {
    
    const startedAt = new Date()
    const importResult = importProductsStep()
    const logResult = logMarketplaceEventWorkflow.runAsStep({
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

    return new WorkflowResponse(importResult)
  }
)
