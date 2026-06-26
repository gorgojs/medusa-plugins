import { z } from "zod"

export type AdminUpsertIntegrationType = z.infer<typeof AdminUpsertIntegration>
export const AdminUpsertIntegration = z.object({
  title: z.string().optional(),
  // Which descriptor section these values belong to — only that section is validated.
  section_id: z.string(),
  values: z.record(z.string(), z.unknown()),
})

export type AdminSetIntegrationEnabledType = z.infer<typeof AdminSetIntegrationEnabled>
export const AdminSetIntegrationEnabled = z.object({
  is_enabled: z.boolean(),
})
