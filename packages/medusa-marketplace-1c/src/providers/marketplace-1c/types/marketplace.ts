import { MarketplaceCredentialsType } from "@gorgo/medusa-marketplace/types"

export interface MarketplaceOneCCredentialsType extends MarketplaceCredentialsType {
  login: string
  password: string
}

export interface MarketplaceOneCSettingsType {
  useZip?: boolean
  chunkSize?: number
  attributes?: {
    height?: string
    width?: string
    length?: string
    weight?: string
    mid_code?: string
    hs_code?: string
    origin_country?: string
  }
}

export const ORDER_TYPES = ["sale"] as const
