import { SalesChannelDTO, StockLocationDTO } from "@medusajs/framework/types"

export type EventDirectionType = "MEDUSA_TO_MARKETPLACE" | "MARKETPLACE_TO_MEDUSA"

export type EventEntityType = "PRODUCT" | "PRODUCT_MEDIA" | "PRODUCT_PRICE" | "PRODUCT_STOCK" | "ORDER"

export type EventActionType = "CREATE" | "UPDATE" | "DELETE"

export type MarketplaceCredentialsType = Record<string, unknown>

export type MarketplaceSettingsType = Record<string, unknown>

export type MarketplaceWarehouseType = {
  id: string
  name: string
} & Record<string, unknown>

export type MarketplaceDTO = {
  id: string
  title: string
  provider_id: string
  credentials: MarketplaceCredentialsType
  settings: MarketplaceSettingsType
  is_enabled: boolean
  sales_channel_id?: string
  sales_channel?: SalesChannelDTO
}

export type MarketplaceEventDTO = {
  id: string
  marketplace: MarketplaceDTO
  marketplace_id: string
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

export type MarketplaceProductDTO = Record<string, unknown>

export type MarketplaceExchangeProfileDTO = {
  id: string
  marketplace_id: string
  warehouse_id: string
  order_type: string
  stock_location?: StockLocationDTO
}

export type CreateMarketplaceOrderDTO = {
  order_id: string
  marketplace_id: string
  status: string
  type: string
}
