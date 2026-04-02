import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { createOrderWorkflow } from "@medusajs/medusa/core-flows"
import { MedusaOrder } from "../../../types"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { CreateOrderDTO } from "@medusajs/framework/types"

export type CreateOrdersStepInput = {
  region_id?: string
  orders: MedusaOrder[]
}

export const createOrdersStep = createStep(
  "create-orders",
  async (input: CreateOrdersStepInput, { container }) => {
    const { orders } = input

    const marketplaceService = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
    const link = container.resolve(ContainerRegistrationKeys.LINK)

    if (!orders.length) {
      return new StepResponse()
    }

    for (const order of orders) {
      const { marketplace_order: marketplaceOrder, ...medusaOrder } = order

      const { result } = await createOrderWorkflow(container).run({
        input: {
          ...medusaOrder
        }
      })

      marketplaceService.createMarketplaceOrders({
        ...marketplaceOrder
      })

      await link.create({
        marketplace: {
          marketplace_order_id: marketplaceOrder.order_id
        },
        order: {
          order_id: result.id
        }
      })
    }

    return new StepResponse()
  }
)
