import {
  AbstractPaymentProvider,
  PaymentSessionStatus,
  PaymentActions,
  isDefined
} from "@medusajs/framework/utils"
import {
  InitiatePaymentInput, InitiatePaymentOutput,
  CapturePaymentInput, CapturePaymentOutput,
  RefundPaymentInput, RefundPaymentOutput,
  CancelPaymentInput, CancelPaymentOutput,
  RetrievePaymentInput, RetrievePaymentOutput,
  GetPaymentStatusInput, GetPaymentStatusOutput,
  ProviderWebhookPayload, WebhookActionResult, Logger,
  AuthorizePaymentInput, AuthorizePaymentOutput,
  DeletePaymentInput, DeletePaymentOutput,
  UpdatePaymentInput, UpdatePaymentOutput,
} from "@medusajs/framework/types"
import {
  HashAlgorithms,
  Payment,
  RobokassaEvent,
  RobokassaOptions,
} from "../types"
import axios, { AxiosError } from "axios"
import { XMLParser } from 'fast-xml-parser'
import {
  stringToNumberHash,
  createSignature
} from "../utils"
import { createHash } from "crypto"

abstract class RobokassaBase extends AbstractPaymentProvider<RobokassaOptions> {
  static identifier = "robokassa"
  protected options_: RobokassaOptions
  protected logger_: Logger
  protected baseUrl_ = "https://auth.robokassa.ru"
  protected paymentUrl_ = `${this.baseUrl_}/Merchant/Index.aspx`
  protected getPaymentUrl_ = `${this.baseUrl_}/Merchant/WebService/Service.asmx/OpStateExt`
  protected capturePaymentUrl_ = `${this.baseUrl_}/Merchant/Payment/Confirm`

  static validateOptions(options: RobokassaOptions): void {
    if (!isDefined(options.merchantLogin)) {
      throw new Error("Required option `merchantLogin` is missing in Robokassa provider")
    }
    if (!isDefined(options.password1)) {
      throw new Error("Required option `password1` is missing in Robokassa provider")
    }
    if (!isDefined(options.password2)) {
      throw new Error("Required option `password2` is missing in Robokassa provider")
    }
    if (!isDefined(options.hashAlgorithm) || !HashAlgorithms.includes(options.hashAlgorithm as (typeof HashAlgorithms)[number])) {
      throw new Error("Required option `hashAlgorithm` is missing in Robokassa provider")
    }
  }

  constructor(container: { logger: Logger }, options: RobokassaOptions) {
    super(container, options)
    this.options_ = options
    this.logger_ = container.logger
  }

  protected createSignature(
    signatureParams: string[],
  ) {
    const concatenatedParams = signatureParams.filter(v => v).join(":")
    const res = createHash(this.options_.hashAlgorithm).update(concatenatedParams).digest('hex')

    return res
  }

  private normalizePaymentParameters(
    extra?: InitiatePaymentInput
  ): Partial<Payment> {
    const res = {} as Partial<Payment>

    res.SuccessUrl2 = extra?.data?.SuccessUrl2 as string
    res.SuccessUrl2Method = extra?.data?.SuccessUrl2Method as "GET" | "POST"
    res.FailUrl2 = extra?.data?.FailUrl2 as string
    res.FailUrl2Method = extra?.data?.FailUrl2Method as "GET" | "POST"
    res.EMail = extra?.data?.EMail as string

    res.isTest =
      extra?.data?.isTest as "1" ??
        this.options_.isTest ? "1" : undefined

    res.StepByStep =
      extra?.data?.StepByStep as "true" ??
        this.options_.capture ? undefined : "true"

    return res
  }

