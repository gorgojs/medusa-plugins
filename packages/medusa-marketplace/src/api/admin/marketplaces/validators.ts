import { z } from "zod"
import { createFindParams } from "@medusajs/medusa/api/utils/validators"

export const AdminMarketplaceDefaultFindParams = { limit: 20, offset: 0 }

export const AdminGetMarketplaceParams = createFindParams(AdminMarketplaceDefaultFindParams)

export const AdminMarketplaceGetEventsParams = createFindParams(AdminMarketplaceDefaultFindParams)

export type AdminCreateMarketplaceType = z.infer<typeof AdminCreateMarketplace>
export const AdminCreateMarketplace = z.object({
  title: z.string().optional(),
  provider_id: z.string(),
  credentials: z.record(z.unknown()).optional(),
  settings: z.record(z.unknown()).optional(),
  is_active: z.boolean().optional()
})

export type AdminUpdateMarketplaceType = z.infer<typeof AdminUpdateMarketplace>
export const AdminUpdateMarketplace = z.object({
  title: z.string().optional(),
  provider_id: z.string().optional(),
  credentials: z.record(z.unknown()).optional(),
  settings: z.record(z.unknown()).optional(),
  is_active: z.boolean().optional()
})

export type AdminMarketplaceSyncProductsType = z.infer<typeof AdminMarketplaceSyncProducts>
export const AdminMarketplaceSyncProducts = z.object({
  ids: z.array(z.string()).optional()
})

export type AdminMarketplaceCreateEventsType = z.infer<typeof AdminMarketplaceCreateEvents>
export const AdminMarketplaceCreateEvents = z.object({
  correlation_id: z.string().optional(),
  direction: z.enum(["MEDUSA_TO_MARKETPLACE", "MARKETPLACE_TO_MEDUSA"]),
  entity_type: z.enum(["PRODUCT", "PRODUCT_MEDIA", "PRODUCT_PRICE", "PRODUCT_STOCK", "ORDER"]),
  action: z.enum(["CREATE", "UPDATE", "DELETE"]),
  started_at: z.date().optional(),
  finished_at: z.date().optional(),
  request_data: z.record(z.unknown()).optional(),
  response_data: z.record(z.unknown()).optional(),
  marketplace_id: z.string().optional(),
})

