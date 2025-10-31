import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { getMarketplaceProductsStatus } from "../../../providers/marketplace"

export type GetMarketplaceProductsStepInput = any

export const getMarketplaceProductsStatusStep = createStep(
  "get-marketplace-products-status",
  async (input: GetMarketplaceProductsStepInput) => {
    const marketplaceProducts = getMarketplaceProductsStatus(input)

    return new StepResponse(marketplaceProducts)
  }
)
