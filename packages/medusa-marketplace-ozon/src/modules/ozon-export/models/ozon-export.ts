import { model } from "@medusajs/framework/utils"

export const OzonExport = model.define("ozon_export", {
  id: model.id().primaryKey(),
  task_id: model.text().unique().index(),
  ozon_task_status: model.text().nullable(),
  total: model.number().nullable(),
  items: model.json().nullable(),
  error_message: model.text().nullable(),
  raw_result: model.json().nullable(),
  last_checked_at: model.dateTime().nullable(),
})
