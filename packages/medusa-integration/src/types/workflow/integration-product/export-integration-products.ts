import { IntegrationDTO } from "../../integration"

export type ExportIntegrationProductsWorkflowInput = {
  integration: IntegrationDTO,
  ids?: string[]
}
