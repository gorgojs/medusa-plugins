import { Configuration, BusinessOfferMappingsApi, ContentApi } from "./yandex-market-client"
import { MarketplaceYandexMarketCredentialsType } from "../providers/marketplace-yandex-market/types/marketplace"

function assertValidCredentials(credentials: MarketplaceYandexMarketCredentialsType) {
  if (!credentials.api_key) {
    throw new Error("Yandex Market credentials are missing api_key")
  }
  const business_id = Number(credentials.business_id)
  if (!Number.isFinite(business_id)) {
    throw new Error("Yandex Market credentials are missing a valid business_id")
  }
  return { api_key: credentials.api_key, business_id }
}

export const withBusinessId = <T extends object>(credentials: MarketplaceYandexMarketCredentialsType, body: T) => {
  const { api_key, business_id } = assertValidCredentials(credentials)
  return {
    apiKey: api_key,
    businessId: business_id,
    ...body,
  }
}

export function businessOfferMappingsApi(credentials: MarketplaceYandexMarketCredentialsType) {
  const { api_key } = assertValidCredentials(credentials)
  return new BusinessOfferMappingsApi(new Configuration({ apiKey: api_key }))
}

export function contentApi(credentials: MarketplaceYandexMarketCredentialsType) {
  const { api_key } = assertValidCredentials(credentials)
  return new ContentApi(new Configuration({ apiKey: api_key }))
}