  /**
   * Initiate a new payment.
   */
  async initiatePayment(input: InitiatePaymentInput): Promise<InitiatePaymentOutput> {
    this.logger_.debug(
      `RobokassaBase.initiatePayment input:\n${JSON.stringify(input, null, 2)}`
    )

    const { amount, context = {} } = input

    const outSum = Number(amount).toFixed(2)
    const invId = stringToNumberHash(context.idempotency_key as string).toString()
    const sessionId = input.data?.session_id as string

    const additionalParameters = this.normalizePaymentParameters(input)

    const raw = [
      this.options_.merchantLogin,
      outSum,
      invId,
      additionalParameters.StepByStep,
      additionalParameters.SuccessUrl2,
      additionalParameters.SuccessUrl2Method,
      additionalParameters.FailUrl2,
      additionalParameters.FailUrl2Method,
      this.options_.isTest ? this.options_.testPassword1 : this.options_.password1,
      `Shp_SessionID=${sessionId}`
    ]
    const signature = createSignature(raw, this.options_.hashAlgorithm)

    const payment: Payment = {
      MerchantLogin: this.options_.merchantLogin,
      OutSum: outSum,
      InvoiceID: invId,
      SignatureValue: signature,
      Shp_SessionID: sessionId,
      ...additionalParameters
    }

    const filteredPayment = Object.fromEntries(
      Object.entries(payment).filter(([_, value]) => value !== undefined)
    )

    const params = new URLSearchParams(filteredPayment as unknown as Record<string, string>).toString()
    const paymentUrl = `${this.paymentUrl_}?${params}`

    return {
      id: invId,
      data: {
        id: invId,
        outSum: outSum,
        paymentUrl: paymentUrl
      }
    }
  }

  /**
   * Capture an existing payment.
   */
  async capturePayment(input: CapturePaymentInput): Promise<CapturePaymentOutput> {
    this.logger_.debug(`RobokassaBase.capturePayment input:\n${JSON.stringify(input, null, 2)}`)

    const invId = input.data?.id as string
    const outSum = input.data?.outSum as string

    const raw = [
      this.options_.merchantLogin,
      outSum,
      invId,
      this.options_.isTest ? this.options_.testPassword1 : this.options_.password1
    ]
    const signature = createSignature(raw, this.options_.hashAlgorithm)

    const capturePayment: Partial<Payment> = {
      MerchantLogin: this.options_.merchantLogin,
      InvoiceID: invId,
      SignatureValue: signature,
      OutSum: outSum
    }
    const params = new URLSearchParams(capturePayment as unknown as Record<string, string>).toString()
    const capturePaymentUrl = `${this.capturePaymentUrl_}?${params}`

    try {
      const response = await axios.post(capturePaymentUrl)
      return { data: response.data as unknown as Record<string, unknown> }
    } catch (e) {
      throw this.buildError("An error occurred in capturePayment", e)
    }
  }

  /**
   * Authorize a payment by retrieving its status.
   */
  async authorizePayment(input: AuthorizePaymentInput): Promise<AuthorizePaymentOutput> {
    this.logger_.debug(`RobokassaBase.authorizePayment input:\n${JSON.stringify(input, null, 2)}`)

    const statusResponse = await this.getPaymentStatus(input)
    return statusResponse
  }

  /**
   * Delete a payment.
   * Payment delete is not supported by Robokassa.
   */
  async deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput> {
    this.logger_.debug(`RobokassaBase.deletePayment input:\n${JSON.stringify(input, null, 2)}`)

    return input
  }

  /**
   * Update a payment.
   * Payment update is not supported by Robokassa.
   */
  async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
    this.logger_.debug(`RobokassaBase.updatePayment input:\n${JSON.stringify(input, null, 2)}`)

