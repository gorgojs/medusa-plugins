import { MarketplaceDTO } from "../../marketplace"

export type ImportMarketplaceProductsWorkflowInput = {
  marketplace: MarketplaceDTO,
  ids?: string[]
}
