import { model } from "@medusajs/framework/utils"
import Integration from "./integration"

const IntegrationOrder = model.define("integration_order", {
  id: model.id({
    prefix: "intorder"
  }).primaryKey(),
  order_id: model.text(),
  integration: model.belongsTo(() => Integration, {
    mappedBy: "orders",
  }),
  status: model.text(),
  type: model.text(),
  data: model.json().default({})
})

export default IntegrationOrder
