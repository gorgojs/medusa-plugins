import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"

export type MapProductsStepInput = {
  providerId: string,
  [key: string]: any
}

export const mapProductsStep = createStep(
  "map-products",
  async (input: MapProductsStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, ...data } = input

    const marketplaceProducts = await marketplaceService.mapProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(marketplaceProducts)
  }
)
