import { model } from "@medusajs/framework/utils"
import { IntegrationModule, IntegrationTestStatus } from "../utils/integration"

const Integration = model.define("integration", {
  id: model.id({ prefix: "int" }).primaryKey(),

  // Plugin identity
  module: model.enum(IntegrationModule),
  provider_id: model.text(),
  title: model.text().nullable(),

  // Integration options (non-secret settings)
  options: model.json().default({}),

  // Metadata
  is_enabled: model.boolean().default(true),
  last_test_status: model.enum(IntegrationTestStatus).nullable(),
})
.indexes([
  { on: ["provider_id"], unique: true },
  { on: ["module"] },
])

export default Integration
