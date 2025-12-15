import { ModuleProvider } from "@medusajs/framework/utils"
import { OzonMarketplaceProvider } from "./services/ozon-marketplace"

export const OzonMarketplaceProviderIdentifier = "ozon"

export default ModuleProvider(OzonMarketplaceProviderIdentifier, {
  services: [OzonMarketplaceProvider],
})
