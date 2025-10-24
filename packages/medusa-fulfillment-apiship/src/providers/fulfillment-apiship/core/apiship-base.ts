import { AbstractFulfillmentProviderService, isDefined } from "@medusajs/framework/utils"
import {
  Logger,
  CalculateShippingOptionPriceDTO,
  CalculatedShippingOptionPrice,
  CreateShippingOptionDTO,
  CreateFulfillmentResult,
  FulfillmentDTO,
  FulfillmentItemDTO,
  FulfillmentOrderDTO,
} from "@medusajs/framework/types"

import {
  OpenAPI,
  OrdersService,
  OrderDocsService,
  UsersService,
  type OrderRequest,
  type OrderResponse,
  type LabelsRequest,
  type LoginResponse
} from "../../../apiship-client"
import { ApishipOptions } from "../types"

class ApishipBase extends AbstractFulfillmentProviderService {
  protected logger_: Logger
  protected options_: ApishipOptions
  private accessToken_: string | null = null

  constructor(logger: Logger, options: ApishipOptions) {
    super()
    this.options_ = options
    this.logger_ = logger

    OpenAPI.BASE = options.apiBase ?? "https://api.apiship.ru/v1"
    OpenAPI.TOKEN = async () => {
      if (!this.accessToken_) {
        const res: LoginResponse = await UsersService.loginUser(
          { login: this.options_.email, password: this.options_.password }
        )
        this.accessToken_ = res.token!
        if (!this.accessToken_) throw new Error("ApiShip: не удалось получить токен")
      }
      return this.accessToken_
    }
  }

  async calculatePrice(
    optionData: CalculateShippingOptionPriceDTO["optionData"],
    data: CalculateShippingOptionPriceDTO["data"],
    context: CalculateShippingOptionPriceDTO["context"]
  ): Promise<CalculatedShippingOptionPrice> {
    const price = 100
    return {
      calculated_amount: price,
      is_calculated_price_tax_inclusive: true,
    }
  }

  async canCalculate(data: CreateShippingOptionDTO): Promise<boolean> {
    return true
  }

  /**
   * Create a new order.
   */
  async createFulfillment(
    data: Record<string, unknown>,
    items: Partial<Omit<FulfillmentItemDTO, "fulfillment">>[],
    order: Partial<FulfillmentOrderDTO> | undefined,
    fulfillment: Partial<Omit<FulfillmentDTO, "provider_id" | "data" | "items">>
  ): Promise<CreateFulfillmentResult> {
    this.logger_.debug(`Apiship.createFulfillment input: ${JSON.stringify({ data, items, order, fulfillment }, null, 2)}`)

    // TODO: map Medusa order to Apiship order
    const apishipOrder = data?.apishipOrder as OrderRequest
    try {
      const response = await OrdersService.addOrder(
        undefined,
        apishipOrder
      )
      const orderId = response.orderId
      const labels = await this.getFulfillmentDocuments(orderId)
      const result: CreateFulfillmentResult = {
        data: {
          orderId: response.orderId,
        },
        labels
      }
      this.logger_.debug(`Apiship.createFulfillment output: ${JSON.stringify(result, null, 2)}`)
      return result
    } catch (e: any) {
      this.logger_.error(`Apiship.createFulfillment error: ${e?.message ?? e}`)
      throw new Error(`Apiship.createFulfillment failed: ${e?.message ?? e}`)
    }
  }

  /**
   * Cancel an existing order.
   */
  async cancelFulfillment(data: Record<string, unknown>): Promise<any> {
    this.logger_.debug(`Apiship.cancelFulfillment input: ${JSON.stringify(data, null, 2)}`)

    const orderId = data?.orderId as number
    try {
      const response = await OrdersService.cancelOrder(orderId)
      this.logger_.debug(`Apiship.cancelFulfillment output: ${JSON.stringify(response, null, 2)}`)
      return { data: response }
    } catch (e: any) {
      this.logger_.error(`[Apiship.cancelFulfillment error: ${e?.message ?? e}`)
      throw new Error(`Apiship.cancelFulfillment failed: ${e?.message ?? e}`)
    }
  }

  /**
   * Retrieve a existing order.
   */
  async getOrderTracking(orderId: number): Promise<{
    tracking_number: string
    tracking_url: string
  }> {
    try {
      const response = await OrdersService.getOrderInfo(orderId)
      const order = (response as any)?.order
      const result = {
        tracking_number: order.providerNumber,
        tracking_url: order.trackingUrl,
      }
      this.logger_.debug(`Apiship.getOrderTracking output: ${JSON.stringify(result, null, 2)}`)
      return result
    } catch (e: any) {
      this.logger_.error(`Apiship.getOrderTracking error: ${e?.message ?? e}`)
      throw new Error(`Apiship.getOrderTracking failed: ${e?.message ?? e}`)
    }
  }

  /**
   * Retrieve labels for orders.
   */
  async getShipmentDocuments(data: Record<string, unknown>): Promise<never[]> {
    this.logger_.debug(`Apiship.getShipmentDocuments input: ${JSON.stringify(data, null, 2)}`)

    const orderId = data?.orderId as number
    const orderTracking = this.getOrderTracking(orderId)
    const trackingNumber = (await orderTracking).tracking_number
    const trackingUrl = (await orderTracking).tracking_url
    const payload: LabelsRequest = { 
      orderIds: [Number(orderId)],
      format: "pdf"
    }
    try {
      const response = await OrderDocsService.getLabels(payload)
      const labelUrl = (response as any)?.url
      const labels = [
        {
          tracking_number: trackingNumber,
          tracking_url: trackingUrl,
          label_url: labelUrl,
        },
      ]
      return labels as unknown as never[]
    } catch (e: any) {
      this.logger_.error(`[Apiship.getShipmentDocuments error: ${e?.message ?? e}`)
      throw new Error(`Apiship.getShipmentDocuments failed: ${e?.message ?? e}`)
    }
  }

  async createReturnFulfillment(fulfillment: Record<string, unknown>) { return {} as CreateFulfillmentResult }
  async getFulfillmentDocuments(_data: any): Promise<never[]> { return [] as never[] }
  async getReturnDocuments(_data: any): Promise<never[]> { return [] as never[] }
  async retrieveDocuments(_f: any, _t: any): Promise<void> { return }
  async validateFulfillmentData(_o: any, _d: any, _c: any) { return {} }
  async validateOption(_data: any): Promise<boolean> { return true }
  async getFulfillmentOptions(): Promise<any[]> { return [] }
}

export default ApishipBase