import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { ImportMarketplaceOrdersWorkflowInput } from "../../../types/workflow/marketplace-orders/import-marketplace-orders"
import { getOrdersByTypeStep, mapToMedusaOrdersStep } from "../steps"

export const importMarketplaceOrdersWorkflowId = "import-marketplace-orders"

export const importMarketplaceOrdersWorkflow = createWorkflow(
  importMarketplaceOrdersWorkflowId,
  (input: ImportMarketplaceOrdersWorkflowInput) => {
    const marketplace = input.marketplace

    const marketplaceOrders = getOrdersByTypeStep({
      providerId: marketplace.provider_id,
      marketplace,
      orderType: input.orderType
    })

    const medusaOrders = mapToMedusaOrdersStep({
      providerId: marketplace.provider_id,
      marketplace,
      orders: marketplaceOrders
    })

    // TODO: create medusa orders based on the mapped orders
    // log the result of the import using the logMarketplaceEventWorkflow

    return new WorkflowResponse(medusaOrders)
  }
)
