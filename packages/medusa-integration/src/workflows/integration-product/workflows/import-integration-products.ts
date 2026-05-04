import {
  createWorkflow,
  transform,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getIntegrationProductsStep,
  importProductsStep,
  mapToMedusaProductsStep
} from "../steps"
import { logIntegrationEventWorkflow } from "../../integration-event"
import { ImportIntegrationProductsWorkflowInput } from "../../../types"

export const importIntegrationProductsWorkflowId = "import-integration-products"

export const importIntegrationProductsWorkflow = createWorkflow(
  importIntegrationProductsWorkflowId,
  (input: ImportIntegrationProductsWorkflowInput) => {   
    const integration = input.integration

    const integrationProducts = getIntegrationProductsStep({
      providerId: integration.provider_id,
      integration,
      ids: input.ids
    })
    const products = mapToMedusaProductsStep({
      providerId: integration.provider_id,
      integration,
      integrationProducts,
    })
    
    const startedAt = transform({}, () => new Date())
    const importResult = importProductsStep({
      providerId: integration.provider_id,
      integration,
      products
    })
    const finishedAt = transform({}, () => new Date())
    const logResult = logIntegrationEventWorkflow.runAsStep({
      input: {
        integrationId: input.integration.id,
        startedAt,
        finishedAt,
        action: "UPDATE",
        direction: "INTEGRATION_TO_MEDUSA",
        entityType: "PRODUCT",
        requestData: input,
        responseData: importResult,
      }
    })

    return new WorkflowResponse(importResult)
  }
)
