import { CreateOrderDTO } from "@medusajs/framework/types"
import { EventActionType, EventDirectionType, EventEntityType } from "./common"

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

export type MedusaOrder = {
  sales_channel_id: string
  email: string
  shipping_address: NonNullable<CreateOrderDTO["shipping_address"]>
  items: NonNullable<CreateOrderDTO["items"]>
  metadata?: Record<string, any>
}
