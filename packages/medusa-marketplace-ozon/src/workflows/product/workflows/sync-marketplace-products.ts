import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import {
  importMarketplaceProductsWorkflow,
  exportMarketplaceProductsWorkflow
 } from "."

export type SyncProductsMarketplaceWorkflowInput = {
  ids: string[]
}

export const syncProductsMarketplaceWorkflow = createWorkflow(
  "sync-products-marketplace",
  (input: SyncProductsMarketplaceWorkflowInput) => {
    const importWorkflowResult = importMarketplaceProductsWorkflow.runAsStep({ input })
    const exportWorkflowResult = exportMarketplaceProductsWorkflow.runAsStep({ input })

    const result = {
      exportWorkflowResult,
      importWorkflowResult,
    }

    return new WorkflowResponse(result)
  }
)