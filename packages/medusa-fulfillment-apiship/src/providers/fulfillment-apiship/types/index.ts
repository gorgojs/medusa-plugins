export const FulfillmentProviderKeys = {
  APISHIP: "apiship",
}

export interface ApishipOptions {
  email: string
  password: string
  token: string
  isTest?: boolean
}