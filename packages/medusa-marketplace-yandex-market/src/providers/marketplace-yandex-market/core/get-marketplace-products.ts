import {
  ApiResponseStatusType,
  GetOfferMappingsRequest,
  GetOfferMappingDTO
} from "../../../lib/yandex-market-client/api"
import { withBusinessId, businessOfferMappingsApi } from "../../../lib/ym-client"

const PAGE_LIMIT = 100

export type GetOfferMappingsStepInput = {
  request?: GetOfferMappingsRequest
}

export type OfferMappingsPage = {
  status: ApiResponseStatusType
  offerMappings: GetOfferMappingDTO[]
  nextPageToken?: string | null
}

export const getMarketplaceProducts = async ( input?: GetOfferMappingsStepInput ) => {
  const { request } = input ?? {}
  const pages: OfferMappingsPage[] = []
  let pageToken: string | undefined

  do {
    const response = await businessOfferMappingsApi.getOfferMappings(
      withBusinessId({
        pageToken,
        limit: PAGE_LIMIT,
        getOfferMappingsRequest: request,
      })
    )

    const { status, result } = response.data

    const offerMappings: GetOfferMappingDTO[] = result?.offerMappings ?? []
    const nextPageToken = result?.paging?.nextPageToken ?? null

    pages.push({ status, offerMappings, nextPageToken, })

    pageToken = nextPageToken || undefined

  } while (pageToken)

  return pages
}
