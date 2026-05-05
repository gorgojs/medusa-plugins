import { model } from "@medusajs/framework/utils"
import IntegrationExchangeProfile from "./integration-exchange-profile"
import IntegrationEvent from "./integration-event"
import IntegrationOrder from "./integration-order"

const Integration = model.define("integration", {
  id: model.id({
    prefix: "int"
  }).primaryKey(),
  title: model.text().default("Untitled"),
  provider_id: model.text(),
  credentials: model.json().default({}),
  settings: model.json().default({}),
  is_enabled: model.boolean().default(true),
  events: model.hasMany(() => IntegrationEvent, {
    mappedBy: "integration",
  }),
  exchange_profiles: model.hasMany(() => IntegrationExchangeProfile, {
    mappedBy: "integration",
  }),
  orders: model.hasMany(() => IntegrationOrder, {
    mappedBy: "integration",
  })
}).cascades({
  delete: ["exchange_profiles", "events", "orders"]
})

export default Integration
