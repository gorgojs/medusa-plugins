import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getProductsStep,
  mapProductsStep,
  exportProductsStep,
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"

export type ExportMarketplaceProductsWorkflowInput = {
  ids?: string[]
}

export const exportMarketplaceProductsWorkflowId = "export-marketplace-products"

export const exportMarketplaceProductsWorkflow = createWorkflow(
  exportMarketplaceProductsWorkflowId,
  (input: ExportMarketplaceProductsWorkflowInput) => {
    const products = getProductsStep(input)
    const marketplaceProducts = mapProductsStep(products)
    const startedAt = new Date()
    const exportResult = exportProductsStep(marketplaceProducts)
    const logResult = logMarketplaceEventWorkflow.runAsStep({
      input: {
        startedAt,
        finishedAt: new Date(),
        action: "UPDATE",
        direction: "MEDUSA_TO_MARKETPLACE",
        entityType: "PRODUCT",
        requestData: input,
        responseData: exportResult
      }
    })

    // TODO: define proper output
    return new WorkflowResponse(exportResult)
  }
)
