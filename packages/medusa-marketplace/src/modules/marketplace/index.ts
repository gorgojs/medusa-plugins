import { Module } from "@medusajs/framework/utils"
import { MarketplaceModuleService } from "./services"
import { loadProviders } from "./loaders"

export const MARKETPLACE_MODULE = "marketplace"

export default Module(MARKETPLACE_MODULE, {
  service: MarketplaceModuleService,
  loaders: [loadProviders]
})
