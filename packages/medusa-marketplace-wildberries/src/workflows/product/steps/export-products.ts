import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"

import { exportProducts } from "../../../providers/marketplace"

export type ExportProductsStepInput = any

export const exportProductsStep = createStep(
  "export-products",
  async (input: ExportProductsStepInput, { container }) => {
    const result = await exportProducts(input, container)

    return new StepResponse(result)
  }
)
