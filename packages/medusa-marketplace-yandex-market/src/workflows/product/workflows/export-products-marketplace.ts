import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/workflows-sdk"
import {
  getProductsStep,
  mapProductsStep,
  exportProductsStep
} from "../steps"

export type ExportProductsWorkflowInput = {
  ids: string[]
}

import { logMarketplaceEventWorkflow } from "../../marketplace-event"

export const exportProductsMarketplaceWorkflow = createWorkflow(
  "export-products-marketplace",
  (input: ExportProductsWorkflowInput) => {
    const products = getProductsStep({ ids: input.ids })
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
        responseData: exportResult as unknown as Record<string, string>,
      }
    })

    // TODO: define proper output
    return new WorkflowResponse(exportResult)
  }
)
