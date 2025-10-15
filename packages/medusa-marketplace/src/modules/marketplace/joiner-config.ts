import { defineJoinerConfig } from "@medusajs/framework/utils"
import Marketplace from "./models/marketplace"
import MarketplaceEvent from "./models/marketplace-event"
import MarketplaceExchangeProfile from "./models/marketplace-exchange-profile"
import MarketplaceOrder from "./models/marketplace-order"

export const joinerConfig = defineJoinerConfig("marketplace", {
  models: [Marketplace, MarketplaceEvent, MarketplaceExchangeProfile, MarketplaceOrder],
  // alias: [
  //   {
  //     name: ["marketplace", "marketplaces"],
  //     args: { entity: "Marketplace" },
  //   },
  //   {
  //     name: ["marketplace_event", "marketplace_events"],
  //     args: { entity: "MarketplaceEvent" },
  //   },
  //   {
  //     name: ["marketplace_exchange_profile", "marketplace_exchange_profiles"],
  //     args: { entity: "MarketplaceExchangeProfile" },
  //   },
  // ],
})
