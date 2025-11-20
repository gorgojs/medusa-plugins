import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { importProducts } from "../../../providers/marketplace"


export const importProductsStep = createStep(
  "import-products",
  async (_, { container }) => {
    const products = importProducts()

    return new StepResponse(products)
  }
)
