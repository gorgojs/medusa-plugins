import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceCredentialsType } from "../../../types"

type ImportProductsStepInput = {
  providerId: string,
  credentials: MarketplaceCredentialsType
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

