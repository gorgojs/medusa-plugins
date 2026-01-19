import { MarketplaceCredentialsType } from  "@gorgo/medusa-marketplace/modules/marketplace/types"

export interface MarketplaceOzonCredentialsType extends MarketplaceCredentialsType {
  apiKey: string;
  clientId: string;
}
