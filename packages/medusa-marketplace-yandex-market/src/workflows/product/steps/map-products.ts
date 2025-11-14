import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import {
  ProductDTO,
} from "@medusajs/framework/types"

import { mapProductsToMarketplace } from "../../../lib"

export type MapProductsStepInput = ProductDTO[]

export const mapProductsStep = createStep(
  "map-products",
  async (input: MapProductsStepInput) => {
    const marketplaceProducts = mapProductsToMarketplace(input)
    
    return new StepResponse(marketplaceProducts)
  }
)
