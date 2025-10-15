import { Module } from "@medusajs/framework/utils"
import WildberriesModuleService from "./service"

export const WB_MODULE = "wildberries"

export default Module(WB_MODULE, {
  service: WildberriesModuleService,
})
