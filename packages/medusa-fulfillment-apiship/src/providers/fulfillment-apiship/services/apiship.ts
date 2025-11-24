import ApishipBase from "../core/apiship-base"
import { FulfillmentProviderKeys } from "../types"
import { FulfillmentOption } from "@medusajs/framework/types"

class ApishipService extends ApishipBase {
  static identifier = FulfillmentProviderKeys.APISHIP

  constructor(_, options) {
    super(_, options)
  }

  async getFulfillmentOptions(): Promise<FulfillmentOption[]> {
    // TODO: fetch real options from Apiship API and Medusa Admin
    return [
      {
        id: "apiship_1",
        deliveryType: 1,
        pickupType: 1,
        name: "До двери (ApiShip)",
        description: "Доставка груза до двери клиента",
        providerKey: "cdek",
        isCod: false
      },
      {
        id: "apiship_2",
        deliveryType: 2,
        pickupType: 1,
        name: "До ПВЗ (ApiShip)",
        description: "Доставка груза до пункта выдачи",
        providerKey: "cdek",
        isCod: false
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