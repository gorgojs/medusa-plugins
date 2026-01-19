import {
  createWorkflow,
  transform,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  importProductsStep,
  mapToMedusaProductsStep
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"
import { ImportMarketplaceProductsWorkflowInput } from "../../../types"

export const importMarketplaceProductsWorkflowId = "import-marketplace-products"

export const importMarketplaceProductsWorkflow = createWorkflow(
  importMarketplaceProductsWorkflowId,
  (input: ImportMarketplaceProductsWorkflowInput) => {   

    // const marketplaceProducts = getMarketplaceProductsStep({
    //   providerId: input.marketplace.provider_id,
    //   credentials: input.marketplace.credentials
    //   ids: input.ids
    // })
    // const products = mapToProductsStep({
    //   providerId: input.marketplace.provider_id,
    //   marketplaceProducts,
    //   settings: input.marketplace.settings
    // })
    
    const startedAt = transform({}, () => new Date())
    const importResult = importProductsStep({
      providerId: input.marketplace.provider_id,
      credentials: input.marketplace.credentials,
      // products
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
