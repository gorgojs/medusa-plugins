import { MedusaService } from "@medusajs/framework/utils"
import Marketplace from "./models/marketplace"
import MarketplaceEvent from "./models/marketplace-event"
import { MappingSchema } from "../../types"

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
      marketplace_id: "ozon",
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

  async getMarketplaceMappingSchema(): Promise<MappingSchema[]>  {
    const schema = [
      {
        "ozon_category": {
          "description_category_id": 88979652,
          "type_id": 970861191
        },
        "medusa_categories": [
          "pcat_01KC3R4AGX68TKF5Q4JQZ7KWRZ"
        ],
        "fields": [
          {
            "from": "id",
            "to": "offer_id"
          },
          {
            "from": "product.description",
            "to": "product_description"
          },
          {
            "from": "title",
            "to": "name"
          },
          {
            "from": "description",
            "to": "description"
          },
          {
            "from": "price_cents",
            "to": "price"
          },
          {
            "from": "currency",
            "to": "currency_code"
          },
          {
            "from": "sku",
            "to": "barcode"
          },
          {
            "from": "weight_g",
            "to": "weight",
            "default": 0
          },
          {
            "from": "attributes",
            "to": "attrs",
            "default": {}
          }
        ]
      }
    ] as MappingSchema[]
    
    return schema
  }
}

export default MarketplaceModuleService
