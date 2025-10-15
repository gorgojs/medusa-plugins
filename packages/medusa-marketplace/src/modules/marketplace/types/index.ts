import { ModuleProviderExports, ModuleServiceInitializeOptions } from "@medusajs/framework/types"

export const MarketplaceProviderRegistrationKey = "marketplace_providers"

export const MarketplaceProviderRegistrationPrefix = "mp_"

export type MarketplaceModuleOptions = Partial<ModuleServiceInitializeOptions> & {
  providers?: {
    resolve: string | ModuleProviderExports
    id: string
    options?: Record<string, unknown>
  }[]
}
