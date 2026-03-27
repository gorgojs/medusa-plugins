import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { ImportMarketplaceOrdersWorkflowInput } from "../../../types/workflow/marketplace-orders/import-orders"
import { createMedusaOrdersStep, getOrdersStep, mapToMedusaOrdersStep } from "../steps"
import { findOneOrAnyRegionStep } from "@medusajs/medusa/core-flows"

export const importMarketplaceOrdersWorkflowId = "import-marketplace-orders"

export const importMarketplaceOrdersWorkflow = createWorkflow(
  importMarketplaceOrdersWorkflowId,
  (input: ImportMarketplaceOrdersWorkflowInput) => {
    const marketplace = input.marketplace

    const marketplaceOrders = getOrdersStep({
      providerId: marketplace.provider_id,
      marketplace,
      orderType: input.orderType
    })

    const medusaOrders = mapToMedusaOrdersStep({
      providerId: marketplace.provider_id,
      marketplace,
      orders: marketplaceOrders
    })

    const region = findOneOrAnyRegionStep({})

    const result = createMedusaOrdersStep({
      region_id: region?.id,
      orders: medusaOrders
    })

    // TODO: log the result of the import using the logMarketplaceEventWorkflow

    return new WorkflowResponse(medusaOrders)
  }
)
