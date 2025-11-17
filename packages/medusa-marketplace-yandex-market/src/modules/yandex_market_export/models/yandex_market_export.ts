import { model } from "@medusajs/framework/utils"

export const YandexMarketExport = model.define("yandex_market_export", {
  id: model.id().primaryKey(),
  status: model.text().index(),
  items: model.json().nullable(),
  raw_request: model.json().nullable(),
  raw_response: model.json().nullable(),
})
