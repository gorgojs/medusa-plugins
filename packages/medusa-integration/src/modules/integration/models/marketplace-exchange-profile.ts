import { model } from "@medusajs/framework/utils"
import Marketplace from "./marketplace"

const MarketplaceExchangeProfile = model.define("marketplace_exchange_profile", {
  id: model.id({
    prefix: "mpep"
  }).primaryKey(),
  marketplace: model.belongsTo(() => Marketplace, {
    mappedBy: "exchange_profiles",
  }),
  warehouse_id: model.text().default(""),
  order_type: model.text().default(""),
})

export default MarketplaceExchangeProfile
