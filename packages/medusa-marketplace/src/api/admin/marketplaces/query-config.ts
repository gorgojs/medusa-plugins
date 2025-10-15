export const defaultAdminMarketplaceFields = [
  "id",
  "title",
  "provider_id",
  "credentials",
  "settings",
  "is_enabled",
  "sales_channel.*"
]

export const retrieveMarketplaceQueryConfig = {
  defaults: defaultAdminMarketplaceFields,
  isList: false
}

export const listMarketplaceQueryConfig = {
  ...retrieveMarketplaceQueryConfig,
  defaultLimit: 20,
  isList: true,
}

export const defaultAdminMarketplaceEventFields = [
  "id",
  "marketplace.*",
  "marketplace_id",
  "correlation_id",
  "direction",
  "entity_type",
  "action",
  "started_at",
  "finished_at",
  "request_data",
  "response_data"
]

export const retrieveEventQueryConfig = {
  defaults: defaultAdminMarketplaceEventFields,
  isList: false
}

export const listEventQueryConfig = {
  ...retrieveEventQueryConfig,
  defaultLimit: 20,
  isList: true,
}

export const defaultAdminMarketplaceExchangeProfileFields = [
  "id",
  "marketplace_id",
  "warehouse_id",
  "order_type",
  "stock_location.*"
]

export const retrieveExchangeProfileQueryConfig = {
  defaults: defaultAdminMarketplaceExchangeProfileFields,
  isList: false
}

export const listExchangeProfileQueryConfig = {
  ...retrieveExchangeProfileQueryConfig,
  defaultLimit: 20,
  isList: true,
}
