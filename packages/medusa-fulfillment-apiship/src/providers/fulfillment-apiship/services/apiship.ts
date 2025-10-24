import ApishipBase from "../core/apiship-base"
import { FulfillmentProviderKeys } from "../types"

class ApishipService extends ApishipBase {
  static identifier = FulfillmentProviderKeys.APISHIP

  constructor(_, options) {
    super(_, options)
  }

  get paymentOptions(): PaymentOptions {
    return {}
  }
}

export default ApishipService