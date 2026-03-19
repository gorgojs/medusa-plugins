import { model } from "@medusajs/framework/utils"
import Marketplace from "./marketplace"
import { ORDER_TYPES } from "../../../types"

const MarketplaceExchangeProfile = model.define("marketplace_exchange_profile", {
  id: model.id({
    prefix: "mpep"
  }).primaryKey(),
  marketplace: model.belongsTo(() => Marketplace, {
    mappedBy: "exchange_profiles",
  }),
  warehouse_id: model.text().default(""),
  order_type: model.enum([...ORDER_TYPES]).default("FBS"),
})

export default MarketplaceExchangeProfile
