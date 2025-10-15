import { ModuleProvider } from "@medusajs/framework/utils"
import { OzonMarketplaceProvider } from "./services/ozon-marketplace"
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/modules/marketplace"

export default ModuleProvider(MARKETPLACE_MODULE, {
  services: [OzonMarketplaceProvider],
})
