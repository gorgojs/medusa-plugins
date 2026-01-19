import {
  createWorkflow,
  transform,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getProductsStep,
  mapToMarketplaceProductsStep,
  exportProductsStep,
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"
import { ExportMarketplaceProductsWorkflowInput } from "../../../types"

export const exportMarketplaceProductsWorkflowId = "export-marketplace-products"

export const exportMarketplaceProductsWorkflow = createWorkflow(
  exportMarketplaceProductsWorkflowId,
  (input: ExportMarketplaceProductsWorkflowInput) => {
    const providerId = input.marketplace.provider_id

    const products = getProductsStep({
      providerId,
      ids: input.ids
    })
    const marketplaceProducts = mapToMarketplaceProductsStep({
      providerId,
      products,
      // settings: input.marketplace.settings
    })
    const startedAt = transform({}, () => new Date())
    const exportResult = exportProductsStep({
      providerId,
      marketplaceProducts,
      credentials: input.marketplace.credentials
    })
    const finishedAt = transform({}, () => new Date())
    const logResult = logMarketplaceEventWorkflow.runAsStep({
      input: {
        marketplaceId: input.marketplace.id,
        startedAt,
        finishedAt,
        action: "UPDATE",
        direction: "MEDUSA_TO_MARKETPLACE",
        entityType: "PRODUCT",
        requestData: input,
        responseData: exportResult
      }
    })

    // TODO: define proper output
    return new WorkflowResponse(exportResult)
  }
)
