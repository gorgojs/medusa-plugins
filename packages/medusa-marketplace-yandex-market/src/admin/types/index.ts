import type { MarketplaceDTO } from "@gorgo/medusa-marketplace/modules/marketplace/types"

export type MarketplaceResponse = {
  marketplaces: MarketplaceDTO[]
  count: number
  limit: number
  offset: number
}
