import { MedusaService } from "@medusajs/framework/utils"
import Marketplace from "./models/marketplace"
import MarketplaceEvent from "./models/marketplace-event"

class MarketplaceModuleService extends MedusaService({
  Marketplace, MarketplaceEvent
}) {

}

export default MarketplaceModuleService