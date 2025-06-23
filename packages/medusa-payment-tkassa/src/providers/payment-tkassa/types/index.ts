import { type TKassaOptions, type WebhookBody } from "t-kassa-api"

export interface TKassaProviderOptions extends TKassaOptions {
  terminalKey: string
  password: string
  server: string
  capture?: boolean
  webhookSecret?: string
}

export interface PaymentOptions {
}

export interface TKassaWebhookEvent {
  body: WebhookBody
}

export const PaymentProviderKeys = {
  TKASSA: "tkassa",
}
