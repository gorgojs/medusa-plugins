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
import { TKassa } from "t-kassa-api"
import {
  Payment,
  PaymentStatuses,
  PaymentStatusesMap,
  TKassaProviderOptions,
  TkassaEvent
} from "../types"
import {
  getSmallestUnit,
  getAmountFromSmallestUnit
} from "../utils/get-smallest-unit"

abstract class TkassaBase extends AbstractPaymentProvider<TKassaProviderOptions> {
  static identifier = "tkassa"
  protected serverUrl_ = "https://securepay.tinkoff.ru"
  protected options_: TKassaProviderOptions
  protected client_: TKassa
  protected logger_: Logger

  constructor(container: { logger: Logger }, options: TKassaProviderOptions) {
    super(container, options)
    this.options_ = options
    this.logger_ = container.logger
    this.client_ = new TKassa(options.terminalKey, options.password, { server: this.serverUrl_ })
  }

  private normalizePaymentParameters(
    extra?: Record<string, unknown>
  ): Partial<Payment> {
    const res = {} as Partial<Payment>

    if (extra?.SuccessURL)
      res.SuccessURL = extra?.SuccessURL as Payment["SuccessURL"]

    if (extra?.FailURL)
      res.FailURL = extra?.FailURL as Payment["FailURL"]

    if (extra?.PayType) {
      res.PayType = extra.PayType as Payment["PayType"]
    } else {
      if (this.options_.capture !== undefined) {
        res.PayType = this.options_.capture ? "O" : "T"
      } else {
        res.PayType = "O"
      }
    }

    return res
  }

  /**
   * Initiate a new payment.
   */
  async initiatePayment({
    currency_code,
    amount,
    data,
    context,
  }: InitiatePaymentInput): Promise<InitiatePaymentOutput> {
    this.logger_.debug("TkassaBase.initiatePayment:\n" + JSON.stringify({ currency_code, amount, data, context }, null, 2))

    const additionalParameters = this.normalizePaymentParameters(data)
    try {
      const response = await this.client_.init({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        Amount: getSmallestUnit(amount, currency_code),
        OrderId: data?.session_id as string,
        ...additionalParameters
      })
      const paymentId = String(response.PaymentId)

      return {
        id: paymentId,
        data: {
          ...response,
          currency_code: currency_code
        }
      }
    } catch (e) {
      throw this.buildError("An error occurred in initiatePayment", e)
    }
  }

  /**
   * Capture an existing payment.
   */
  async capturePayment(input: CapturePaymentInput): Promise<CapturePaymentOutput> {
    this.logger_.debug(`TkassaBase.capturePayment:\n${JSON.stringify(input, null, 2)}`)

    const paymentId = input.data?.PaymentId as string

    try {
      const response = await this.client_.confirm({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId
      })
      return {
        data: {
          ...response,
          currency_code: input.data?.currency_code
        }
      }
    } catch (e) {
      throw this.buildError("An error occurred in capturePaymentt", e)
    }
  }

  /**
   * Authorize a payment by retrieving its status.
   */
  async authorizePayment(input: AuthorizePaymentInput): Promise<AuthorizePaymentOutput> {
    this.logger_.debug(`TkassaBase.authorizePayment:\n${JSON.stringify(input, null, 2)}`)

    const statusResponse = await this.getPaymentStatus(input)
    return statusResponse
  }

  /**
   * Delete a payment.
   * Payment delete is not supported by T-Kassa.
   */
  async deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput> {
    this.logger_.debug(`TkassaBase.deletePayment:\n${JSON.stringify(input, null, 2)}`)

    return input
  }

  /**
   * Update a payment.
   * Payment update is not supported by T-Kassa.
   */
  async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
    this.logger_.debug(`TkassaBase.updatePayment:\n${JSON.stringify(input, null, 2)}`)

