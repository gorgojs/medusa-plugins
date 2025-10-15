import { model } from "@medusajs/framework/utils"
import MarketplaceExchangeProfile from "./marketplace-exchange-profile"
import MarketplaceEvent from "./marketplace-event"
import MarketplaceOrder from "./marketplace-order"

const Marketplace = model.define("marketplace", {
  id: model.id({
    prefix: "mp"
  }).primaryKey(),
  title: model.text().default("Untitled"),
  provider_id: model.text(),
  credentials: model.json().default({}),
  settings: model.json().default({}),
  is_enabled: model.boolean().default(true),
  events: model.hasMany(() => MarketplaceEvent, {
    mappedBy: "marketplace",
  }),
  exchange_profiles: model.hasMany(() => MarketplaceExchangeProfile, {
    mappedBy: "marketplace",
  }),
  orders: model.hasMany(() => MarketplaceOrder, {
    mappedBy: "marketplace",
  })
}).cascades({
  delete: ["exchange_profiles", "events", "orders"]
})

export default Marketplace
