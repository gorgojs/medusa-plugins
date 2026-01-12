import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  getProductsStep,
  mapToMarketplaceProductsStep,
  exportProductsStep,
} from "../steps"
import { logMarketplaceEventWorkflow } from "../../marketplace-event"
import { MarketplaceDTO } from "../../../modules/marketplace/types"

export type ExportMarketplaceProductsWorkflowInput = {
  marketplace: MarketplaceDTO,
  ids?: string[]
}

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
      products
    })
    const startedAt = new Date()
    const exportResult = exportProductsStep({
      providerId,
      marketplaceProducts,
      credentials: input.marketplace.credentials
    })
    const logResult = logMarketplaceEventWorkflow.runAsStep({
      input: {
        startedAt,
        finishedAt: new Date(),
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
