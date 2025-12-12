import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  importProductsStep
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"

export type ImportMarketplaceProductsWorkflowInput = {
  providerId: string,
  ids?: String[]
}

export const importMarketplaceProductsWorkflowId = "import-marketplace-products"

export const importMarketplaceProductsWorkflow = createWorkflow(
  importMarketplaceProductsWorkflowId,
  (input: ImportMarketplaceProductsWorkflowInput) => {
    const providerId = input.providerId
    
    const startedAt = new Date()
    const importResult = importProductsStep({ providerId })
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
