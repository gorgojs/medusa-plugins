import { ModuleProvider } from "@medusajs/framework/utils"
import { YandexMarketMarketplaceProvider } from "./services/ym-marketplace"
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/types"

export default ModuleProvider(MARKETPLACE_MODULE, {
  services: [YandexMarketMarketplaceProvider],
})
