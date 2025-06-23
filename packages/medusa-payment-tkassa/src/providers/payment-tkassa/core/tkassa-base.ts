import {
  AbstractPaymentProvider,
  PaymentSessionStatus,
  PaymentActions
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
import crypto from "crypto"
import { TKassa, WebhookBody } from "t-kassa-api"
import { TKassaProviderOptions } from "../types"
import axios, { AxiosError } from "axios"
import {
  getSmallestUnit,
} from "../utils/get-smallest-unit"

abstract class TkassaBase extends AbstractPaymentProvider<TKassaProviderOptions> {
  static identifier = "tkassa"
  protected options_: TKassaProviderOptions
  protected client: TKassa
  protected logger_: Logger

  constructor(container: { logger: Logger }, options: TKassaProviderOptions) {
    super(container, options)
    this.options_ = options
    this.logger_ = container.logger
    this.client = new TKassa(options.terminalKey, options.password, { server: options.server })
  }

  /**
   * Initiate a new payment.
   */
  async initiatePayment(input: InitiatePaymentInput): Promise<InitiatePaymentOutput> {
    this.logger_.debug(`TkassaBase.initiatePayment input:\n${JSON.stringify(input, null, 2)}`)

    const { amount, context = {}, currency_code } = input
    const amountValue = getSmallestUnit(amount, currency_code)
    const idKey = context.idempotency_key
    const successUrl = input.data?.SuccessURL as string
    const payType = this.options_.capture ? "O" : "T"
    try {
      const response = await this.client.init({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        Amount: amountValue,
        OrderId: idKey || "",
        SuccessURL: successUrl,
        PayType: payType
      })
      const paymentId = String(response.PaymentId)
      return { id: paymentId, data: response }
    } catch (e) {
      throw this.buildError("An error occurred in initiatePayment", e)
    }
  }

  /**
   * Capture an existing payment.
   */
  async capturePayment(input: CapturePaymentInput): Promise<CapturePaymentOutput> {
    this.logger_.debug(`TkassaBase.capturePayment input:\n${JSON.stringify(input, null, 2)}`)

    const paymentId = input.data?.PaymentId as string

    try {
      const response = await this.client.confirm({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId
      })
      return { data: response }
    } catch (e) {
      throw this.buildError("An error occurred in capturePaymentt", e)
    }
  }

  /**
   * Authorize a payment by retrieving its status.
   */
  async authorizePayment(input: AuthorizePaymentInput): Promise<AuthorizePaymentOutput> {
    this.logger_.debug(`TkassaBase.authorizePayment input:\n${JSON.stringify(input, null, 2)}`)

    const statusResponse = await this.getPaymentStatus(input)
    return statusResponse
  }

  /**
   * Delete a payment.
   * Payment delete is not supported by T-Kassa.
   */
  async deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput> {
    this.logger_.debug(`TkassaBase.deletePayment input:\n${JSON.stringify(input, null, 2)}`)

    return input
  }

  /**
   * Update a payment.
   * Payment update is not supported by T-Kassa.
   */
  async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
    this.logger_.debug(`TkassaBase.updatePayment input:\n${JSON.stringify(input, null, 2)}`)

    return input
  }

  /**
   * Refund a payment.
   */
  async refundPayment({
    amount,
    data
  }: RefundPaymentInput): Promise<RefundPaymentOutput> {
    this.logger_.debug(`TkassaBase.refundPayment input:\n${JSON.stringify({ amount, data }, null, 2)}`)

    const paymentId = data?.PaymentId as string

    try {
      const response = await this.client.cancel({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId,
        ...(typeof amount === "number"
          ? { Amount: Number(amount) }
          : {})
      })
      return { data: response }
    } catch (e) {
      throw this.buildError("An error occurred in refundPayment", e)
    }
  }

  /**
   * Cancel an existing payment.
   */
  async cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput> {
    this.logger_.debug(`TkassaBase.cancelPayment input:\n${JSON.stringify(input, null, 2)}`)

    const paymentId = input.data?.PaymentId as string

    try {
      const response = await this.client.cancel({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId
      })
      return { data: response }
    } catch (e) {
      throw this.buildError("An error occurred in cancelPayment", e)
    }
  }

  /**
   * Retrieve a payment.
   */
  async retrievePayment(input: RetrievePaymentInput): Promise<RetrievePaymentOutput> {
    this.logger_.debug(`TkassaBase.retrievePayment input:\n${JSON.stringify(input, null, 2)}`)

    const paymentId = input.data?.PaymentId as string

    try {
      const response = await this.client.getState({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId
      })
      return { data: response }
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
      `TkassaProvider.getPaymentStatus input:\n${JSON.stringify(input, null, 2)}`
    )

    const paymentId = input.data?.PaymentId
    if (!paymentId || typeof paymentId !== 'string') {
      throw this.buildError(
        "No payment ID provided while getting payment status",
        new Error("No payment ID provided")
      )
    }

    try {
      const response = await this.client.getState({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId,
      })

      const status = response.Status as string

      const map: Record<string, PaymentSessionStatus> = {
        NEW: PaymentSessionStatus.PENDING,
        FORM_SHOWED: PaymentSessionStatus.PENDING,
        AUTHORIZING: PaymentSessionStatus.PENDING,
        "3DS_CHECKING": PaymentSessionStatus.PENDING,
        "3DS_CHECKED": PaymentSessionStatus.PENDING,
        AUTHORIZED: PaymentSessionStatus.AUTHORIZED,
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
        REJECTED: PaymentSessionStatus.CANCELED,
        AUTH_FAIL: PaymentSessionStatus.CANCELED,
      }
      const mapped = map[status] ?? PaymentSessionStatus.PENDING
      this.logger_.debug(
        `TkassaProvider.getPaymentStatus: T-Kassa="${status}" → Medusa="${mapped}"`
      )

      return { status: mapped, data: response as unknown as Record<string, unknown> }
    } catch (e: any) {
      throw this.buildError("An error occurred in getPaymentStatus", e)
    }
  }


  async getWebhookActionAndData(payload: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult> {
    this.logger_.debug(
      `TkassaProvider.getWebhookActionAndData payload:\n${JSON.stringify(payload, null, 2)}`
    )

    const isValid = await this.isWebhookEventValid(payload)
    if (!isValid)
      return {
        action: PaymentActions.NOT_SUPPORTED
      }

    const data = payload.data as any
    const raw: {
      PaymentId: number | string
      Amount?: number
      Status?: string
      [k: string]: any
    } = data

    try {
      await this.client.emit(raw as WebhookBody)
    } catch (e) {
      return { action: PaymentActions.NOT_SUPPORTED }
    }

    const session_id = raw.OrderId as string
    const amount = raw.Amount ?? 0
    const status = raw.Status


    switch (status) {
      case "CONFIRMED":
        return {
          action: PaymentActions.SUCCESSFUL,
          data: { session_id, amount }
        }
      case "AUTHORIZED":
        return {
          action: PaymentActions.AUTHORIZED,
          data: { session_id, amount }
        }
      case "REJECTED":
      case "CANCELED":
        return {
          action: PaymentActions.CANCELED,
          data: { session_id, amount }
        }
      default:
        return { action: PaymentActions.NOT_SUPPORTED }
    }
  }

  protected async isWebhookEventValid(payload: ProviderWebhookPayload["payload"]): Promise<boolean> {
    const data = payload.data
    const incomingToken = data.Token
    const requiredKeys = [
      "TerminalKey", "OrderId", "Success", "Status", "PaymentId",
      "ErrorCode", "Amount", "CardId", "Pan", "ExpDate"
    ]

    const params: Record<string, string> = {}

    for (const key of requiredKeys) {
      const value = data[key]
      params[key] = String(value)
    }
    params["Password"] = this.options_.password
    const sortedKeys = Object.keys(params).sort()
    let concat = ""
    for (const key of sortedKeys) {
      concat += params[key]
    }
    const hash = crypto.createHash("sha256").update(concat).digest("hex")
    const valid = incomingToken === hash
    return valid
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

export default TkassaBase
