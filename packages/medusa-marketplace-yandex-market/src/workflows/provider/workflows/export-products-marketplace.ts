import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import {
  exportProductsStep
} from "../steps"
import {
  UpdateOfferMappingDTO
} from "../../../lib/yandex-market-client"
import { MarketplaceYandexMarketCredentialsType } from "../../../providers/marketplace-yandex-market/types"

export type ExportMarketplaceProducstYmWorkflowInput = {
  credentials: MarketplaceYandexMarketCredentialsType,
  products: UpdateOfferMappingDTO[]
}

export const exportMarketplaceProductsYmWorkflowId = "export-marketplace-products-ym"

export const exportMarketplaceProductsYmWorkflow = createWorkflow(
  exportMarketplaceProductsYmWorkflowId,
  (input: ExportMarketplaceProducstYmWorkflowInput) => {
    const credentials = input.credentials

    const exportProducts = exportProductsStep({
      credentials,
      products: input.products
    })

    const result = {
      exportProducts
    }
    return new WorkflowResponse(result)
  }
)
