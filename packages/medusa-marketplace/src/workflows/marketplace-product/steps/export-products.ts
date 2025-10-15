import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { ExportProductsInput } from "../../../types"

export type ExportProductsStepInput = {
  providerId: string
} & Omit<ExportProductsInput, "container">

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
