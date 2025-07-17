export interface RobokassaOptions {
  merchantLogin: string
  hashAlgorithm: string
  password1: string
  password2: string
  testPassword1?: string
  testPassword2?: string
  capture?: boolean,
  isTest?: boolean
}

export interface PaymentOptions {
}

export interface Payment {
  MerchantLogin: string
  OutSum: string
  InvoiceID: string
  SuccessUrl2?: string
  SuccessUrl2Method?: "GET" | "POST"
  FailUrl2?: string
  FailUrl2Method?: "GET" | "POST"
  EMail?: string
  SignatureValue: string
  Shp_SessionID: string
  isTest?: "1"
  StepByStep? : "true"
  Culture?: "ru" | "en"
}

export interface RobokassaEvent {
  out_summ: string
  OutSum: string
  inv_id: string
  InvId: string
  crc: string
  SignatureValue: string
  PaymentMethod: string
  IncSum: string
  IncCurrLabel: string
  EMAil: string
  Fee: string
  Shp_SessionID: string
}

export const PaymentProviderKeys = {
  ROBOKASSA: "robokassa",
}

export const HashAlgorithms = [
  'md5',
  'ripemd160',
  'sha1',
  'sha256',
  'sha384',
  'sha512'
]
