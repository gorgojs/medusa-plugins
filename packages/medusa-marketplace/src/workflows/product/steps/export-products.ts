import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"

export type ExportProductsStepInput = any

export const exportProductsStep = createStep(
  "export-products",
  async (input: ExportProductsStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    // const result = await marketplaceService.exportProducts()
    const result = exportProducts(input, container)

    return new StepResponse(result)
  }
)
