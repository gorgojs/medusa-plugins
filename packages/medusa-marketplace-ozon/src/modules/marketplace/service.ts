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
          "description_category_id": 200001517,
          "type_id": 93228
        },
        "medusa_categories": [
          "pcat_01KBHXW40P2WV8P2GRK1FA96EH"
        ],
        "fields": [
          {
            "from": "id",
            "to": "offer_id"
          },
          {
            from: "combined_name",
            to: "name",
          },
          {
            "from": "description",
            "to": "description"
          },
          {
            "from": "prices.0.amount",
            "to": "price"
          },
          {
            "from": "prices.1.amount",
            "to": "old_price"
          },
          {
            "from": "prices.currency_code",
            "to": "currency_code",
            default: "RUB"
          },
          {
            "from": "sku",
            "to": "barcode"
          },
          {
            "from": "dimension_unit",
            "to": "dimension_unit",
            default: "mm"
          },
          {
            "from": "weight_unit",
            "to": "weight_unit",
            default: "g"
          },
          {
            "from": "weight",
            "to": "weight",
            "default": 100
          },
          {
            "from": "length",
            "to": "depth",
            "default": 10
          },
          {
            "from": "height",
            "to": "height",
            "default": 10
          },
          {
            "from": "width",
            "to": "width",
            "default": 10
          },
          {
            "from": "images",
            "to": "images",
            "default": []
          },
          {
            "from": "vat",
            "to": "vat",
            "default": "0"
          },
          {
            "from": "attributes",
            "to": "attributes",
            "default":[
          { "id": 8229, "values": [{ "value": "Термофутболка" }] },
          { "id": 4295, "values": [{ "value": "48" }, { "value": "50" }] },
          { "id": 9163, "values": [{ "value": "Мужской" }] },
          { "id": 10096, "values": [{ "value": "черный" }] },
          { "id": 31, "values": [{ "value": "Нет бренда" }] },
          { "id": 8292, "values": [{ "value": "prod_01KBHXW41JG2DVDQXQESNFRT85" }] }
        ]
          }
        ]
      }
    ] as MappingSchema[]
    
    return schema
  }
}

export default MarketplaceModuleService
