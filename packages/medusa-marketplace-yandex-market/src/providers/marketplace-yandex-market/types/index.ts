import { MarketplaceCredentialsType, MarketplaceSettingsType } from "@gorgo/medusa-marketplace/types"

export interface MarketplaceYandexMarketCredentialsType extends MarketplaceCredentialsType {
  apiKey: string
  businessId: number
}

export interface MarketplaceYandexMarketSettingsType extends MarketplaceSettingsType {
  // TODO
}
