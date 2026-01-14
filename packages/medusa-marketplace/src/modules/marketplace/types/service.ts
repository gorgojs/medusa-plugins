export type LogEventInput = {
  correlationId?: string,
  direction: "MEDUSA_TO_MARKETPLACE" | "MARKETPLACE_TO_MEDUSA",
  entityType: "PRODUCT" | "PRODUCT_MEDIA" | "PRODUCT_PRICE" | "PRODUCT_STOCK" | "ORDER",
  action: "CREATE" | "UPDATE" | "DELETE",
  startedAt?: Date,
  finishedAt?: Date,
  requestData?: Record<string, unknown>,
  responseData?: Record<string, unknown>
}

export type MarketplaceCredentialsType = Record<string, unknown>

export type MarketplaceSettingsType = Record<string, unknown>

export type MarketplaceDTO = {
  id: string,
  provider_id: string,
  credentials: MarketplaceCredentialsType
  settings: MarketplaceSettingsType,
  is_active: boolean
}
