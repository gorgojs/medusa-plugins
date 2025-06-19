import {
  AbstractPaymentProvider,
  PaymentSessionStatus
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

import { TKassa, WebhookBody } from "t-kassa-api"
import { TKassaProviderOptions } from "../types"
import axios, { AxiosError } from "axios"

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

    const { amount, context = {} } = input
    const amountValue = Number(amount)
    const idKey = context.idempotency_key

    try {
      const response = await this.client.init({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        Amount: amountValue,
        OrderId: idKey || ""
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

    const paymentId = input.data?.id as string

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

    const paymentId = data?.id as string

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

    const paymentId = input.data?.id as string

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

    const paymentId = input.data?.id as string

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

    const id = input.data?.id
    if (!id || typeof id !== 'string') {
      throw this.buildError(
        "No payment ID provided while getting payment status",
        new Error("No payment ID provided")
      )
    }

    try {
      const response = await this.client.getState({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: id,
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
    const raw = payload.data.body as WebhookBody
    await this.client.emit(raw)

    if (!("PaymentId" in raw)) {
      return { action: "not_supported" }
    }

    const session_id = String((raw as any).PaymentId)
    const amount = (raw as any).Amount || 0
    const status = (raw as any).Status

    if (status === "CONFIRMED") {
      return {
        action: "captured",
        data: { session_id, amount }
      }
    }
    if (status === "AUTHORIZED") {
      return {
        action: "authorized",
        data: { session_id, amount }
      }
    }

    return { action: "not_supported" }
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
