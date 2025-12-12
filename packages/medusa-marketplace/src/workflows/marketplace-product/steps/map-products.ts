import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"

export type MapToMarketplaceProductsStepInput = {
  providerId: string,
  [key: string]: any
}

export const mapToMarketplaceProductsStep = createStep(
  "map-to-marketplace-products",
  async (input: MapToMarketplaceProductsStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, ...data } = input

    const marketplaceProducts = await marketplaceService.mapToMarketplaceProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(marketplaceProducts)
  }
)

export type MapToMedusaProductsStepInput = {
  providerId: string,
  [key: string]: any
}

export const mapToMedusaProductsStep = createStep(
  "map-to-medusa-products",
  async (input: MapToMedusaProductsStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, ...data } = input

    const marketplaceProducts = await marketplaceService.mapToMedusaProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(marketplaceProducts)
  }
)
