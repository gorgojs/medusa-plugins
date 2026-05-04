import {
  createWorkflow,
  transform,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getProductsStep,
  mapToIntegrationProductsStep,
  exportProductsStep,
} from "../steps"
import { logIntegrationEventWorkflow } from "../../integration-event"
import { ExportIntegrationProductsWorkflowInput } from "../../../types"

export const exportIntegrationProductsWorkflowId = "export-integration-products"

export const exportIntegrationProductsWorkflow = createWorkflow(
  exportIntegrationProductsWorkflowId,
  (input: ExportIntegrationProductsWorkflowInput) => {
    const integration = input.integration

    const products = getProductsStep({
      providerId: integration.provider_id,
      integration,
      ids: input.ids
    })
    const integrationProducts = mapToIntegrationProductsStep({
      providerId: integration.provider_id,
      integration,
      products
    })
    const startedAt = transform({}, () => new Date())
    const exportResult = exportProductsStep({
      providerId: integration.provider_id,
      integration,
      integrationProducts,
    })
    const finishedAt = transform({}, () => new Date())
    const logResult = logIntegrationEventWorkflow.runAsStep({
      input: {
        integrationId: input.integration.id,
        startedAt,
        finishedAt,
        action: "UPDATE",
        direction: "MEDUSA_TO_INTEGRATION",
        entityType: "PRODUCT",
        requestData: input,
        responseData: exportResult
      }
    })

    // TODO: define proper output
    return new WorkflowResponse(exportResult)
  }
)
