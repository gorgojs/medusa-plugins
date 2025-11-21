import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import {
  ProductDTO,
} from "@medusajs/framework/types"

import { mapProducts } from "../../../providers/marketplace"

export type MapProductsStepInput = any

export const mapProductsStep = createStep(
  "map-products",
  async (input: MapProductsStepInput) => {
    const marketplaceProducts = mapProducts(input)
    
    return new StepResponse(marketplaceProducts)
  }
)
