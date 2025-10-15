import {
  createWorkflow,
  transform,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getMarketplaceProductsStep,
  importProductsStep,
  mapToMedusaProductsStep
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"
import { ImportMarketplaceProductsWorkflowInput } from "../../../types"

export const importMarketplaceProductsWorkflowId = "import-marketplace-products"

export const importMarketplaceProductsWorkflow = createWorkflow(
  importMarketplaceProductsWorkflowId,
  (input: ImportMarketplaceProductsWorkflowInput) => {   
    const marketplace = input.marketplace

    const marketplaceProducts = getMarketplaceProductsStep({
      providerId: marketplace.provider_id,
      marketplace,
      ids: input.ids
    })
    const products = mapToMedusaProductsStep({
      providerId: marketplace.provider_id,
      marketplace,
      marketplaceProducts,
    })
    
    const startedAt = transform({}, () => new Date())
    const importResult = importProductsStep({
      providerId: marketplace.provider_id,
      marketplace,
      products
    })
    const finishedAt = transform({}, () => new Date())
    const logResult = logMarketplaceEventWorkflow.runAsStep({
      input: {
        marketplaceId: input.marketplace.id,
        startedAt,
        finishedAt,
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
