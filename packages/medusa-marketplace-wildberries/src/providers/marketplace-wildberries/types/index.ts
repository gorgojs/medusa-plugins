import { MarketplaceCredentialsType, MarketplaceSettingsType } from "@gorgo/medusa-marketplace/types"

export const MAX_VARIANTS_TO_CREATE = 30

export interface MarketplaceWildberriesCredentialsType extends MarketplaceCredentialsType {
  apiKey: string
}

export interface MarketplaceWildberriesSettingsType extends MarketplaceSettingsType {
  // TODO
}
