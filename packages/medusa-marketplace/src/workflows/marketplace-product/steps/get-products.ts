import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MarketplaceDTO } from "../../../types"

export type GetProductsStepInput = {
  providerId: string,
  marketplace: MarketplaceDTO,
  ids?: string[],
}

export const getProductsStep = createStep(
  "get-products",
  async (input: GetProductsStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, ...data } = input

    const products = await marketplaceService.getProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(products)
  }
)

export type GetMarketplaceProductsStepInput = {
  providerId: string,
  marketplace: MarketplaceDTO,
  ids?: string[],
}

export const getMarketplaceProductsStep = createStep(
  "get-marketplace-products",
  async (input: GetMarketplaceProductsStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, ...data } = input

    const products = await marketplaceService.getMarketplaceProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(products)
  }
)
