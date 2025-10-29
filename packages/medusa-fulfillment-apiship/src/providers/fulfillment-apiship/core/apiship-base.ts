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
  ListsService,
  UsersService,
  type TariffObject,
  type OrderRequest,
  type OrderResponse,
  type OrderInfoResponse,
  type LabelsRequest,
  type LoginResponse,

} from "../../../apiship-client"
import { ApishipOptions } from "../types"

type InjectedDependencies = {
  logger: Logger
}


class ApishipBase extends AbstractFulfillmentProviderService {
  protected logger_: Logger
  protected options_: ApishipOptions
  private accessToken_: string | null = "dfd63ff7f977a1b88d3fc8f176b818dc"
  protected serverUrl_: string
  private authInProgress_ = false

  constructor({ logger }: InjectedDependencies, options: ApishipOptions) {
    super()
    this.options_ = options
    this.logger_ = logger
    this.serverUrl_ = options.isTest
      ? "http://api.dev.apiship.ru/v1"
      : "https://api.apiship.ru/v1"
    OpenAPI.BASE = this.serverUrl_
    OpenAPI.TOKEN = "dfd63ff7f977a1b88d3fc8f176b818dc"
  }

  private async ensureAuth(): Promise<void> {
    if (this.accessToken_ || this.authInProgress_) return
    this.authInProgress_ = true
    try {
      const res = await UsersService.loginUser({
        login: this.options_.email,
        password: this.options_.password,
      })
      const token = (res as any)?.token
      if (!token) throw new Error("ApiShip: не получили token в /users/login")
      this.accessToken_ = token
    } finally {
      this.authInProgress_ = false
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
    //const apishipOrder = data?.apishipOrder as OrderRequest
    const tariffId = await this.pickTariffId("cdek")
    const apishipOrder: OrderRequest = {
      order: {
        providerKey: "cdek",
        providerConnectId: "1595",
        tariffId: tariffId,
        pickupType: 1,
        deliveryType: 1,
        clientNumber: `medusa-${Date.now()}`,
        weight: 500
      },
      "cost": {
        "assessedCost": 50,
        "deliveryCost": 200,
        "deliveryCostVat": -1,
        "codCost": 230,
        "isDeliveryPayedByRecipient": false,
        "paymentMethod": 1,
        "deliveryCostThresholds": [
          {
            "deliveryCost": 100,
            "threshold": 200
          }
        ]
      },
      sender: {
        countryCode: "RU",
        city: "Москва",
        addressString: "г Москва, ул Машкова, д 21",
        contactName: "Отправитель Тест",
        phone: "79990000000",
      },
      recipient: {
        countryCode: "RU",
        city: "Москва",
        addressString: "г Москва, ул Машкова, д 21",
        contactName: "Получатель Тест",
        phone: "79990000001",
      },
      "places": [
        {
          "height": 45,
          "length": 30,
          "width": 20,
          "weight": 500,
          "placeNumber": "123421931239",
          "barcode": "800028197737",
          "items": [
            {
              "height": 45,
              "length": 30,
              "width": 20,
              "weight": 500,
              "articul": "1189.0",
              "markCode": "010290000046994521AK-rO?H!hC2(M\\u001D91003A\\u001D92cYTu3sTj82KJR3+6hVtQyAfa5Zf6Q2alfJEnwe2RIv4GAWVy2GUptk7P1NYxRsIgsTJi+Wgg+K3dncPELDJ9Ag==",
              "description": "Товар 1",
              "quantity": 1,
              "quantityDelivered": 2,
              "assessedCost": 50,
              "cost": 30,
              "costVat": -1,
              "barcode": "1234567890123",
              "companyName": "ООО \"Тест\"",
              "companyInn": "1234567890",
              "companyPhone": "79887776655",
              "tnved": "6810190009",
              "url": "https://mymarket.example.com/item/product-1/"
            }
          ]
        }
      ],
    }
    try {
      await this.ensureAuth()
      const response = await OrdersService.addOrder(
        undefined,
        apishipOrder
      )
      const orderId = response.orderId
      const labels = await this.getShipmentDocuments({
        orderId
      })
      const result: CreateFulfillmentResult = {
        data: {
          orderId: response.orderId,
          order: apishipOrder
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

  async pickTariffId(providerKey: string): Promise<number> {
    this.logger_.debug(`Apiship.pickTariffId input: ${JSON.stringify(providerKey)}`)

    const fields = "id,tariffId,providerKey,name"
    const filter = `providerKey=${providerKey}`
    let rows: TariffObject[] | undefined
    try {
      this.logger_.debug(`Apiship.getListTariffs try filter: ${filter}`)
      const { rows: r = [] } = await ListsService.getListTariffs(100, 0, filter, fields)
      if (r.length) {
        rows = r as TariffObject[]
      }
    } catch (e: any) {
      this.logger_.debug(`Apiship.getListTariffs failed with "${filter}": ${e?.message ?? e}`)
    }

    if (!rows?.length) {
      throw new Error(`No current tariffs found for ProviderKey=${providerKey}`)
    }

    const tarrif = rows[0]
    const id = tarrif.id
    if (!id) {
      throw new Error(`Не удалось извлечь tariffId у первого тарифа (providerKey=${providerKey})`)
    }

    this.logger_.debug(`Apiship.pickTariffId output: ${id} (${tarrif.name})`)
    return Number(id)
  }

  /**
   * Cancel an existing order.
   */
  async cancelFulfillment(data: Record<string, unknown>): Promise<any> {
    this.logger_.debug(`Apiship.cancelFulfillment input: ${JSON.stringify(data, null, 2)}`)

    const orderId = data?.orderId as number
    try {
      await this.ensureAuth()
      const response = await OrdersService.cancelOrder(orderId)
      this.logger_.debug(`Apiship.cancelFulfillment output: ${JSON.stringify(response, null, 2)}`)
      return { data: response }
    } catch (e: any) {
      this.logger_.error(`[Apiship.cancelFulfillment error: ${e?.message ?? e}`)
      throw new Error(`Apiship.cancelFulfillment failed: ${e?.message ?? e}`)
    }
  }

  private sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms))
  }

  /**
   * Retrieve an order information.
   */
  private async waitForOrderInfo(
    orderId: number,
    tries = 8,
    baseDelayMs = 400
  ): Promise<{ trackingNumber: string; trackingUrl: string }> {
    for (let i = 0; i < tries; i++) {
      const orderInfo = await OrdersService.getOrderInfo(orderId)
      const order = orderInfo?.order as any
      const trackingNumber = order?.providerNumber || ""
      const trackingUrl = order.trackingUrl || ""
      if (trackingNumber) {
        return {
          trackingNumber: String(trackingNumber),
          trackingUrl: String(trackingUrl || ""),
        }
      }
      const delay = baseDelayMs * Math.pow(1.5, i) + Math.floor(Math.random() * 120)
      await this.sleep(delay)
    }

    return { trackingNumber: String(orderId), trackingUrl: "" }
  }

  /**
   * Retrieve a labels for orders.
   */
  private async waitForLabelUrl(
    orderId: number,
    tries = 6,
    baseDelayMs = 600
  ): Promise<string> {
    for (let i = 0; i < tries; i++) {
      const response = await OrderDocsService.getLabels({ orderIds: [orderId], format: "pdf" })
      const url = response?.url
      if (url) {
        return String(url)
      }
      const failed = response?.failedOrders
      if (Array.isArray(failed) && failed.length) {
        this.logger_.debug(`Labels not ready yet for ${orderId}: ${failed[0]?.message || "unknown"}`)
      }
      const delay = baseDelayMs * Math.pow(1.6, i) + Math.floor(Math.random() * 150)
      await this.sleep(delay)
    }
    return ""
  }

  /**
   * Retrieve a trcking information for orders.
   */
  async getShipmentDocuments(data: Record<string, unknown>): Promise<never[]> {
    this.logger_.debug(`Apiship.getShipmentDocuments input: ${JSON.stringify(data, null, 2)}`)

    const orderId = data?.orderId as number
    try {
      await this.ensureAuth()
      const { trackingNumber, trackingUrl } = await this.waitForOrderInfo(orderId)
      const labelUrl = await this.waitForLabelUrl(orderId)
      const labels = [
        {
          tracking_number: String(trackingNumber),
          tracking_url: trackingUrl || "",
          label_url: labelUrl || "",
        },
      ]
      this.logger_.debug(`Apiship.getShipmentDocuments output: ${JSON.stringify(labels, null, 2)}`)
      return labels as unknown as never[]
    } catch (e: any) {
      this.logger_.error(`[Apiship.getShipmentDocuments error: ${e?.message ?? e}`)
      throw new Error(`Apiship.getShipmentDocuments failed: ${e?.message ?? e}`)
    }
  }

  /**
   * Create a return order.
   */
  async createReturnFulfillment(fulfillment: Record<string, unknown>): Promise<CreateFulfillmentResult> {
    this.logger_.debug(`Apiship.createReturnFulfillment input: ${JSON.stringify(fulfillment, null, 2)}`)
    // TODO: understand the input fulfillment data 
    const fulfillmentData = fulfillment as any
    const labels = fulfillment.data as any
    try {
      const labels = await this.getShipmentDocuments(fulfillmentData.orderId)
      await this.ensureAuth()
      const response = await OrdersService.addReturnOrder(fulfillmentData.externalData)
      this.logger_.debug(`Apiship.createReturnFulfillment response: ${JSON.stringify(response, null, 2)}`)
      const result = {
        data: {
          labels
        },
        labels
      }
      this.logger_.debug(`Apiship.createReturnFulfillment output: ${JSON.stringify(result, null, 2)}`)
      return result
    } catch (e: any) {
      this.logger_.error(`Apiship.createReturnFulfillment error: ${e?.message ?? e}`)
      throw new Error(`Apiship.createReturnFulfillment failed: ${e?.message ?? e}`)
    }
  }

  /**
   * Retrieve waybills for orders.
   */
  async getFulfillmentDocuments(data: any): Promise<never[]> {
    this.logger_.debug(`Apiship.getFulfillmentDocuments input: ${JSON.stringify(data, null, 2)}`)

    const orderId = data.orderId as number
    const documentsRequest = {
      orderIds: [66175],
      format: "pdf"
    }
    try {
      await this.ensureAuth()
      const response = await OrderDocsService.getWaybills(documentsRequest)
      const result = response?.waybillItems?.[0].file
      this.logger_.debug(`Apiship.getFulfillmentDocuments output: ${JSON.stringify(result, null, 2)}`)
      return result as unknown as never[]
    } catch (e: any) {
      this.logger_.error(`Apiship.getFulfillmentDocuments error: ${e?.message ?? e}`)
      throw new Error(`Apiship.getFulfillmentDocuments failed: ${e?.message ?? e}`)
    }
  }

  async getReturnDocuments(data: any): Promise<never[]> { return [] as never[] }
  async retrieveDocuments(
    fulfillmentData: any,
    documentType: any
  ): Promise<void> { return }
  async validateFulfillmentData(_o: any, _d: any, _c: any) { return {} }
  async validateOption(_data: any): Promise<boolean> { return true }
  async getFulfillmentOptions(): Promise<any[]> { return [] }
}

export default ApishipBase