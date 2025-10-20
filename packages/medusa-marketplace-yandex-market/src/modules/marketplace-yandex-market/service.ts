import { MedusaService } from "@medusajs/framework/utils"
import YandexMarketCampaign from "./models/yandex-market-campaign"


class MarketplaceYandexMarketModuleService extends MedusaService({
  YandexMarketCampaign,
}){
}

export default MarketplaceYandexMarketModuleService
