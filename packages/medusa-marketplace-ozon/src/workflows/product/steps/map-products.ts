import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"

import { mapProductsToMarketplace } from "../../../providers/marketplace"

export type MapProductsStepInput = any

export const mapProductsStep = createStep(
  "map-products",
  async (input: MapProductsStepInput) => {
    const marketplaceProducts = mapProductsToMarketplace(input)
    
    return new StepResponse(marketplaceProducts)
  }
)
