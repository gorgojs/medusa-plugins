import { MarketplaceDTO } from "../../integration"

export type SyncMarketplaceProductsWorkflowInput = {
  marketplace: MarketplaceDTO,
  ids?: string[]
}
