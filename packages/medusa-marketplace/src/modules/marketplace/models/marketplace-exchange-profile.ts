import { model } from "@medusajs/framework/utils"
import Marketplace from "./marketplace"

const ORDER_TYPES = ["FBS", "FBO", "DBS"] as const

export type OrderType = (typeof ORDER_TYPES)[number]

export function isValidOrderType(type: any): type is OrderType {
  return ORDER_TYPES.includes(type)
}

const MarketplaceExchangeProfile = model.define("marketplace_exchange_profile", {
  id: model.id({
    prefix: "mpep"
  }).primaryKey(),
  marketplace: model.belongsTo(() => Marketplace, {
    mappedBy: "exchange_profiles",
  }),
  warehouse_id: model.text(),
  order_type: model.enum(["FBS", "FBO", "DBS"]).default("FBS"),
})

export default MarketplaceExchangeProfile
