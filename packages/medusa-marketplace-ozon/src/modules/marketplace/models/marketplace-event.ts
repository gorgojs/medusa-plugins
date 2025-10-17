import { model } from "@medusajs/framework/utils";
import Marketplace from "./marketplace";

const MarketplaceEvent = model.define("marketplace_event", {
  id: model.id().primaryKey(),
  marketplace: model.belongsTo(() => Marketplace, {
    mappedBy: undefined,
  }),
  correlation_id: model.text().nullable(),
  direction: model.enum([
    "MEDUSA_TO_MARKETPLACE", "MARKETPLACE_TO_MEDUSA",
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

export default MarketplaceEvent