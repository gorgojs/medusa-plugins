import type { ModuleProvider } from "@medusajs/framework/types"

/** Awilix list-key under which every registered integration-provider key is collected. */
export const IntegrationProviderRegistrationKey = "integration_providers"

/** Prefix for each provider's container registration key: `int_<identifier>[_<id>]`. */
export const IntegrationProviderRegistrationPrefix = "int_"

/** Container key under which the resolved module options are registered. */
export const INTEGRATION_OPTIONS_KEY = "integrationModuleOptions"

export type IntegrationModuleOptions = {
  /** Any non-empty secret; SHA-256-derived to a 32-byte AES-256-GCM key. High-entropy recommended (openssl rand -hex 32). */
  encryptionKey?: string
  /** Integration-providers, each `{ resolve, id?, options? }` — like payment/fulfillment. */
  providers?: ModuleProvider[]
}
