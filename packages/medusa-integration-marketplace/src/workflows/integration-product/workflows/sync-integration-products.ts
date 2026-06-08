import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importIntegrationProductsWorkflow } from "./import-integration-products"
import { exportIntegrationProductsWorkflow } from "./export-integration-products"
import { SyncIntegrationProductsWorkflowInput } from "../../../types"

export const syncIntegrationProductsWorkflowId = "sync-integration-products"

export const syncIntegrationProductsWorkflow = createWorkflow(
  syncIntegrationProductsWorkflowId,
  (input: SyncIntegrationProductsWorkflowInput) => {
    const importWorkflowResult = importIntegrationProductsWorkflow.runAsStep({ input })
    const exportWorkflowResult = exportIntegrationProductsWorkflow.runAsStep({ input })

    const result = {
      exportWorkflowResult,
      importWorkflowResult,
    }

    return new WorkflowResponse(result)
  }
)
