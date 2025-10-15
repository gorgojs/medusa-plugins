import ApishipBase from "../core/apiship-base"
import { FulfillmentProviderKeys } from "../types"
import { FulfillmentOption } from "@medusajs/framework/types"

class ApishipService extends ApishipBase {
  static identifier = FulfillmentProviderKeys.APISHIP

  constructor(_, options) {
    super(_, options)
  }

  async getFulfillmentOptions(): Promise<FulfillmentOption[]> {
    return [
      {
        id: "apiship_doortodoor",
        deliveryType: 1,
        pickupType: 1,
        name: "От двери до двери",
      },
      {
        id: "apiship_doortopoint",
        deliveryType: 2,
        pickupType: 1,
        name: "От двери до ПВЗ",
      },
      {
        id: "apiship_pointtodoor",
        deliveryType: 1,
        pickupType: 2,
        name: "От ПВЗ до двери",
      },
      {
        id: "apiship_pointtopoint",
        deliveryType: 2,
        pickupType: 2,
        name: "От ПВЗ до ПВЗ",
      },
      {
        id: "apiship_return",
        name: "Apiship Fulfillment (Return)",
        is_return: true,
      }
    ]
  }
}

export default ApishipService
