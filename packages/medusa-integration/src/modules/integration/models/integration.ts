import { model } from "@medusajs/framework/utils"

const Integration = model.define("integration", {
  id: model.id({ prefix: "int" }).primaryKey(),

  // Plugin identity
  plugin_kind: model.enum([
    "payment", "fulfillment", "marketplace", "crm", "erp", "pim",
    "notification", "feed", "tax", "other",
  ]),
  plugin_id: model.text(),
  instance_id: model.text().nullable(),
  title: model.text().nullable(),

  // Integration settings
  credentials_ciphertext: model.text().nullable(),
  credentials_iv: model.text().nullable(),
  settings: model.json().default({}),

  // Metadata
  schema_version: model.number().default(1),
  is_enabled: model.boolean().default(true),
  last_test_at: model.dateTime().nullable(),
  last_test_status: model.enum(["ok", "fail", "skipped"]).nullable(),
  last_test_message: model.text().nullable(),
})
.indexes([
  { on: ["plugin_id", "instance_id"], unique: true },
  { on: ["plugin_kind"] },
])

export default Integration
