import { MedusaService } from "@medusajs/framework/utils"
import Marketplace from "./models/marketplace"
import MarketplaceEvent from "./models/marketplace-event"

export const DEFAULT_MARKETPLACE_ID = process.env.DEFAULT_MARKETPLACE_ID as string

export type LogEventInput = {
  correlationId?: string,
  direction: "MEDUSA_TO_MARKETPLACE" | "MARKETPLACE_TO_MEDUSA",
  entityType: "PRODUCT" | "PRODUCT_MEDIA" | "PRODUCT_PRICE" | "PRODUCT_STOCK" | "ORDER",
  action: "CREATE" | "UPDATE" | "DELETE",
  startedAt?: Date,
  finishedAt?: Date,
  requestData?: Record<string, unknown>,
  responseData?: Record<string, unknown>
}

class MarketplaceModuleService extends MedusaService({
  Marketplace, MarketplaceEvent
}) {

  async logEvent(input: LogEventInput) {
    const result = await this.createMarketplaceEvents({
      marketplace_id: DEFAULT_MARKETPLACE_ID,
      correlation_id: input.correlationId,
      direction: input.direction,
      entity_type: input.entityType,
      action: input.action,
      started_at: input.startedAt,
      finished_at: input.finishedAt,
      request_data: input.requestData,
      response_data: input.responseData
    })
    return result.id
  }
}

export default MarketplaceModuleService
