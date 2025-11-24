import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"

import { mapProductsToMedusa } from "../../../providers/marketplace"

export type MapProductsStepInput = any

export const mapMarketplaceProductsStep = createStep(
  "map-marketplace-products",
  async (input: MapProductsStepInput) => {
    const marketplaceProducts = mapProductsToMedusa(input)
    
    return new StepResponse(marketplaceProducts)
  }
)
