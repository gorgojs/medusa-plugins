import {
  AbstractFulfillmentProviderService,
  isDefined
} from "@medusajs/framework/utils"
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
  CalculatorService,
  type TariffObject,
  type OrderReturnRequest,
} from "../../../apiship-client"
import { ApishipOptions } from "../types"
import {
  getCheapestTariff,
  mapToApishipOrderRequest,
  mapToApishipCalculatorRequest
} from "../utils"
import {
  getShippingOptionWorkflow,
  getStockLocationWorkflow,
  getCalculationWorkflow,
  saveCalculationWorkflow
} from "../../../workflows"
type InjectedDependencies = {
  logger: Logger
}

class ApishipBase extends AbstractFulfillmentProviderService {
  protected logger_: Logger
  protected options_: ApishipOptions
  protected serverUrl_: string
  // private accessToken_: string | null
  // private authInProgress_ = false

  constructor({ logger }: InjectedDependencies, options: ApishipOptions) {
    super()
    this.options_ = options
    this.logger_ = logger
    this.serverUrl_ = options.isTest
      ? "http://api.dev.apiship.ru/v1"
      : "https://api.apiship.ru/v1"
    OpenAPI.BASE = this.serverUrl_
    OpenAPI.TOKEN = this.options_.token
  }

  // TODO: Test all situations with token
  // private async ensureAuth(): Promise<void> {
  //   if (this.accessToken_ || this.authInProgress_) return
  //   this.authInProgress_ = true
  //   try {
  //     const res = await UsersService.loginUser({
  //       login: this.options_.email,
  //       password: this.options_.password,
  //     })
  //     const token = (res as any)?.token
  //     if (!token) throw new Error("ApiShip: не получили token в /users/login")
  //     this.accessToken_ = token
  //   } finally {
  //     this.authInProgress_ = false
  //   }
  // }

  async calculatePrice(
    optionData: CalculateShippingOptionPriceDTO["optionData"],
    data: CalculateShippingOptionPriceDTO["data"],
    context: CalculateShippingOptionPriceDTO["context"]
  ): Promise<CalculatedShippingOptionPrice> {
    this.logger_.debug(`Apiship.calculatePrice input: ${JSON.stringify({ optionData, data, context }, null, 2)}`)
    const calculatorRequest = mapToApishipCalculatorRequest(
      optionData,
      data,
      context
    )
    const shippingOptionId = optionData.id! as string
    const cartId = context.id! as string
    const key = `apiship:calc:${cartId}:${shippingOptionId}`
    const { result: calculation } = await getCalculationWorkflow().run({
      input: {
        key
      }
    })
    let response = {}
    if (calculation) {
      this.logger_.debug(`There is a record with a key: ${key} in cache`)
      response = calculation
    } else {
      response = await CalculatorService.getCalculator(
        calculatorRequest
      )
    }
    await saveCalculationWorkflow().run({
      input: {
        key,
        data: response,
      }
    })
    const cheapestTariff = getCheapestTariff(
      response,
      optionData.deliveryType! as number
    )
    const price = cheapestTariff.deliveryCost as number
    const result = {
      calculated_amount: price,
      is_calculated_price_tax_inclusive: true,
    }
    this.logger_.debug(`ApiShip calculatorResponse: ${JSON.stringify(response, null, 2)}`)
    this.logger_.debug(`Apiship.calculatePrice output: ${JSON.stringify(result, null, 2)}`)
    return result
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

    const locationId = fulfillment.location_id as string
    const { result: stockLocation } = await getStockLocationWorkflow()
      .run({
        input: {
          id: locationId
        }
      })
    const { result: shippingOption } = await getShippingOptionWorkflow()
      .run({
        input: {
          id: fulfillment.shipping_option_id!
        }
      })
    const providerKey = shippingOption.data?.providerKey as string
    const isCod = shippingOption.data?.isCod as boolean

    // TODO: pick tariffId based on order data (inculing shipping address)
    const tariffId = await this.pickTariffId("cdek")
    const apishipOrder = mapToApishipOrderRequest(
      data,
      items,
      order!,
      fulfillment,
      stockLocation,
      providerKey,
      "1595",
      tariffId,
      isCod
    )
    try {
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
      throw new Error(`Failed to retrieve tariffId from the first tariff (providerKey=${providerKey})`)
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
      const response = await OrdersService.cancelOrder(orderId)
      this.logger_.debug(`Apiship.cancelFulfillment output: ${JSON.stringify(response, null, 2)}`)
      return response
    } catch (e: any) {
      this.logger_.error(`Apiship.cancelFulfillment error: ${e?.message ?? e}`)
      throw new Error(`Apiship.cancelFulfillment failed: ${e?.message ?? e}`)
    }
  }

