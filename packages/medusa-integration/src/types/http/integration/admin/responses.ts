import type { DeleteResponse } from "@medusajs/framework/types"
import type { IntegrationOverviewItem, MaskedIntegration } from "./entities"
import type { TestConnectionResult, UiDescriptor } from "../../../integration"

export interface AdminIntegrationListResponse {
  integrations: IntegrationOverviewItem[]
}

export interface AdminIntegrationResponse {
  descriptor?: UiDescriptor
  integration: MaskedIntegration | null
}

export interface AdminIntegrationUpsertResponse {
  integration: MaskedIntegration
}

export interface AdminIntegrationDeleteResponse extends DeleteResponse<"integration"> {}

export interface AdminIntegrationTestResponse extends TestConnectionResult {}
