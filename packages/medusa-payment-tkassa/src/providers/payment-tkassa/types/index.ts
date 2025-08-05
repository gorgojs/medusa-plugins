import { type TKassaOptions, type WebhookBody } from "t-kassa-api"
import { PaymentSessionStatus } from "@medusajs/framework/utils"

export interface TKassaProviderOptions extends TKassaOptions {
  terminalKey: string
  password: string
  ffdVersion: FfdVersion
  taxation: Taxation
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

export interface TkassaEvent extends Partial<Payment> {
  Token: string
  Status: keyof typeof PaymentStatuses
  OrderId: string
  Amount: number
  [k: string]: any
}

export const PaymentProviderKeys = {
  TKASSA: "tkassa",
}

export const PaymentStatuses = {
  NEW: "NEW",
  FORM_SHOWED: "FORM_SHOWED",
  AUTHORIZING: "AUTHORIZING",
  "3DS_CHECKING": "3DS_CHECKIN",
  "3DS_CHECKED": "3DS_CHECKED",
  AUTHORIZED: "AUTHORIZED",
  PAY_CHECKING: "PAY_CHECKING",
  CONFIRMING: "CONFIRMING",
  CONFIRMED: "CONFIRMED",
  REVERSING: "REVERSING",
  PARTIAL_REVERSED: "PARTIAL_REVERSED",
  REVERSED: "REVERSED",
  REFUNDING: "REFUNDING",
  PARTIAL_REFUNDED: "PARTIAL_REFUNDED",
  REFUNDED: "REFUNDED",
  CANCELED: "CANCELED",
  DEADLINE_EXPIRED: "DEADLINE_EXPIRED",
  REJECTED: "REJECTED",
  AUTH_FAIL: "AUTH_FAIL",
}

export const PaymentStatusesMap = {
  NEW: PaymentSessionStatus.PENDING,
  FORM_SHOWED: PaymentSessionStatus.PENDING,
  AUTHORIZING: PaymentSessionStatus.PENDING,
  "3DS_CHECKING": PaymentSessionStatus.PENDING,
  "3DS_CHECKED": PaymentSessionStatus.PENDING,
  AUTHORIZED: PaymentSessionStatus.AUTHORIZED,
  PAY_CHECKING: PaymentSessionStatus.PENDING,
  CONFIRMING: PaymentSessionStatus.PENDING,
  CONFIRMED: PaymentSessionStatus.CAPTURED,
  REVERSING: PaymentSessionStatus.CANCELED,
  PARTIAL_REVERSED: PaymentSessionStatus.CANCELED,
  REVERSED: PaymentSessionStatus.CANCELED,
  REFUNDING: PaymentSessionStatus.CANCELED,
  PARTIAL_REFUNDED: PaymentSessionStatus.CANCELED,
  REFUNDED: PaymentSessionStatus.CANCELED,
  CANCELED: PaymentSessionStatus.CANCELED,
  DEADLINE_EXPIRED: PaymentSessionStatus.CANCELED,
  REJECTED: PaymentSessionStatus.ERROR,
  AUTH_FAIL: PaymentSessionStatus.ERROR,
}

export const taxationValues = [
  "osn", 
  "usn_income", 
  "usn_income_outcome", 
  "esn", 
  "patent"
] as const

export type Taxation = typeof taxationValues[number]

export const ffdVersionValues = [
  "1.2",
  "1.05"
] as const

export type FfdVersion = typeof ffdVersionValues[number]


export interface Receipt_FFD_105 {
  FfdVersion: string
  Taxation: Taxation
  Email?: string
  Phone?: string
  Items: Items_FFD_105[]
  Payments?: Payments_FFD
}

export interface Receipt_FFD_12 {
  FfdVersion: string
  ClientInfo?: ClientInfo
  Taxation: Taxation
  Email?: string
  Phone?: string
  Customer?: string
  CustomerInn?: string
  Items: Items_FFD_12[]
  Payments?: Payments_FFD
}

export interface Items_FFD_105 {
  Name: string
  Price: number
  Quantity: number
  Amount: number
  PaymentMethod: "full_prepayment" | "prepayment" | "advance" | "full_payment" | "partial_payment" | "credit" | "credit_payment"
  PaymentObject: "commodity" | "excise" | "job" | "service" | "gambling_bet" | "gambling_prize" | "lottery" | "lottery_prize" | "intellectual_activity" | "payment" | "agent_commission" | "composite" | "another"
  Tax: "none" | "vat0" | "vat5" | "vat7" | "vat10" | "vat20" | "vat105" | "vat107" | "vat110" | "vat120"
  Ean13?: string
  ShopCode?: string
  AgentData?: AgentData
  SupplierInfo?: SupplierInfo
}

export interface Items_FFD_12 {
  AgentData?: AgentData
  SupplierInfo?: SupplierInfo
  Name: string
  Price: number
  Quantity: number
  Amount: number
  Tax: "none" | "vat0" | "vat5" | "vat7" | "vat10" | "vat20" | "vat105" | "vat107" | "vat110" | "vat120"
  PaymentMethod: "full_prepayment" | "prepayment" | "advance" | "full_payment" | "partial_payment" | "credit" | "credit_payment"
  PaymentObject: "commodity" | "excise" | "job" | "service" | "gambling_bet" | "gambling_prize" | "lottery" | "lottery_prize" | "intellectual_activity" | "payment" | "agent_commission" | "contribution" | "property_rights" | "unrealization" | "tax_reduction" | "trade_fee" | "resort_tax" | "pledge" | "income_decrease" | "ie_pension_insurance_without_payments" | "ie_pension_insurance_with_payments" | "ie_medical_insurance_without_payments" | "ie_medical_insurance_with_payments" | "social_insurance" | "casino_chips" | "agent_payment" | "excisable_goods_without_marking_code" | "excisable_goods_with_marking_code" | "goods_without_marking_code" | "goods_with_marking_code" | "another"
  UserData?: string
  Excise?: string
  CountryCode?: string
  DeclarationNumber?: string
  MeasurementUnit: string
  MarkProcessingMode?: string
  MarkCode?: MarkCode
  MarkQuantity?: MarkQuantity
  SectoralItemProps?: SectoralItemProps[]
}

export interface Payments_FFD {
  Cash?: number
  Electronic: number
  AdvancePayment?: number
  Credit?: number
  Provision?: number
}

export interface ClientInfo {
  Birthdate?: string
  Citizenship?: string
  DocumentCode?: string
  DocumentData?: string
  Address?: string
}

export interface AgentData {
  AgentSign?: string
  OperationName?: string
  Phones?: string[]
  ReceiverPhones?: unknown
  TransferPhones?: unknown
  OperatorName?: string
  OperatorAddress?: string
  OperatorInn?: string
}

export interface SupplierInfo {
  Phones?: string[]
  Name?: string
  Inn?: string
}

export interface MarkCode {
  MarkCodeType: string
  Value: string
}

export interface MarkQuantity {
  Numerator?: number
  Denominator?: number
}

export interface SectoralItemProps {
  FederalId: string
  Date: string
  Number: string
  Value: string
}