import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/workflows-sdk"
import { importProductsStep } from "../steps"
import { MarketplaceYandexMarketCredentialsType } from "../../../providers/marketplace-yandex-market/types"

export type ImportMarketplaceProductsYmWorkflowInput = {
  credentials: MarketplaceYandexMarketCredentialsType
}

export const importMarketplaceProductsYmWorkflowId = "import-marketplace-products-ym"

export const importMarketplaceProductsYmWorkflow = createWorkflow(
  importMarketplaceProductsYmWorkflowId,
  (input: ImportMarketplaceProductsYmWorkflowInput) => {
    const importResult = importProductsStep({ credentials: input.credentials })

    const result = {
      importResult
    }

    return new WorkflowResponse(result)
  }
)
