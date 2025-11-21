import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importProductsMarketplaceWorkflow } from "./import-products-marketplace"
import { exportProductsMarketplaceWorkflow } from "./export-products-marketplace"

export type SyncProductsMarketplaceWorkflowInput = {
  ids?: string[]
}

export const syncProductsMarketplaceWorkflowId = "sync-products-marketplace"

export const syncProductsMarketplaceWorkflow = createWorkflow(
  syncProductsMarketplaceWorkflowId,
  (input: SyncProductsMarketplaceWorkflowInput) => {
    const importWorkflowResult = importProductsMarketplaceWorkflow.runAsStep({ input })
    const exportWorkflowResult = exportProductsMarketplaceWorkflow.runAsStep({ input })

    const result = {
      exportWorkflowResult,
      importWorkflowResult,
    }

    return new WorkflowResponse(result)
  }
)
