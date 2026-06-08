import { model } from "@medusajs/framework/utils"
import Integration from "./integration"

const IntegrationExchangeProfile = model.define("integration_exchange_profile", {
  id: model.id({
    prefix: "intep"
  }).primaryKey(),
  integration: model.belongsTo(() => Integration, {
    mappedBy: "exchange_profiles",
  }),
  warehouse_id: model.text().default(""),
  order_type: model.text().default(""),
})

export default IntegrationExchangeProfile
