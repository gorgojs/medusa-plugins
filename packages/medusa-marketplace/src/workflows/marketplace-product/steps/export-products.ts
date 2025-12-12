import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"

export type ExportProductsStepInput = {
  providerId: string,
  [key: string]: any
}

export const exportProductsStep = createStep(
  "export-products",
  async (input: ExportProductsStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, ...data } = input

    const result = await marketplaceService.exportProducts(providerId, {
      container,
      ...data
    })

    return new StepResponse(result)
  }
)
