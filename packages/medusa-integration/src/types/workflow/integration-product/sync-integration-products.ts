import { IntegrationDTO } from "../../integration"

export type SyncIntegrationProductsWorkflowInput = {
  integration: IntegrationDTO,
  ids?: string[]
}
