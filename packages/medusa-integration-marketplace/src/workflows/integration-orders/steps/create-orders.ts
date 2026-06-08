import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { createOrderWorkflow } from "@medusajs/medusa/core-flows"
import { MedusaOrder } from "../../../types"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { CreateOrderDTO, OrderDTO } from "@medusajs/framework/types"
import { Link } from "@medusajs/modules-sdk"

export type CreateOrdersStepInput = {
  region_id?: string
  orders: MedusaOrder[]
}

export const createOrdersStep = createStep(
  "create-orders",
  async (input: CreateOrdersStepInput, { container }) => {
    const { orders } = input

    const integrationService = container.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
    const link = container.resolve<Link>(ContainerRegistrationKeys.LINK)

    if (!orders.length) {
      return new StepResponse()
    }

    const createOrdersResults: OrderDTO[] = []

    for (const order of orders) {
      const { integration_order: integrationOrder, ...medusaOrder } = order

      const [existingOrder] = await integrationService.listIntegrationOrders({
        order_id: integrationOrder.order_id
      }, { take: 1 })

      if (existingOrder) {
        continue
      }

      const { result } = await createOrderWorkflow(container).run({
        input: {
          ...medusaOrder
        }
      })

      await integrationService.createIntegrationOrders({
        ...integrationOrder
      })

      await link.create({
        integration: {
          integration_order_id: integrationOrder.order_id
        },
        order: {
          order_id: result.id
        }
      })

      createOrdersResults.push(result)
    }

    return new StepResponse(createOrdersResults)
  }
)
