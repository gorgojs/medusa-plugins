import { z } from "zod"
import { createFindParams } from "@medusajs/medusa/api/utils/validators"

export const AdminGetExportsParams = createFindParams({ limit: 20, offset: 0 })

export const AdminCreateExport = z.object({
  exports: z.array(
    z.object({
      title: z.string(),
      file_name: z.string(),
      is_active: z.boolean(),
      schedule: z.number().optional(),
    })
  ),
})

export type AdminCreateExportType = z.infer<typeof AdminCreateExport>