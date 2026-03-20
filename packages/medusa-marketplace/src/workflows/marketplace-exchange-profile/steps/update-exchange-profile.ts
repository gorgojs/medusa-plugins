import { createStep, StepResponse } from "@medusajs/workflows-sdk"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"

export type UpdateExchangeProfileStepInput = {
  id: string
  marketplace_id: string
  warehouse_id?: string
  order_type?: string
  stock_location_id?: string
}

export const updateExchangeProfileStep = createStep(
  "update-exchange-profile",
  async (input: UpdateExchangeProfileStepInput, { container }) => {
    const query = container.resolve("query")
    const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
    console.log("input", input)

    const { data } = await query.graph({
      entity: "marketplace_exchange_profile",
      fields: ["id", "marketplace_id", "warehouse_id", "order_type", "stock_location.id"],
      filters: {
        id: input.id
      }
    })
    const prevData = data[0]
    console.log("prevData", prevData)

    const exchangeProfile = await service.updateMarketplaceExchangeProfiles(input)

    return new StepResponse({
      exchangeProfile,
      stock_location_id: prevData?.stock_location?.id
    }, prevData)
  },
  async (prevData, { container }) => {
    if (!prevData) return

    const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
    service.updateMarketplaceExchangeProfiles({
      id: prevData.id,
      marketplace_id: prevData.marketplace_id,
      warehouse_id: prevData.warehouse_id,
      order_type: prevData.order_type
    })
  }
)
