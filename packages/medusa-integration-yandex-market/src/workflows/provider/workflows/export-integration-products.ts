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
import { IntegrationYandexMarketCredentialsType } from "../../../providers/integration-yandex-market/types"

export type ExportIntegrationProducstYmWorkflowInput = {
  credentials: IntegrationYandexMarketCredentialsType,
  products: UpdateOfferMappingDTO[]
}

export const exportIntegrationProductsYmWorkflowId = "export-integration-products-ym"

export const exportIntegrationProductsYmWorkflow = createWorkflow(
  exportIntegrationProductsYmWorkflowId,
  (input: ExportIntegrationProducstYmWorkflowInput) => {
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
