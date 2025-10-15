import { model } from "@medusajs/framework/utils"

export const ApishipSettings = model.define("apiship_setting", {
  id: model.id().primaryKey(),
  is_test: model.boolean(),
  is_enabled: model.boolean(),
  token: model.text(),
  enable_logs: model.boolean(),
})