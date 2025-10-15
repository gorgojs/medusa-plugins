import { ModuleProvider } from "@medusajs/framework/utils"
import { WildberriesMarketplaceProvider } from "./services/wb-marketplace"
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/modules/marketplace"

export default ModuleProvider(MARKETPLACE_MODULE, {
  services: [WildberriesMarketplaceProvider],
})
