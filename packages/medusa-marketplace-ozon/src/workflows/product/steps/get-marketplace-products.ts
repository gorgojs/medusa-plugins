import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { getMarketplaceProducts } from "../../../providers/marketplace/core"

export type GetMarketplaceProductsStepInput = any

export const getMarketplaceProductsStep = createStep(
  "get-marketplace-products",
  async (input: GetMarketplaceProductsStepInput) => {
    const marketplaceProducts = getMarketplaceProducts(input)

    return new StepResponse(marketplaceProducts)
  }
)