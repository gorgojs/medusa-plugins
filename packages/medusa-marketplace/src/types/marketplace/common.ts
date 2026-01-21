export type EventDirectionType = "MEDUSA_TO_MARKETPLACE" | "MARKETPLACE_TO_MEDUSA"

export type EventEntityType = "PRODUCT" | "PRODUCT_MEDIA" | "PRODUCT_PRICE" | "PRODUCT_STOCK" | "ORDER"

export type EventActionType = "CREATE" | "UPDATE" | "DELETE"

export type MarketplaceCredentialsType = Record<string, unknown>

export type MarketplaceSettingsType = Record<string, unknown>

export type MarketplaceDTO = {
  id: string
  provider_id: string
  credentials: MarketplaceCredentialsType
  settings: MarketplaceSettingsType
  is_active: boolean
}

export type MarketplaceEventDTO = {
  id: string
  marketplace: MarketplaceDTO
  correlationId?: string
  direction: EventDirectionType
  entity_type: EventEntityType
  action: EventActionType
  startedAt?: Date
  finishedAt?: Date
  requestData?: Record<string, unknown>
  responseData?: Record<string, unknown>
}
