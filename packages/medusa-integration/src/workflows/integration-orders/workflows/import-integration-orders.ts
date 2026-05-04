import { createWorkflow, transform, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { ImportIntegrationOrdersWorkflowInput } from "../../../types/workflow/integration-orders/import-orders"
import { createOrdersStep, getIntegrationOrdersStep, mapToMedusaOrdersStep } from "../steps"
import { logIntegrationEventWorkflow } from "../../integration-event"

export const importIntegrationOrdersWorkflowId = "import-integration-orders"

export const importIntegrationOrdersWorkflow = createWorkflow(
  importIntegrationOrdersWorkflowId,
  (input: ImportIntegrationOrdersWorkflowInput) => {
    const integration = input.integration

    const startedAt = transform({}, () => new Date())
    const integrationOrders = getIntegrationOrdersStep({
      providerId: integration.provider_id,
      integration,
      orderType: input.orderType
    })

    const medusaOrders = mapToMedusaOrdersStep({
      providerId: integration.provider_id,
      integration,
      integrationOrders: integrationOrders
    })

    const result = createOrdersStep({
      orders: medusaOrders
    })
    const finishedAt = transform({}, () => new Date())

    const logResult = logIntegrationEventWorkflow.runAsStep({
      input: {
        integrationId: integration.id,
        startedAt,
        finishedAt,
        action: "CREATE",
        direction: "INTEGRATION_TO_MEDUSA",
        entityType: "ORDER",
        requestData: input,
        responseData: result,
      }
    })

    return new WorkflowResponse(result)
  }
)
