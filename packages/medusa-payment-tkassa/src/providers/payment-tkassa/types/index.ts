import { type TKassaOptions, type WebhookBody } from "t-kassa-api"

export interface TKassaProviderOptions extends TKassaOptions {
  terminalKey: string
  password: string
  capture?: boolean
  webhookSecret?: string
}

export interface PaymentOptions {
}

export interface Payment {
  TerminalKey: string
  Password: string
  Amount: number
  OrderId: string
  SuccessURL?: string
  FailURL?: string
  PayType?: "O" | "T"  
}

export interface TKassaWebhookEvent {
  body: WebhookBody
}

export const PaymentProviderKeys = {
  TKASSA: "tkassa",
}
