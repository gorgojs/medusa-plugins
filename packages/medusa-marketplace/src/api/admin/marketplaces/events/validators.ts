import { createFindParams } from "@medusajs/medusa/api/utils/validators"
import { z } from "zod"

export const AdminMarketplaceGetEventsParams = createFindParams({ limit: 20, offset: 0 })

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

export type AdminMarketplaceCreateEventsType = z.infer<typeof AdminMarketplaceCreateEvents>
