import { DeleteResponse, PaginatedResponse } from "@medusajs/framework/types"
import { AdminIntegration, AdminIntegrationEvent, AdminIntegrationExchangeProfile } from "./entities"
import { GetIntegrationWarehousesOutput } from "../../../integration"

export interface AdminIntegrationListResponse
  extends PaginatedResponse<{
    integrations: AdminIntegration[]
  }> {}

export interface AdminIntegrationResponse {
  integration: AdminIntegration
}

export interface AdminIntegrationDeleteResponse extends DeleteResponse<"integration"> {}

export interface AdminIntegrationProductSyncResponse {
  result: Record<string, unknown>
}

export interface AdminIntegrationEventListResponse
  extends PaginatedResponse<{
    integration_events: AdminIntegrationEvent[]
  }> {}

export interface AdminIntegrationEventResponse {
  integration_event: AdminIntegrationEvent
}

export interface AdminIntegrationProviderList {
  providers: string[]
}

export interface AdminIntegrationExchangeProfileListResponse
  extends PaginatedResponse<{
    exchange_profiles: AdminIntegrationExchangeProfile[]
  }> {}

export interface AdminIntegrationExchangeProfileResponse {
  exchange_profile: AdminIntegrationExchangeProfile
}

export interface AdminIntegrationOrderTypeListResponse {
  orderTypes: string[]
}

export interface AdminIntegrationWarehouseListResponse {
  warehouses: GetIntegrationWarehousesOutput
}
