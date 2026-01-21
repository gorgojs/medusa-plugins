import { MarketplaceDTO } from "../../marketplace"

export type ExportMarketplaceProductsWorkflowInput = {
  marketplace: MarketplaceDTO,
  ids?: string[]
}
