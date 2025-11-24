import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { importProducts } from "../../../providers/marketplace";

export const importProductsStep = createStep(
  "import-products",
  async (input) => {
    const result = await importProducts(input)

    return new StepResponse(result)
  }
)

