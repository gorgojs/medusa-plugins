import { Module } from "@medusajs/framework/utils"
import YandexMarketExportService from "./service"

export const YANDEX_MARKET_EXPORT = "yandex_market_export"

export default Module(YANDEX_MARKET_EXPORT, {
  service: YandexMarketExportService,
})
