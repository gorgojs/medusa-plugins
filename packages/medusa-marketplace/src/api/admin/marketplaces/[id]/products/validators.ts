import { z } from "zod"

export const AdminMarketplaceSyncProducts = z.object({
  ids: z.array(z.string()).optional()
})

export type AdminMarketplaceSyncProductsType = z.infer<typeof AdminMarketplaceSyncProducts>
