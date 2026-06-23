import { z } from "zod"

export type AdminUpsertIntegrationType = z.infer<typeof AdminUpsertIntegration>
export const AdminUpsertIntegration = z.object({
  title: z.string().optional(),
  values: z.record(z.string(), z.unknown()),
})
