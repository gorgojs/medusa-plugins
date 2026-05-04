import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import {
  UpdateOfferMappingDTO,
  ApiResponseStatusType,
  UpdateOfferMappingResultDTO,
} from "../../../lib/yandex-market-client/api"
import { IntegrationYandexMarketCredentialsType } from "../../../providers/integration-yandex-market/types"
import { withBusinessId, businessOfferMappingsApi } from "../../../lib/ym-client"

const BATCH_SIZE = 100

export type ExportroductsStepInput = {
  credentials: IntegrationYandexMarketCredentialsType
  products: UpdateOfferMappingDTO[]
}

export const exportYmProductsStepId = "export-ym-products"

export const exportProductsStep = createStep(
  exportYmProductsStepId,
  async (input: ExportroductsStepInput) => {
    const batches: {
      status: ApiResponseStatusType
      results?: UpdateOfferMappingResultDTO[] | null
    }[] = []

    const api = businessOfferMappingsApi(input.credentials)

    for (let offset = 0; offset < input.products.length; offset += BATCH_SIZE) {
      const batch = input.products.slice(offset, offset + BATCH_SIZE)
      if (!batch.length) continue

      const response = await api.updateOfferMappings(
        withBusinessId(input.credentials, {
          updateOfferMappingsRequest: { offerMappings: batch },
          language: "RU",
        })
      )

      const { status, results } = response.data
      batches.push({ status, results })
    }

    return new StepResponse({ batches })
  }
)
