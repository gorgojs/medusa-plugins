import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { ImportMarketplaceOrdersWorkflowInput } from "../../../types/workflow/marketplace-orders/import-orders"
import { createOrdersStep, getMarketplaceOrdersStep, mapToMedusaOrdersStep } from "../steps"

export const importMarketplaceOrdersWorkflowId = "import-marketplace-orders"

export const importMarketplaceOrdersWorkflow = createWorkflow(
  importMarketplaceOrdersWorkflowId,
  (input: ImportMarketplaceOrdersWorkflowInput) => {
    const marketplace = input.marketplace

    const marketplaceOrders = getMarketplaceOrdersStep({
      providerId: marketplace.provider_id,
      marketplace,
      orderType: input.orderType
    })

    const medusaOrders = mapToMedusaOrdersStep({
      providerId: marketplace.provider_id,
      marketplace,
      marketplaceOrders: marketplaceOrders
    })

    const result = createOrdersStep({
      orders: medusaOrders
    })

    // TODO: log the result of the import using the logMarketplaceEventWorkflow

    return new WorkflowResponse(result)
  }
)
