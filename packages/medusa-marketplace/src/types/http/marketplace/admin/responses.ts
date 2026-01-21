import { DeleteResponse, PaginatedResponse } from "@medusajs/framework/types";
import { MarketplaceDTO, MarketplaceEventDTO } from "../../../../types";

export interface AdminMarketplaceListResponse
  extends PaginatedResponse<{
    marketplaces: MarketplaceDTO[]
  }> {}

export interface AdminMarketplaceResponse {
  marketplace: MarketplaceDTO
}

export interface AdminMarketplaceDeleteResponse extends DeleteResponse<"marketplace"> {}

export interface AdminMarketplaceProductSyncResponse {
  result: Record<string, unknown>
}

export interface AdminMarketplaceEventListResponse
  extends PaginatedResponse<{
    events: MarketplaceEventDTO[]
  }> {}

export interface AdminMarketplaceEventResponse {
  event: MarketplaceEventDTO
}

export interface AdminMarketplaceProviderList {
  providers: string[]
}