  private sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms))
  }

  /**
   * Execute API call with retries.
   */
  private async executeWithRetry<T>({
    apiCall,
    isReady,
    maxAttempts = 10,
    baseDelay = 500,
    label,
  }: {
    apiCall: () => Promise<T>
    isReady: (res: T) => boolean
    maxAttempts?: number
    baseDelay?: number
    label?: string
  }): Promise<T> {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await apiCall()
        if (isReady(response)) return response
        this.logger_.debug(`${label}: not ready (attempt ${attempt}/${maxAttempts})`)
      } catch (err: any) {
        this.logger_.debug(`${label}: error on attempt ${attempt}: ${err?.message ?? err}`)
      }
      if (attempt < maxAttempts) {
        const delay =
          baseDelay *
          Math.pow(2, attempt - 1) *
          (0.5 + Math.random() * 0.5)
        await this.sleep(delay)
      }
    }

    throw new Error(`${label}: data not ready after ${maxAttempts} attempts`)
  }

  /**
   * Retrieve an order information.
   */
  private async waitForOrderInfo(orderId: number): Promise<{ trackingNumber: string; trackingUrl: string }> {
    const response = await this.executeWithRetry({
      apiCall: () => OrdersService.getOrderInfo(orderId),
      isReady: (response: any) => Boolean(response?.order?.providerNumber),
      label: `orderInfo:${orderId}`,
    })
    const order = (response as any).order
    return {
      trackingNumber: String(order.providerNumber),
      trackingUrl: String(order.trackingUrl ?? ""),
    }
  }

  /**
   * Retrieve a labels for orders.
   */
  private async waitForLabelUrl(orderId: number): Promise<string> {
    const response = await this.executeWithRetry({
      apiCall: () => OrderDocsService.getLabels({ orderIds: [orderId], format: "pdf" }),
      isReady: (response: any) => Boolean(response?.url),
      label: `labels:${orderId}`,
    })
    return String((response as any).url)
  }

  /**
   * Retrieve a trcking information for orders.
   */
  async getShipmentDocuments(data: Record<string, unknown>): Promise<never[]> {
    this.logger_.debug(`Apiship.getShipmentDocuments input: ${JSON.stringify(data, null, 2)}`)

    const orderId = data?.orderId as number
    try {
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

    // TODO: map input fulfillment to make return order request
    const tariffId = await this.pickTariffId("cdek")
    const returnOrder: OrderReturnRequest = {
      order: {
        providerKey: "cdek",
        providerConnectId: "1595",
        tariffId: tariffId,
        pickupType: 1,
        deliveryType: 1,
        clientNumber: `medusa-${Date.now()}`,
      },
      "cost": {
        "assessedCost": 50,
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
      const response = await OrdersService.addReturnOrder(returnOrder)
      this.logger_.debug(`Apiship.createReturnFulfillment response: ${JSON.stringify(response, null, 2)}`)
      const orderId = response.orderId
      const labels = await this.getShipmentDocuments({
        orderId
      })
      const result: CreateFulfillmentResult = {
        data: {
          orderId: response.orderId,
          order: returnOrder
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
      orderIds: [orderId],
      format: "pdf"
    }
    try {
      const response = await OrderDocsService.getWaybills(documentsRequest)
      const result = response?.waybillItems?.[0].file
      this.logger_.debug(`Apiship.getFulfillmentDocuments output: ${JSON.stringify(result, null, 2)}`)
      return result as unknown as never[]
    } catch (e: any) {
      this.logger_.error(`Apiship.getFulfillmentDocuments error: ${e?.message ?? e}`)
      throw new Error(`Apiship.getFulfillmentDocuments failed: ${e?.message ?? e}`)
    }
  }

  async getReturnDocuments(data: any): Promise<never[]> {
    this.logger_.debug(`Apiship.getReturnDocuments input: ${JSON.stringify(data, null, 2)}`)

    return [] as never[]
  }
  async retrieveDocuments(
    fulfillmentData: any,
    documentType: any
  ): Promise<void> {
    this.logger_.debug(`Apiship.retrieveDocuments input: ${JSON.stringify({ fulfillmentData, documentType }, null, 2)}`)

    return
  }
  async validateFulfillmentData(
    optionData: any,
    data: any,
    context: any
  ): Promise<any> {
    this.logger_.debug(`Apiship.validateFulfillmentData input: ${JSON.stringify({ optionData, data, context }, null, 2)}`)

    return {}
  }
  async validateOption(data: any): Promise<boolean> {
    this.logger_.debug(`Apiship.validateOption input: ${JSON.stringify(data, null, 2)}`)

    return true
  }
}

export default ApishipBase