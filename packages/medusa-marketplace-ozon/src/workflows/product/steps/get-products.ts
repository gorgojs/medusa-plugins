import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export type GetProductsStepInput = string[]

export const getProductsStep = createStep(
  "get-products",
  async (input: GetProductsStepInput, { container }) => {
    
    // TODO: implement actual product fetching logic
    const products = []

    return new StepResponse(products)
  }
)
