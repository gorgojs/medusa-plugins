import {
  ApiResponseStatusType,
  GetOfferCardsContentStatusRequest,
  OfferCardDTO
} from "../../../lib/yandex-market-client/api"
import { withBusinessId, contentApi } from "../../../lib/ym-client"

const PAGE_LIMIT = 100

export type GetOfferCardsContentStatusStepInput = {
  request: GetOfferCardsContentStatusRequest
}

export type OfferCardsContentStatusPage = {
  status: ApiResponseStatusType
  offerCards: OfferCardDTO[]
  nextPageToken?: string | null
}


export const getMarketplaceProductsStatus = async ( input: GetOfferCardsContentStatusStepInput ) => {
  
  const { request } = input
  const pages: OfferCardsContentStatusPage[] = []
  let pageToken: string | undefined

  do {
    const response = await contentApi.getOfferCardsContentStatus(
      withBusinessId({
        pageToken,
        limit: PAGE_LIMIT,
        getOfferCardsContentStatusRequest: request,
      })
    )

    const { status, result,} = response.data

    const offerCards = result?.offerCards ?? []
    const nextPageToken = result?.paging?.nextPageToken ?? null

    pages.push({
      status,
      offerCards,
      nextPageToken,
    })

    pageToken = nextPageToken || undefined
  } while (pageToken)

  return pages
}
