import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/workflows-sdk"
import { importYmProductsStep } from "../steps"

export const importYmMarketplaceProductsWorkflow = createWorkflow(
  "import-ym-marketplace-products",
  (input) => {
    const importResult = importYmProductsStep(input)

    return new WorkflowResponse(importResult)
  }
)
