export const defaultAdminMarketplaceFields = [
  "id",
  "provider_id",
  "credentials",
  "settings",
  "is_active"
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
