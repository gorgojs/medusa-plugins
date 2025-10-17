import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"

import { mapProductsToMedusa } from "../../../providers/marketplace/core"

export type MapProductsToMedusaStepInput = any

export const mapMarketplaceProductsStep = createStep(
  "map-marketplace-products",
  async (input: MapProductsToMedusaStepInput) => {
    const marketplaceProducts = mapProductsToMedusa(input)
    
    return new StepResponse(marketplaceProducts)
  }
)
