export const FulfillmentProviderKeys = {
  APISHIP: "apiship",
}

// Apiship provider options
import type {
  Sender,
  ReturnAddress,
  Place,
  OrderRequest,
} from "../../../apiship-client"

export interface ApishipOptions {
  email: string
  password: string
  isTest?: boolean,
}