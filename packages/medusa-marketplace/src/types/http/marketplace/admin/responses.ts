import { DeleteResponse, PaginatedResponse } from "@medusajs/framework/types";
import { AdminMarketplace, AdminMarketplaceEvent } from "./entities";

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
