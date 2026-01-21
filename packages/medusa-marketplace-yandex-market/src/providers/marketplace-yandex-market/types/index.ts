import { MarketplaceCredentialsType, MarketplaceSettingsType } from "@gorgo/medusa-marketplace/modules/marketplace/types"

export const MAX_VARIANTS_TO_CREATE = 30

export interface MarketplaceYandexMarketCredentialsType extends MarketplaceCredentialsType {
  apiKey: string
}

export interface MarketplaceYandexMarketSettingsType extends MarketplaceSettingsType {
  // TODO
}
