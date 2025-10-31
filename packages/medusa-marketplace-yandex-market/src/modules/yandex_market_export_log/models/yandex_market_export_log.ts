import { model } from "@medusajs/framework/utils"

export const YMExportLog = model.define("yandex_market_export_log", {
  id: model.id().primaryKey(),

  import_id: model.text().nullable(),
  status: model.text().index(),
  sent_count: model.number().default(0),

  offer_ids: model.json().nullable(),
  batch_statuses: model.json().nullable(),
  results: model.json().nullable(),
  raw_request: model.json().nullable(),
  raw_response: model.json().nullable(),
  meta: model.json().nullable(),
})
