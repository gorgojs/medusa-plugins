import { CreateOrderDTO } from "@medusajs/framework/types"
import { CreateIntegrationOrderDTO, EventActionType, EventDirectionType, EventEntityType } from "./common"

export type LogEventInput = {
  integrationId: string
  correlationId?: string
  direction: EventDirectionType
  entityType: EventEntityType
  action: EventActionType
  startedAt?: Date
  finishedAt?: Date
  requestData?: Record<string, unknown>
  responseData?: Record<string, unknown>
}

export interface MedusaOrder extends CreateOrderDTO {
  integration_order: CreateIntegrationOrderDTO
}
