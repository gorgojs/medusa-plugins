import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { ProductDTO } from "@medusajs/types"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceDTO, MarketplaceProductDTO } from "../../../types"

export type MapToMarketplaceProductsStepInput = {
  providerId: string,
  marketplace: MarketplaceDTO,
  products: ProductDTO[],
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
  marketplace: MarketplaceDTO,
  marketplaceProducts: MarketplaceProductDTO[],
}

export const mapToMedusaProductsStep = createStep(
  "map-to-medusa-products",
  async (input: MapToMedusaProductsStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, ...data } = input

    const products = await marketplaceService.mapToMedusaProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(products)
  }
)
