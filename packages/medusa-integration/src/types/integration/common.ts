import { SalesChannelDTO, StockLocationDTO } from "@medusajs/framework/types"

export type EventDirectionType = "MEDUSA_TO_INTEGRATION" | "INTEGRATION_TO_MEDUSA"

export type EventEntityType = "PRODUCT" | "PRODUCT_MEDIA" | "PRODUCT_PRICE" | "PRODUCT_STOCK" | "ORDER"

export type EventActionType = "CREATE" | "UPDATE" | "DELETE"

export type IntegrationCredentialsType = Record<string, unknown>

export type IntegrationSettingsType = Record<string, unknown>

export type IntegrationWarehouseType = {
  id: string
  name: string
} & Record<string, unknown>

export type IntegrationDTO = {
  id: string
  title: string
  provider_id: string
  credentials: IntegrationCredentialsType
  settings: IntegrationSettingsType
  is_enabled: boolean
  sales_channel_id?: string
  sales_channel?: SalesChannelDTO
}

export type IntegrationEventDTO = {
  id: string
  integration: IntegrationDTO
  integration_id: string
  correlation_id?: string | null
  direction: EventDirectionType
  entity_type: EventEntityType
  action: EventActionType
  created_at: Date | string
  updated_at: Date | string
  deleted_at: Date | null
  started_at?: Date | null
  finished_at?: Date | null
  request_data?: Record<string, unknown> | null
  response_data?: Record<string, unknown> | null
}

export type IntegrationProductDTO = Record<string, unknown>

export type IntegrationExchangeProfileDTO = {
  id: string
  integration_id: string
  warehouse_id: string
  order_type: string
  stock_location?: StockLocationDTO
}

export type CreateIntegrationOrderDTO = {
  order_id: string
  integration_id: string
  status: string
  type: string
  data?: Record<string, unknown>
}
