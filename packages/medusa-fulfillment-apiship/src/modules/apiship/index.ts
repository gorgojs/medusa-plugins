import { Module } from "@medusajs/framework/utils"
import ApishipSettingsService from "./services/apiship-settings-service"

export const APISHIP_MODULE = "apiship"

export default Module(APISHIP_MODULE, {
  service: ApishipSettingsService,
})