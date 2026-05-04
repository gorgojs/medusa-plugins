import { IntegrationCredentialsType } from  "@gorgo/medusa-integration/types"

export interface IntegrationOzonCredentialsType extends IntegrationCredentialsType {
  apiKey: string;
  clientId: string;
}

export const ORDER_TYPES = ["realFBS", "FBO"] as const
