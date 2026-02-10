import type { MarketplaceDTO } from "@gorgo/medusa-marketplace/modules/marketplace/types"

export type MarketplacesResponse = {
  marketplaces: MarketplaceDTO[]
  count: number
  limit: number
  offset: number
}

export type MarketplaceResponse = {
  marketplace: MarketplaceDTO
}
