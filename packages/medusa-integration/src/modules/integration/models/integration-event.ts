import { model } from "@medusajs/framework/utils"
import Integration from "./integration"

const IntegrationEvent = model.define("integration_event", {
  id: model.id({
    prefix: "intevent"
  }).primaryKey(),
  integration: model.belongsTo(() => Integration, {
    mappedBy: "events",
  }),
  correlation_id: model.text().nullable(),
  direction: model.enum([
    "MEDUSA_TO_INTEGRATION", "INTEGRATION_TO_MEDUSA",
  ]),
  entity_type: model.enum([
    "PRODUCT", "PRODUCT_MEDIA", "PRODUCT_PRICE", "PRODUCT_STOCK", "ORDER",
  ]),
  action: model.enum([
    "CREATE", "UPDATE", "DELETE",
  ]),
  started_at: model.dateTime().nullable(),
  finished_at: model.dateTime().nullable(),
  request_data: model.json().default({}),
  response_data: model.json().default({})
})

export default IntegrationEvent
