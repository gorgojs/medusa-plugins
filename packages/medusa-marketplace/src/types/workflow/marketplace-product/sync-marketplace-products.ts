import { MarketplaceDTO } from "../../marketplace"

export type SyncMarketplaceProductsWorkflowInput = {
  marketplace: MarketplaceDTO,
  ids?: string[]
}
