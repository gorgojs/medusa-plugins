import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { importProducts } from "../../../providers/marketplace/core";

export type ImportProductsStepInput = any

export const importProductsStep = createStep(
  "import-products",
  async (input: ImportProductsStepInput, {container}) => {
    const result = await importProducts(input, container)

    return new StepResponse(result)
  }
)