    return input
  }

  /**
   * Refund a payment.
   * Payment refund is not supported by Robokassa.
   */
  async refundPayment(input: RefundPaymentInput): Promise<RefundPaymentOutput> {
    this.logger_.debug(`RobokassaBase.refundPayment input:\n${JSON.stringify(input, null, 2)}`)

    return input
  }

  /**
   * Cancel an existing payment.
   */
  async cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput> {
    this.logger_.debug(`RobokassaBase.cancelPayment input:\n${JSON.stringify(input, null, 2)}`)

    return input
  }

  /**
   * Retrieve a payment.
   */
  async retrievePayment(input: RetrievePaymentInput): Promise<RetrievePaymentOutput> {
    this.logger_.debug(`RobokassaBase.retrievePayment input:\n${JSON.stringify(input, null, 2)}`)

    const invId = input.data?.id as string
    const raw = [
      this.options_.merchantLogin,
      invId,
      this.options_.isTest ? this.options_.testPassword2 : this.options_.password2
    ]
    const signature = createSignature(raw, this.options_.hashAlgorithm)

    const params = new URLSearchParams({
      MerchantLogin: this.options_.merchantLogin,
      InvoiceID: invId,
      Signature: signature,
    }).toString()

    const url = `${this.getPaymentUrl_}?${params}`

    try {
      const { data: xml } = await axios.post(url)
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
      })

      const parsed = parser.parse(xml)
      const response = parsed['OperationStateResponse']

      return {
        data: {
          ...input.data,
          response: response
        }
      }
    } catch (e) {
      throw this.buildError("An error occurred in retrievePayment", e)
    }
  }

  /**
   * Retrieve payment status and map it to Medusa status.
   */
  async getPaymentStatus(
    input: GetPaymentStatusInput
  ): Promise<GetPaymentStatusOutput> {
    this.logger_.debug(
      `RobokassaBase.getPaymentStatus input:\n${JSON.stringify(input, null, 2)}`
    )
    try {
      const response = (await this.retrievePayment(input)).data?.response as { Result: { Code: string, Description: string }, State: { Code: string } }
      if (!response || !response.Result || !response.State) {
        throw new Error("Invalid response structure from Robokassa")
      }

      const result = response.Result as { Code: string, Description: string }
      const state = response.State as { Code: string }

      const resultCode = parseInt(result.Code, 10)
      const resultDescription = result.Description
      if (resultCode !== 0) {
        throw new Error(`Robokassa error ${resultCode}: ${resultDescription}`)
      }
      const paymentState = parseInt(state.Code, 10)

      switch (paymentState) {
        case 10: // 10 is canceled
        case 60: // 60 is refunded
          return {
            status: PaymentSessionStatus.CANCELED, data: {
              ...input.data,
              response: response
            }
          }
        case 20: // 20 is on hold (capture not done yet)
          return {
            status: PaymentSessionStatus.AUTHORIZED, data: {
              ...input.data,
              response: response
            }
          }
        case 5: // 5 is initiated
        case 50: // 50 is payed, but still processing
          return {
            status: PaymentSessionStatus.PENDING, data: {
              ...input.data,
              response: response
            }
          }
        case 80: // 80 is paused
          return {
            status: PaymentSessionStatus.REQUIRES_MORE, data: {
              ...input.data,
              response: response
            }
          }
        case 100: // is successfully captured
          return {
            status: PaymentSessionStatus.CAPTURED, data: {
              ...input.data,
              response: response
            }
          }
        default:
          return {
            status: PaymentSessionStatus.ERROR, data: {
              ...input.data,
              response: response
            }
          }
      }
    } catch (e) {
      throw this.buildError("An error occurred in getPaymentStatus", e)
    }
  }

  async getWebhookActionAndData(payload: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult> {
    this.logger_.debug(
      `RobokassaBase.getWebhookActionAndData payload:\n${JSON.stringify(payload, null, 2)}`
    )

    const data = payload.data as unknown as RobokassaEvent
    const isValid = await this.isWebhookEventValid(data)
    if (!isValid)
      return {
        action: PaymentActions.NOT_SUPPORTED
      }

    const sessionId = data.Shp_SessionID
    const outSum = Number(data.OutSum)

    return {
      action: PaymentActions.SUCCESSFUL,
      data: { session_id: sessionId, amount: outSum }
    }
  }

  protected async isWebhookEventValid(data: RobokassaEvent): Promise<boolean> {
    const incomingSignature = data.SignatureValue
    const raw = [
      data.OutSum,
      data.InvId,
      this.options_.password2,
      `Shp_SessionID=${data.Shp_SessionID}`
    ]
    const signature = createSignature(raw, this.options_.hashAlgorithm)

    return signature === incomingSignature
  }

  /**
   * Helper to build errors with additional context.
   */
  protected buildError(message: string, error: Error | AxiosError): Error {
    if (axios.isAxiosError(error)) {
      return new Error(
        `${message}: ${error.response?.status} ${error.response?.data?.code} - ${error.response?.data?.description}`.trim()
      )
    }
    return new Error(
      `${message}: ${error.message}`.trim()
    )
  }
}

export default RobokassaBase
