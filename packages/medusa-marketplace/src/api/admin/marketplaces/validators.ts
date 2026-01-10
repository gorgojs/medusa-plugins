import { z } from "zod"

export const AdminCreateMarketplace = z.object({
  provider_id: z.string(),
  credentials: z.record(z.unknown()).optional(),
  settings: z.record(z.unknown()).optional(),
  is_active: z.boolean().optional()
})

export type AdminCreateMarketplaceType = z.infer<typeof AdminCreateMarketplace>

export const AdminUpdateMarketplace = z.object({
  provider_id: z.string().optional(),
  credentials: z.record(z.unknown()).optional(),
  settings: z.record(z.unknown()).optional(),
  is_active: z.boolean().optional()
})

export type AdminUpdateMarketplaceType = z.infer<typeof AdminUpdateMarketplace>
