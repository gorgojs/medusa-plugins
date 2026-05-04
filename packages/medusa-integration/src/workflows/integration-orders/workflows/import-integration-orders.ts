import { createWorkflow, transform, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { ImportMarketplaceOrdersWorkflowInput } from "../../../types/workflow/integration-orders/import-orders"
import { createOrdersStep, getMarketplaceOrdersStep, mapToMedusaOrdersStep } from "../steps"
import { logMarketplaceEventWorkflow } from "../../integration-event"

export const importMarketplaceOrdersWorkflowId = "import-marketplace-orders"

export const importMarketplaceOrdersWorkflow = createWorkflow(
  importMarketplaceOrdersWorkflowId,
  (input: ImportMarketplaceOrdersWorkflowInput) => {
    const marketplace = input.marketplace

    const startedAt = transform({}, () => new Date())
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
    const finishedAt = transform({}, () => new Date())

    const logResult = logMarketplaceEventWorkflow.runAsStep({
      input: {
        marketplaceId: marketplace.id,
        startedAt,
        finishedAt,
        action: "CREATE",
        direction: "MARKETPLACE_TO_MEDUSA",
        entityType: "ORDER",
        requestData: input,
        responseData: result,
      }
    })

    return new WorkflowResponse(result)
  }
)
