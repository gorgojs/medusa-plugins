import { DeleteResponse, PaginatedResponse } from "@medusajs/framework/types"
import { AdminMarketplace, AdminMarketplaceEvent, AdminMarketplaceExchangeProfile } from "./entities"
import { GetMarketplaceWarehousesOutput } from "../../../marketplace"

export interface AdminMarketplaceListResponse
  extends PaginatedResponse<{
    marketplaces: AdminMarketplace[]
  }> {}

export interface AdminMarketplaceResponse {
  marketplace: AdminMarketplace
}

export interface AdminMarketplaceDeleteResponse extends DeleteResponse<"marketplace"> {}

export interface AdminMarketplaceProductSyncResponse {
  result: Record<string, unknown>
}

export interface AdminMarketplaceEventListResponse
  extends PaginatedResponse<{
    marketplace_events: AdminMarketplaceEvent[]
  }> {}

export interface AdminMarketplaceEventResponse {
  marketplace_event: AdminMarketplaceEvent
}

export interface AdminMarketplaceProviderList {
  providers: string[]
}

export interface AdminMarketplaceExchangeProfileListResponse
  extends PaginatedResponse<{
    exchange_profiles: AdminMarketplaceExchangeProfile[]
  }> {}

export interface AdminMarketplaceExchangeProfileResponse {
  exchange_profile: AdminMarketplaceExchangeProfile
}

export interface AdminMarketplaceOrderTypeListResponse {
  orderTypes: string[]
}

export interface AdminMarketplaceWarehouseListResponse {
  warehouses: GetMarketplaceWarehousesOutput
}
