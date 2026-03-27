import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { createOrderWorkflow } from "@medusajs/medusa/core-flows"
import { MedusaOrder } from "../../../types"

export type CreateMedusaOrdersStepInput = {
  region_id?: string
  orders: MedusaOrder[]
}

export const createMedusaOrdersStep = createStep(
  "create-medusa-orders",
  async (input: CreateMedusaOrdersStepInput, { container }) => {
    const { orders } = input

    if (!input.region_id || !orders.length) {
      return new StepResponse()
    }

    for (const order of orders) {
      const result = await createOrderWorkflow(container).run({
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
    }

    return new StepResponse()
  }
)
