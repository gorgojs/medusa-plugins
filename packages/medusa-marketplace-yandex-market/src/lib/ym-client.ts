import { Configuration, BusinessOfferMappingsApi, ContentApi } from './yandex-market-client';
import { MarketplaceYandexMarketCredentialsType } from "../providers/marketplace-yandex-market/types"

export const withBusinessId = <T extends object>(credentials: MarketplaceYandexMarketCredentialsType, body: T) => ({
  apiKey: credentials.apiKey,
  businessId: Number(credentials.businessId),
  ...body,
});

export function businessOfferMappingsApi(credentials: MarketplaceYandexMarketCredentialsType){
  return new BusinessOfferMappingsApi(new Configuration({
    apiKey: credentials.apiKey
  }))
}

export function contentApi(credentials: MarketplaceYandexMarketCredentialsType){
  return new ContentApi(new Configuration({
    apiKey: credentials.apiKey
  }))
}

