import { Module } from "@medusajs/framework/utils"
import OzonExportModuleService from "./service"

export const OZON_EXPORT_MODULE = "ozon_export"

export default Module(OZON_EXPORT_MODULE, {
  service: OzonExportModuleService,
})
