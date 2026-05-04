import { MarketplaceDTO } from "../../integration"

export type ExportMarketplaceProductsWorkflowInput = {
  marketplace: MarketplaceDTO,
  ids?: string[]
}
