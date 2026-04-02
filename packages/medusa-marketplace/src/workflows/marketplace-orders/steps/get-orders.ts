import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { GetMarketplaceOrdersInput } from "../../../types"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"

export type GetOrdersByTypeStepInput = {
  providerId: string
} & Omit<GetMarketplaceOrdersInput, "container">

export const getMarketplaceOrdersStep = createStep(
  "get-orders-by-type",
  async (input: GetOrdersByTypeStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, orderType, ...data } = input

    const marketplaceOrders = await marketplaceService.getMarketplaceOrders(providerId, {
      container,
      orderType,
      ...data
    })
    
    return new StepResponse(marketplaceOrders)
  }
)

