import { model } from "@medusajs/framework/utils"
import Marketplace from "./marketplace"

const MarketplaceOrder = model.define("marketplace_order", {
  id: model.id({
    prefix: "mporder"
  }).primaryKey(),
  order_id: model.text(),
  marketplace: model.belongsTo(() => Marketplace, {
    mappedBy: "orders",
  }),
  status: model.text(),
  type: model.text(),
  data: model.json().default({})
})

export default MarketplaceOrder
