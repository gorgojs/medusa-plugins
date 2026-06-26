import type { DeleteResponse } from "@medusajs/framework/types"
import type { IntegrationOverviewItem, MaskedIntegration } from "./entities"
import type { TestConnectionResult, UiDescriptor } from "../../../integration"

export interface AdminIntegrationListResponse {
  integrations: IntegrationOverviewItem[]
}

export interface AdminIntegrationResponse {
  descriptor?: UiDescriptor
  integration: MaskedIntegration | null
  /** Whether the stored config passes full validation (all required + cross-section rules). */
  is_complete: boolean
}

export interface AdminIntegrationUpsertResponse {
  integration: MaskedIntegration
}

export interface AdminIntegrationDeleteResponse extends DeleteResponse<"integration"> {}

export interface AdminIntegrationTestResponse extends TestConnectionResult {}
