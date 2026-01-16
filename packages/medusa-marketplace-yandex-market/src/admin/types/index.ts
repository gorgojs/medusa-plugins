import type { MarketplaceDTO } from "@gorgo/medusa-marketplace/modules/marketplace/types"
import { ReactNode } from "react"

export type MarketplacesResponse = {
  marketplaces: MarketplaceDTO[]
  count: number
  limit: number
  offset: number
}

export type MarketplaceResponse = {
  marketplace: MarketplaceDTO
}

export type Activity = {
  title: string
  timestamp: string | Date
  children?: ReactNode
}
