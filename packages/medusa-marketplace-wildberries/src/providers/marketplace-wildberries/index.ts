import { ModuleProvider } from "@medusajs/framework/utils"
import { WildberriesMarketplaceProvider } from "./services/wb-marketplace"
import { WildberriesMarketplaceProviderIdentifier } from "./types"

export default ModuleProvider(WildberriesMarketplaceProviderIdentifier, {
  services: [WildberriesMarketplaceProvider],
})
