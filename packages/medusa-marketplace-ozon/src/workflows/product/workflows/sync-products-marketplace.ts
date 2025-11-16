import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import {
  importProductsMarketplaceWorkflow,
  exportProductsMarketplaceWorkflow
 } from "./"

export type SyncProductsMarketplaceWorkflowInput = {
  ids: string[]
}

export const syncProductsMarketplaceWorkflow = createWorkflow(
  "sync-products-marketplace",
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