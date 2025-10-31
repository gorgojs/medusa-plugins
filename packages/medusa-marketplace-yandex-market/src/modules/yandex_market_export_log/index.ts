import { Module } from "@medusajs/framework/utils"
import YandexMarketExportLogService from "./service"

export const YANDEX_MARKET_EXPORT_LOG = "yandex_market_export_log"

export default Module(YANDEX_MARKET_EXPORT_LOG, {
  service: YandexMarketExportLogService,
})
