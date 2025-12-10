import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importMarketplaceProductsWorkflow } from "./import-marketplace-products"
import { exportMarketplaceProductsWorkflow } from "./export-marketplace-products"

export type SyncMarketplaceProductsWorkflowInput = {
  providerId: string,
  ids?: string[]
}

export const syncMarketplaceProductsWorkflowId = "sync-marketplace-products"

export const syncProductsMarketplaceWorkflow = createWorkflow(
  syncMarketplaceProductsWorkflowId,
  (input: SyncMarketplaceProductsWorkflowInput) => {
    const importWorkflowResult = importMarketplaceProductsWorkflow.runAsStep({ input })
    const exportWorkflowResult = exportMarketplaceProductsWorkflow.runAsStep({ input })

    const result = {
      exportWorkflowResult,
      importWorkflowResult,
    }

    return new WorkflowResponse(result)
  }
)
