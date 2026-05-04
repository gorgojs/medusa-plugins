import { IntegrationCredentialsType, IntegrationSettingsType } from "@gorgo/medusa-integration/types"

export const MAX_VARIANTS_TO_CREATE = 30

export interface IntegrationWildberriesCredentialsType extends IntegrationCredentialsType {
  apiKey: string
}

export interface IntegrationWildberriesSettingsType extends IntegrationSettingsType {
  // TODO
}

export const ORDER_TYPES = ["FBS", "FBO"] as const

export type IntegrationWildberriesOrderType = (typeof ORDER_TYPES)[number]
