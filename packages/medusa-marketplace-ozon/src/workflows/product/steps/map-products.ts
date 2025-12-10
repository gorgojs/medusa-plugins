import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"

import { mapProductsToMarketplace } from "../../../providers/marketplace/core"

export type MapProductsStepInput = any

export const mapProductsStep = createStep(
  "map-products",
  async (input: MapProductsStepInput, {container}) => {
    const marketplaceProducts = await mapProductsToMarketplace(input, container)
    
    return new StepResponse(marketplaceProducts)
  }
)
