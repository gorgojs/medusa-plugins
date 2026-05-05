import { IntegrationDTO } from "../../integration"

export type ImportIntegrationOrdersWorkflowInput = {
  integration: IntegrationDTO
  orderType?: string
}
