import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { createOrderWorkflow } from "@medusajs/medusa/core-flows"
import { MedusaOrder } from "../../../types"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export type CreateMedusaOrdersStepInput = {
  region_id?: string
  orders: MedusaOrder[]
}

export const createMedusaOrdersStep = createStep(
  "create-medusa-orders",
  async (input: CreateMedusaOrdersStepInput, { container }) => {
    const { orders } = input

    const marketplaceService = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
    const link = container.resolve(ContainerRegistrationKeys.LINK)

    if (!input.region_id || !orders.length) {
      return new StepResponse()
    }

    for (const order of orders) {
      const { result } = await createOrderWorkflow(container).run({
        input: {
          region_id: input.region_id,
          sales_channel_id: order.sales_channel_id,
          email: order.email,
          shipping_address: order.shipping_address,
          billing_address: order.shipping_address,
          items: order.items,
          metadata: order.metadata
        }
      })

      marketplaceService.createMarketplaceOrders({
        order_id: order.marketplace_order.order_id,
        marketplace_id: order.marketplace_order.marketplace_id,
        status: order.marketplace_order.status,
        type: order.marketplace_order.type
      })

      await link.create({
        marketplace: {
          marketplace_order_id: order.marketplace_order.order_id
        },
        order: {
          order_id: result.id
        }
      })
    }

    return new StepResponse()
  }
)
