import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { ExportProductsInput } from "../../../types"

export type ExportProductsStepInput = {
  providerId: string
} & Omit<ExportProductsInput, "container">

export const exportProductsStep = createStep(
  "export-products",
  async (input: ExportProductsStepInput, { container }) => {
    const integrationService: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const { providerId, ...data } = input

    const result = await integrationService.exportProducts(providerId, {
      container,
      ...data
    })

    return new StepResponse(result)
  }
)
