import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"

import { exportProducts } from "../../../providers/marketplace"

export type ExportProductsStepInput = any

export const exportProductsStep = createStep(
  "export-products",
  async (input: ExportProductsStepInput) => {
    const result = exportProducts(input)
    
    return new StepResponse(result)
  }, 
  // 
)
