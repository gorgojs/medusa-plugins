import { Configuration, BusinessOfferMappingsApi, ContentApi } from './yandex-market-client';
import { MarketplaceCredentialsType } from  "@gorgo/medusa-marketplace/modules/marketplace/types"

// const BASE_URL = "https://api.partner.market.yandex.ru"

export const withBusinessId = <T extends object>(credentials: MarketplaceCredentialsType, body: T) => ({
  apiKey: credentials.apiKey,
  businessId: credentials.businessId,
  ...body,
});

export function businessOfferMappingsApi(credentials: MarketplaceCredentialsType){
  return new BusinessOfferMappingsApi(new Configuration({
    apiKey: credentials.apiKey
  }))
}

export function contentApi(credentials: MarketplaceCredentialsType){
  return new ContentApi(new Configuration({
    apiKey: credentials.apiKey
  }))
}

