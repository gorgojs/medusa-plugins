import type { MarketplaceDTO } from "../../types"

export type MarketplaceResponse = {
  marketplaces: MarketplaceDTO[]
  count: number
  limit: number
  offset: number
}
