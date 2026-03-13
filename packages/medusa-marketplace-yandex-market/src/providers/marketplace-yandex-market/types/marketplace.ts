import { MarketplaceCredentialsType, MarketplaceSettingsType } from "@gorgo/medusa-marketplace/types"
import { BaseMappingSchema } from "./mapping"

export interface MarketplaceYandexMarketCredentialsType extends MarketplaceCredentialsType {
  api_key?: string
  business_id?: number | string
}

export const MAX_VARIANTS_TO_CREATE = 100

export interface MarketplaceYandexMarketSettingsType extends MarketplaceSettingsType {
  marketplace_to_medusa_mapping_schema?: BaseMappingSchema
  medusa_to_marketplace_mapping_schema?: BaseMappingSchema
}
