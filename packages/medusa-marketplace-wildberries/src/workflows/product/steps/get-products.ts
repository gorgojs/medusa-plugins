import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"

import { getProducts } from "../../../providers/marketplace"

export type GetProductsStepInput = {
  ids?: string[]
}

export const getProductsStep = createStep(
  "get-products",
  async (input: GetProductsStepInput, { container }) => {
    const products = await getProducts(input, container)
    
    return new StepResponse(products)
  }
)
