import { ModuleProvider } from "@medusajs/framework/utils"
import { OneCMarketplaceProvider } from "./services/onec-marketplace"
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/modules/marketplace"

export default ModuleProvider(MARKETPLACE_MODULE, {
  services: [OneCMarketplaceProvider],
})
