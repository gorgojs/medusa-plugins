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
        id: "apiship",
        name: "Apiship Fulfillment",
        description: "Fulfillment via Apiship",
      }
    ]

  }
}

export default ApishipService