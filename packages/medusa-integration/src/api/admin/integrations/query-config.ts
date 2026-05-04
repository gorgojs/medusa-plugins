export const defaultAdminIntegrationFields = [
  "id",
  "title",
  "provider_id",
  "credentials",
  "settings",
  "is_enabled",
  "sales_channel.*"
]

export const retrieveIntegrationQueryConfig = {
  defaults: defaultAdminIntegrationFields,
  isList: false
}

export const listIntegrationQueryConfig = {
  ...retrieveIntegrationQueryConfig,
  defaultLimit: 20,
  isList: true,
}

export const defaultAdminIntegrationEventFields = [
  "id",
  "integration.*",
  "integration_id",
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
  defaults: defaultAdminIntegrationEventFields,
  isList: false
}

export const listEventQueryConfig = {
  ...retrieveEventQueryConfig,
  defaultLimit: 20,
  isList: true,
}

export const defaultAdminIntegrationExchangeProfileFields = [
  "id",
  "integration_id",
  "warehouse_id",
  "order_type",
  "stock_location.*"
]

export const retrieveExchangeProfileQueryConfig = {
  defaults: defaultAdminIntegrationExchangeProfileFields,
  isList: false
}

export const listExchangeProfileQueryConfig = {
  ...retrieveExchangeProfileQueryConfig,
  defaultLimit: 20,
  isList: true,
}
