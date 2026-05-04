import { IntegrationCredentialsType, IntegrationSettingsType } from "@gorgo/medusa-integration/types"
import { BaseMappingSchema } from "./mapping"

export interface IntegrationYandexMarketCredentialsType extends IntegrationCredentialsType {
  api_key?: string
  business_id?: number | string
  campaign_id?: number | string
}

export const MAX_VARIANTS_TO_CREATE = 100

export interface IntegrationYandexMarketSettingsType extends IntegrationSettingsType {
  integration_to_medusa_mapping_schema?: BaseMappingSchema
  medusa_to_integration_mapping_schema?: BaseMappingSchema
}

export const ORDER_TYPES = ["DBS"] as const

export const CURRENCY_MAP = {
  "RUR": "RUB",
  "UAH": "UAH",
  "BYR": "BYR",
  "KZT": "KZT",
  "UZS": "UZS"
}