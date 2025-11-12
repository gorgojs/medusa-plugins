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
        id: "apiship_standard",
        name: "Apiship Fulfillment (CDEK Standard)",
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