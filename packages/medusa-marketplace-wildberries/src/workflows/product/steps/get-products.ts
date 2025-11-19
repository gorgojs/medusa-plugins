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
  async (input: GetProductsStepInput) => {
    const products = getProducts(input)
    
    return new StepResponse(products)
  }
)
