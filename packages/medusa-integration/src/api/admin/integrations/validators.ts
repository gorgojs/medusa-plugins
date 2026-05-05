import { z } from "zod"
import { createFindParams } from "@medusajs/medusa/api/utils/validators"

export const AdminIntegrationDefaultFindParams = { limit: 20, offset: 0 }

export const AdminGetIntegrationParams = createFindParams(AdminIntegrationDefaultFindParams)

export const AdminIntegrationGetEventsParams =
  createFindParams(AdminIntegrationDefaultFindParams).extend({
    integration_id: z.string().optional()
  })

export const AdminIntegrationListExchangeProfileParams = createFindParams(AdminIntegrationDefaultFindParams)

export type AdminCreateIntegrationType = z.infer<typeof AdminCreateIntegration>
export const AdminCreateIntegration = z.object({
  title: z.string().optional(),
  provider_id: z.string(),
  credentials: z.record(z.string(), z.unknown()).optional(),
  settings: z.record(z.string(), z.unknown()).optional(),
  is_enabled: z.boolean().optional(),
  sales_channel_id: z.string()
})

export type AdminUpdateIntegrationType = z.infer<typeof AdminUpdateIntegration>
export const AdminUpdateIntegration = z.object({
  title: z.string().optional(),
  provider_id: z.string().optional(),
  credentials: z.record(z.string(),z.unknown()).optional(),
  settings: z.record(z.string(), z.unknown()).optional(),
  is_enabled: z.boolean().optional(),
  sales_channel_id: z.string().optional()
})

export type AdminIntegrationSyncProductsType = z.infer<typeof AdminIntegrationSyncProducts>
export const AdminIntegrationSyncProducts = z.object({
  ids: z.array(z.string()).optional()
})

export type AdminIntegrationCreateEventsType = z.infer<typeof AdminIntegrationCreateEvents>
export const AdminIntegrationCreateEvents = z.object({
  correlation_id: z.string().optional(),
  direction: z.enum(["MEDUSA_TO_INTEGRATION", "INTEGRATION_TO_MEDUSA"]),
  entity_type: z.enum(["PRODUCT", "PRODUCT_MEDIA", "PRODUCT_PRICE", "PRODUCT_STOCK", "ORDER"]),
  action: z.enum(["CREATE", "UPDATE", "DELETE"]),
  started_at: z.date().optional(),
  finished_at: z.date().optional(),
  request_data: z.record(z.string(), z.unknown()).optional(),
  response_data: z.record(z.string(), z.unknown()).optional(),
  integration_id: z.string().optional(),
})

export type AdminIntegrationCreateExchangeProfileType = z.infer<typeof AdminIntegrationCreateExchangeProfile>
export const AdminIntegrationCreateExchangeProfile = z.object({
  stock_location_id: z.string(),
  warehouse_id: z.string(),
  order_type: z.string()
})

export type AdminIntegrationUpdateExchangeProfileType = z.infer<typeof AdminIntegrationUpdateExchangeProfile>
export const AdminIntegrationUpdateExchangeProfile = z.object({
  stock_location_id: z.string().optional(),
  warehouse_id: z.string().optional(),
  order_type: z.string().optional()
})
