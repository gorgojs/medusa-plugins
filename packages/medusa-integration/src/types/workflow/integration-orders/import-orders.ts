import { MarketplaceDTO } from "../../integration"

export type ImportMarketplaceOrdersWorkflowInput = {
  marketplace: MarketplaceDTO
  orderType?: string
}