    return input
  }

  /**
   * Refund a payment.
   */
  async refundPayment({
    amount,
    data,
  }: RefundPaymentInput): Promise<RefundPaymentOutput> {
    this.logger_.debug(`TkassaBase.refundPayment:\n${JSON.stringify({ amount, data }, null, 2)}`)

    const paymentId = data?.PaymentId as string
    const currency_code = data?.currency_code as string
    const amountValue = typeof amount === 'object' && 'value' in amount
      ? amount.value
      : typeof amount === 'string' || typeof amount === 'number'
        ? amount
        : ""

    try {
      const response = await this.client_.cancel({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId,
        ...(amountValue
          ? { Amount: getSmallestUnit(Number(amountValue), currency_code) }
          : {})
      })
      return {
        data: {
          ...response,
          currency_code
        }
      }
    } catch (e) {
      throw this.buildError("An error occurred in refundPayment", e)
    }
  }

  /**
   * Cancel an existing payment.
   */
  async cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput> {
    this.logger_.debug(`TkassaBase.cancelPayment:\n${JSON.stringify(input, null, 2)}`)

    const paymentId = input.data?.PaymentId as string

    try {
      const response = await this.client_.cancel({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId
      })
      return {
        data: {
          ...response,
          currency_code: input.data?.currency_code
        }
      }
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
      const response = await this.client_.getState({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId
      })
      return {
        data: {
          ...response,
          currency_code: input.data?.currency_code
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
      `TkassaProvider.getPaymentStatus:\n${JSON.stringify(input, null, 2)}`
    )

    const paymentId = input.data?.PaymentId
    if (!paymentId || typeof paymentId !== 'string') {
      throw this.buildError(
        "No payment ID provided while getting payment status",
        new Error("No payment ID provided")
      )
    }

    try {
      const response = await this.client_.getState({
        TerminalKey: this.options_.terminalKey,
        Password: this.options_.password,
        PaymentId: paymentId,
      })

      const status = response.Status as keyof typeof PaymentStatuses
      return {
        status: PaymentStatusesMap[status] ?? PaymentSessionStatus.ERROR,
        data: {
          ...response as unknown as Record<string, unknown>,
          currency_code: input.data?.currency_code
        }
      }
    } catch (e: any) {
      throw this.buildError("An error occurred in getPaymentStatus", e)
    }
  }

  /**
   * Handle webhook events from T-Kassa.
   */
  async getWebhookActionAndData(webhookData: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult> {
    this.logger_.debug(
      `TkassaProvider.getWebhookActionAndData:\n${JSON.stringify(webhookData, null, 2)}`
    )

    const isValid = await this.isWebhookEventValid(webhookData)
    if (!isValid)
      return {
        action: PaymentActions.NOT_SUPPORTED
      }

    const data = webhookData.data as unknown as TkassaEvent

    return {
      action: PaymentStatusesMap[PaymentStatuses[data.Status]] ?? PaymentSessionStatus.ERROR,
      data: {
        session_id: data.OrderId,
        amount: getAmountFromSmallestUnit(data.Amount, "rub") // TODO: use currency_code somehow
      }
    }
  }

  /**
   * Validate the webhook event from T-Kassa.
   * It checks if the event has the required fields and verifies the token.
   */
  protected async isWebhookEventValid(payload: ProviderWebhookPayload["payload"]): Promise<boolean> {
    const data = payload.data as unknown as TkassaEvent

    if (!data || !data.Status || !data.OrderId || !data.Amount) {
      return false
    }

    const incomingToken = data.Token
    if (!incomingToken || typeof incomingToken !== 'string') {
      return false
    }

    const requiredKeys = [
      "TerminalKey",
      "OrderId",
      "Success",
      "Status",
      "PaymentId",
      "ErrorCode",
      "Amount",
      "CardId",
      "Pan",
      "ExpDate"
    ]
    const params: Record<string, string> = {}
    for (const key of requiredKeys) {
      const value = data[key]
      params[key] = String(value)
    }
    params["Password"] = this.options_.password
    const values = Object.keys(params).sort().map(key => params[key]).join("")
    const hash = crypto.createHash("sha256").update(values).digest("hex")

    return incomingToken === hash
  }

  /**
   * Helper to build errors with additional context.
   */
  protected buildError(message: string, error: Error): Error {
    const errorDetails =
      "raw" in error ? (error.raw as any) : error

    return new Error(
      `${message}: ${error.message}. ${"detail" in errorDetails ? errorDetails.detail : ""
        }`.trim()
    )
  }
}

export default TkassaBase
