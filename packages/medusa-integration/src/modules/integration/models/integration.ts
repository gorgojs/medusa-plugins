import { model } from "@medusajs/framework/utils"

const Integration = model.define("integration", {
  id: model.id({ prefix: "int" }).primaryKey(),

  // Plugin identity
  module: model.enum([
    "payment", "fulfillment", "marketplace", "crm", "erp", "pim",
    "notification", "feed", "tax", "other",
  ]),
  provider_id: model.text(),
  title: model.text().nullable(),

  // Integration options (non-secret settings)
  credentials_ciphertext: model.text().nullable(),
  credentials_iv: model.text().nullable(),
  options: model.json().default({}),

  // Metadata
  schema_version: model.number().default(1),
  is_enabled: model.boolean().default(true),
  last_test_at: model.dateTime().nullable(),
  last_test_status: model.enum(["ok", "fail", "skipped"]).nullable(),
  last_test_message: model.text().nullable(),
})
.indexes([
  { on: ["provider_id"], unique: true },
  { on: ["module"] },
])

export default Integration
