import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { GetOrdersInput } from "../../../types"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"

export type GetOrdersByTypeStepInput = {
  providerId: string
} & Omit<GetOrdersInput, "container">

export const getOrdersByTypeStep = createStep(
  "get-orders-by-type",
  async (input: GetOrdersByTypeStepInput, { container }) => {
    const marketplaceService: MarketplaceModuleService = container.resolve(MARKETPLACE_MODULE)
    const { providerId, orderType, ...data } = input

    const orders = await marketplaceService.getOrders(providerId, {
      container,
      orderType,
      ...data
    })
    
    return new StepResponse(orders)
  }
)

