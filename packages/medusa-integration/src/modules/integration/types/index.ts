import { ModuleProviderExports, ModuleServiceInitializeOptions } from "@medusajs/framework/types"

export const IntegrationProviderRegistrationKey = "integration_providers"

export const IntegrationProviderRegistrationPrefix = "int_"

export type IntegrationModuleOptions = Partial<ModuleServiceInitializeOptions> & {
  providers?: {
    resolve: string | ModuleProviderExports
    id: string
    options?: Record<string, unknown>
  }[]
}
