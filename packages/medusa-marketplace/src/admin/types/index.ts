import type { MarketplaceDTO } from "../../modules/marketplace/types"

export type MarketplaceResponse = {
  marketplaces: MarketplaceDTO[]
  count: number
  limit: number
  offset: number
}
