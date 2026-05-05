import { Module } from "@medusajs/framework/utils"
import { IntegrationModuleService } from "./services"
import { loadProviders } from "./loaders"

export const INTEGRATION_MODULE = "integration"

export default Module(INTEGRATION_MODULE, {
  service: IntegrationModuleService,
  loaders: [loadProviders]
})

export { IntegrationModuleOptions } from "./types"
