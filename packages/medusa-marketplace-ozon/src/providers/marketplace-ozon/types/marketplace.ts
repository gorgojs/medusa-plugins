import { MarketplaceCredentialsType } from  "@gorgo/medusa-marketplace/types"

export interface MarketplaceOzonCredentialsType extends MarketplaceCredentialsType {
  apiKey: string;
  clientId: string;
}
