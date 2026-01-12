import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  importProductsStep
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"
import { MarketplaceDTO } from "../../../modules/marketplace/types"

export type ImportMarketplaceProductsWorkflowInput = {
  marketplace: MarketplaceDTO,
  ids?: String[]
}

export const importMarketplaceProductsWorkflowId = "import-marketplace-products"

export const importMarketplaceProductsWorkflow = createWorkflow(
  importMarketplaceProductsWorkflowId,
  (input: ImportMarketplaceProductsWorkflowInput) => {   
     
    const startedAt = new Date()
    const importResult = importProductsStep({
      providerId: input.marketplace.provider_id,
      credentials: input.marketplace.credentials
    })
    const logResult = logMarketplaceEventWorkflow.runAsStep({
      input: {
        startedAt,
        finishedAt: new Date(),
        action: "UPDATE",
        direction: "MARKETPLACE_TO_MEDUSA",
        entityType: "PRODUCT",
        requestData: input,
        responseData: importResult,
      }
    })

    return new WorkflowResponse(importResult)
  }
)
