import { Module } from "@medusajs/framework/utils"
import IntegrationModuleService from "./services/integration-module"
import { loadDescriptors } from "./loaders"

export const INTEGRATION_MODULE = "integration"

export default Module(INTEGRATION_MODULE, {
  service: IntegrationModuleService,
  loaders: [loadDescriptors],
})

export type { IntegrationModuleOptions } from "./loaders"
