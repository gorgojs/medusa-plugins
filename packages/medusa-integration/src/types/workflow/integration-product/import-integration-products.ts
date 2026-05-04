import { IntegrationDTO } from "../../integration"

export type ImportIntegrationProductsWorkflowInput = {
  integration: IntegrationDTO,
  ids?: string[]
}
