import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { RemoteQueryFunction } from "@medusajs/framework/types"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../modules/integration"

export type UpdateExchangeProfileStepInput = {
  id: string
  integration_id: string
  warehouse_id?: string
  order_type?: string
  stock_location_id?: string
}

export const updateExchangeProfileStep = createStep(
  "update-exchange-profile",
  async (input: UpdateExchangeProfileStepInput, { container }) => {
    const query = container.resolve<RemoteQueryFunction>(ContainerRegistrationKeys.QUERY)
    const service = container.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
    console.log("input", input)

    const { data } = await query.graph({
      entity: "integration_exchange_profile",
      fields: ["id", "integration_id", "warehouse_id", "order_type", "stock_location.id"],
      filters: {
        id: input.id
      }
    })
    const prevData = data[0]
    console.log("prevData", prevData)

    const exchangeProfile = await service.updateIntegrationExchangeProfiles(input)

    return new StepResponse({
      exchangeProfile,
      stock_location_id: prevData?.stock_location?.id
    }, prevData)
  },
  async (prevData, { container }) => {
    if (!prevData) return

    const service = container.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
    service.updateIntegrationExchangeProfiles({
      id: prevData.id,
      integration_id: prevData.integration_id,
      warehouse_id: prevData.warehouse_id,
      order_type: prevData.order_type
    })
  }
)
