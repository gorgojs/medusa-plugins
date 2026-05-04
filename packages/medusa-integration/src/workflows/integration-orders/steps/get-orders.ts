import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { GetIntegrationOrdersInput } from "../../../types"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { IntegrationModuleService } from "../../../modules/integration/services"

export type GetOrdersByTypeStepInput = {
  providerId: string
} & Omit<GetIntegrationOrdersInput, "container">

export const getIntegrationOrdersStep = createStep(
  "get-orders-by-type",
  async (input: GetOrdersByTypeStepInput, { container }) => {
    const integrationService: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const { providerId, orderType, ...data } = input

    const integrationOrders = await integrationService.getIntegrationOrders(providerId, {
      container,
      orderType,
      ...data
    })
    
    return new StepResponse(integrationOrders)
  }
)

