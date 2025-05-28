import MarketplaceYandexMarketModuleService from "./service"
import { Module } from "@medusajs/framework/utils"

export const MARKETPLACE_YANDEX_MARKET_MODULE = "marketplace_yandex_market"

export default Module(MARKETPLACE_YANDEX_MARKET_MODULE, {
  service: MarketplaceYandexMarketModuleService,
})