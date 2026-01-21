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
