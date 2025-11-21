import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { importProducts } from "../../../providers/marketplace";

export const importProductsStep = createStep(
  "import-products",
  async (_, { container }) => {
    const result = await importProducts(container)

    return new StepResponse(result)
  }
)

