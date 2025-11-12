import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"

import {
  getMedusaProductsStep,
  mapProductsToYmFormatStep,
  runYmExportStep
} from "../steps"

export const runYmProductExportWorkflow = createWorkflow(
  "run-ym-product-export",
  (input) => {
    const products = getMedusaProductsStep()
    const productsMap = mapProductsToYmFormatStep(products)
    const result = runYmExportStep(productsMap)
    return new WorkflowResponse(result)
  }
)
