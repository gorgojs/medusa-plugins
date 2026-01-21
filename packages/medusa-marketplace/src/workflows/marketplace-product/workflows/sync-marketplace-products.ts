import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { importMarketplaceProductsWorkflow } from "./import-marketplace-products"
import { exportMarketplaceProductsWorkflow } from "./export-marketplace-products"
import { SyncMarketplaceProductsWorkflowInput } from "../../../types"

export const syncMarketplaceProductsWorkflowId = "sync-marketplace-products"

export const syncMarketplaceProductsWorkflow = createWorkflow(
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
