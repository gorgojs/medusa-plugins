import { z } from "zod"

export const AdminGetExportParams = z.object({
  fields: z.string().optional(),
})

const CategorySchema = z.object({
  id: z.string(),
  parentId: z.string().optional(),
  value: z.string(),
})

const SettingsSchema = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  url: z.string().optional(),
  platform: z.string().optional(),
  categories: z.array(CategorySchema).optional(),
})

export const AdminUpdateExport = z.object({
  id: z.string(),
  title: z.string().optional(),
  file_name: z.string().optional(),
  file_path: z.string().optional(),
  last_export_at: z.coerce.date().optional(),
  schedule: z.number().optional(),
  is_active: z.boolean().optional(),
  settings: SettingsSchema.optional(),
})

export type AdminGetExportParamsType = z.infer<typeof AdminGetExportParams>
export type AdminUpdateExportType = z.infer<typeof AdminUpdateExport>