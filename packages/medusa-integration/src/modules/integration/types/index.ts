import type { ModuleProvider } from "@medusajs/framework/types"

/** Awilix list-key under which every registered integration-provider key is collected. */
export const IntegrationProviderRegistrationKey = "integration_providers"

/** Prefix for each provider's container registration key: `int_<identifier>[_<id>]`. */
export const IntegrationProviderRegistrationPrefix = "int_"

/** Container key under which the resolved module options are registered. */
export const INTEGRATION_OPTIONS_KEY = "integrationModuleOptions"

export type IntegrationModuleOptions = {
  /** 32-byte base64 key (openssl rand -base64 32) for AES-256-GCM credential encryption. */
  encryptionKey?: string
  /** Dev-only: store secrets as plaintext when no valid key is set. */
  allowPlaintextInDev?: boolean
  /** Integration-providers, each `{ resolve, id?, options? }` — like payment/fulfillment. */
  providers?: ModuleProvider[]
}
