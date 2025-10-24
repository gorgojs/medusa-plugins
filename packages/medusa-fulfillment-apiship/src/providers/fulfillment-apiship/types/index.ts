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
  apiBase?: string
  email: string
  password: string
}