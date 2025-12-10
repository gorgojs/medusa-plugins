import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"

type ImportProductsStepInput = {
  providerId: string
}

export const importProductsStep = createStep(
  "import-products",
  async (input: ImportProductsStepInput, { container }) => {
    const marketplaceModuleService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, ...data } = input

    const result = await marketplaceModuleService.importProducts(providerId, { 
      container,
      ...data
    })

    return new StepResponse(result)
  }
)

