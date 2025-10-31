import { model } from "@medusajs/framework/utils";

const Marketplace = model.define("marketplace", {
  id: model.id().primaryKey(),
  provider_id: model.text(),
  credentials: model.json().default({}),
  settings: model.json().default({}),
  is_active: model.boolean().default(true)
})

export default Marketplace
