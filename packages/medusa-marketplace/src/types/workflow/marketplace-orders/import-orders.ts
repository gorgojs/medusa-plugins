import { MarketplaceDTO } from "../../marketplace"

export type ImportMarketplaceOrdersWorkflowInput = {
  marketplace: MarketplaceDTO
  orderType?: string
}
