import { MarketplaceDTO } from "../../integration"

export type ImportMarketplaceProductsWorkflowInput = {
  marketplace: MarketplaceDTO,
  ids?: string[]
}
