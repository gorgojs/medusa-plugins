import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { getMarketplaceProductsStatus } from "../../../providers/marketplace/core"

export type GetMarketplaceProductsStatusStepInput = any

export const getMarketplaceProductsStatusStep = createStep(
  "get-marketplace-products-status",
  async (input: GetMarketplaceProductsStatusStepInput) => {
    const marketplaceProducts = getMarketplaceProductsStatus(input)

    return new StepResponse(marketplaceProducts)
  }
)
