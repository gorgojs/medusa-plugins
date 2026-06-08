import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { ImportProductsInput } from "../../../types"

type ImportProductsStepInput = {
  providerId: string
} & Omit<ImportProductsInput, "container">

export const importProductsStep = createStep(
  "import-products",
  async (input: ImportProductsStepInput, { container }) => {
    const integrationService: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const { providerId, ...data } = input

    const result = await integrationService.importProducts(providerId, { 
      container,
      ...data
    })

    return new StepResponse(result)
  }
)

