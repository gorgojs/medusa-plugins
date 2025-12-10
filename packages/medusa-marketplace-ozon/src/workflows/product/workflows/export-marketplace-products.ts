import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/workflows-sdk"
import {
  getProductsStep,
  mapProductsStep,
  exportProductsStep
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"

export type exportProductsWorkflowInput = {
  ids: string[]
}

export const exportMarketplaceProductsWorkflow = createWorkflow(
  "export-products-marketplace",
  (input: exportProductsWorkflowInput) => {
    const products = getProductsStep(input)
    const marketplaceProducts = mapProductsStep(products)
    const startedAt = new Date()
    // const exportResult = exportProductsStep(marketplaceProducts)
    // const logResult = logMarketplaceEventWorkflow.runAsStep({
    //   input: {
    //     startedAt,
    //     finishedAt: new Date(),
    //     action: "UPDATE",
    //     direction: "MEDUSA_TO_MARKETPLACE",
    //     entityType: "PRODUCT",
    //     requestData: input,
    //     responseData: exportResult as unknown as Record<string, unknown>,
    //   }
    // })

    return new WorkflowResponse(products)
  }
)
