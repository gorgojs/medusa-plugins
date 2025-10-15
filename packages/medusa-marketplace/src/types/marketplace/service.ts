import { CreateOrderDTO } from "@medusajs/framework/types"
import { CreateMarketplaceOrderDTO, EventActionType, EventDirectionType, EventEntityType } from "./common"

export type LogEventInput = {
  marketplaceId: string
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
  marketplace_order: CreateMarketplaceOrderDTO
}
