import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { IntegrationDTO, MedusaOrder } from "../../../types"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { IntegrationModuleService } from "../../../modules/integration/services"

export type MapToMedusaOrdersStepInput = {
  integration: IntegrationDTO
  providerId: string
  integrationOrders: any[]
}

export const mapToMedusaOrdersStep = createStep(
  "map-to-medusa-orders",
  async (input: MapToMedusaOrdersStepInput, { container }) => {
    const integrationService: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const { integration, providerId, integrationOrders } = input

    const orders = await integrationService.mapToMedusaOrders(providerId, {
      container,
      integration,
      integrationOrders: integrationOrders
    })

    return new StepResponse<MedusaOrder[]>(orders)
  }
)
