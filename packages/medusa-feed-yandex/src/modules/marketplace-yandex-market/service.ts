import { MedusaService } from "@medusajs/framework/utils"
import YandexMarketCatalogExport from "./models/yandex_market_catalog_export"

class MarketplaceYandexMarketModuleService extends MedusaService({
  YandexMarketCatalogExport
}){
}

export default MarketplaceYandexMarketModuleService