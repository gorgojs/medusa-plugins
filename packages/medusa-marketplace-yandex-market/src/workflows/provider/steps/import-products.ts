import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import {
  ApiResponseStatusType,
  GetOfferMappingsRequest,
  GetOfferMappingDTO,
} from "../../../lib/yandex-market-client/api"
import { MarketplaceYandexMarketCredentialsType } from "../../../providers/marketplace-yandex-market/types"
import { withBusinessId, businessOfferMappingsApi } from "../../../lib/ym-client"

const PAGE_LIMIT = 100

export type ImportProductsStepInput = {
  credentials: MarketplaceYandexMarketCredentialsType
  request?: GetOfferMappingsRequest
}

export const importProductsStepId = "import-products"

export const importProductsStep = createStep(
  importProductsStepId,
  async (input: ImportProductsStepInput, { container }) => {
    const query = container.resolve("query")

    const updatedVariantsIds: {
      yandex_market_imtID?: string
      yandex_market_needToSync?: string
      yandex_market_sizeSkus?: Set<string> | null
    }[] = []

    const updatedProductsIds: {
      yandex_market_imtID?: string
      yandex_market_needToSync?: string
      yandex_market_sizeSkus?: Set<string> | null
    }[] = []

    const pages: {
      status: ApiResponseStatusType
      offerMappings: GetOfferMappingDTO[]
      nextPageToken?: string | null
    }[] = []

    let pageToken: string | undefined
    const api = businessOfferMappingsApi(input.credentials)

    do {
      const response = await api.getOfferMappings(
        withBusinessId(input.credentials, {
          pageToken,
          limit: PAGE_LIMIT,
          getOfferMappingsRequest: input.request,
        })
      )

      const { status, result } = response.data
      const offerMappings: GetOfferMappingDTO[] = result?.offerMappings ?? []
      const nextPageToken = result?.paging?.nextPageToken ?? null

      pages.push({ status, offerMappings, nextPageToken })
      pageToken = nextPageToken || undefined
    } while (pageToken)

    for (const page of pages) {
      const offerMappings = page.offerMappings ?? []

      for (const mapping of offerMappings) {
        const yandex_market_imtID = mapping.offer?.offerId
        const yandex_market_needToSync = mapping.offer?.cardStatus
        const yandex_market_sizeSkus = mapping.offer?.barcodes

        updatedVariantsIds.push({
          yandex_market_imtID,
          yandex_market_needToSync,
        })

        updatedProductsIds.push({
          yandex_market_sizeSkus,
        })
      }
    }

    return new StepResponse({
      updatedProductsIds,
      updatedVariantsIds,
    })
  }
)
