import { model } from "@medusajs/framework/utils"

export const ApishipSettings = model.define("apiship_setting", {
  id: model.id().primaryKey(),
  is_enabled: model.boolean(),
  email: model.text(),
  password: model.text(),
  enable_logs: model.boolean(),
})