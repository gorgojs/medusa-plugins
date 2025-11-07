import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"

export const runYmProductExportWorkflow = createWorkflow(
  "run-ym-product-export",
  (input) => {
    // step: const products = getProductsStep to export
    // step: const productsMap = mapProductsStep to YM format
    // step: runExportStep
    return new WorkflowResponse(true)
  }
)
