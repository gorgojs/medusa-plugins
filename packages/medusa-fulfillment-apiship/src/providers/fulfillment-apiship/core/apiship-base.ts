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
  Configuration,
  OrdersApi,
  OrderDocsApi,
  ListsApi,
  CalculatorApi,
  type TariffObject,
} from "../../../lib/apiship-client"
import { ApishipOptions } from "../types"
import {
  getCheapestTariff,
  mapToApishipOrderRequest,
  mapToApishipCalculatorRequest,
  registerApishipClient
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
import axios, { AxiosError } from "axios"

class ApishipBase extends AbstractFulfillmentProviderService {
  protected logger_: Logger
  protected options_: ApishipOptions
  protected serverUrl_: string

  private ordersApi_: OrdersApi
  private orderDocsApi_: OrderDocsApi
  private listsApi_: ListsApi
  private calculatorApi_: CalculatorApi

  constructor({ logger }: InjectedDependencies, options: ApishipOptions) {
    super()
    this.options_ = options // TODO: validate options
    this.logger_ = logger

    this.serverUrl_ = options.isTest
      ? "http://api.dev.apiship.ru/v1"
      : "https://api.apiship.ru/v1"

    const config = new Configuration({
      basePath: this.serverUrl_,
      apiKey: this.options_.token,
    })

    this.ordersApi_ = new OrdersApi(config)
    this.orderDocsApi_ = new OrderDocsApi(config)
    this.listsApi_ = new ListsApi(config)
    this.calculatorApi_ = new CalculatorApi(config)

    registerApishipClient("apiship_apiship", {
      ordersApi: this.ordersApi_,
      orderDocsApi: this.orderDocsApi_,
      listsApi: this.listsApi_,
      calculatorApi: this.calculatorApi_,
    })
  }

  async calculatePrice(
    optionData: CalculateShippingOptionPriceDTO["optionData"],
    data: CalculateShippingOptionPriceDTO["data"],
    context: CalculateShippingOptionPriceDTO["context"]
  ): Promise<CalculatedShippingOptionPrice> {
    this.logger_.debug(`Apiship.calculatePrice input: ${JSON.stringify({ optionData, data, context }, null, 2)}`)
    const calculatorRequest = mapToApishipCalculatorRequest(
      optionData,
      context,
      this.options_
    )

    const shippingOptionId = optionData.id as string
    const cartId = context.id as string
    const key = `apiship:calc:${cartId}:${shippingOptionId}`

    const { result: cache } = await getCalculationWorkflow().run({
      input: { key },
    })

    let tariffs: any
    if (cache) {
      this.logger_.debug(`There is a record with a key: ${key} in cache`)
      tariffs = cache
    } else {
      try {
        const { data: response } = await this.calculatorApi_.getCalculator({ calculatorRequest })
        tariffs = response

        await saveCalculationWorkflow().run({
          input: { key, data: tariffs },
        })
      } catch (error) {
        throw this.buildError("An error occurred in calculatePrice", error as any)
      }
    }

    const apishipData = (data as any)?.apishipData
    const chosenTariff = apishipData?.tariff
    let price: number | null = null

    if (chosenTariff && typeof chosenTariff.deliveryCost === "number") {
      price = chosenTariff.deliveryCost
    }
    if (price === null) {
      const cheapestTariff = getCheapestTariff(tariffs, optionData.deliveryType as number)
      price = cheapestTariff.deliveryCost as number
    }
    const result = {
      calculated_amount: price,
      is_calculated_price_tax_inclusive: true,
      data: tariffs,
    }

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
    const deliveryType = shippingOption.data?.deliveryType as number
    const pickupType = shippingOption.data?.pickupType as number
    const apishipData = data.apishipData as any
    const tariffId = apishipData?.tariff.tariffId
    const providerKey = apishipData?.tariff.providerKey
    const pointOutId = apishipData?.point?.id
      ? Number(apishipData.point.id)
      : undefined
    const apishipOrder = mapToApishipOrderRequest(
      this.options_,
      order!,
      stockLocation,
      providerKey,
      tariffId,
      deliveryType,
      pickupType,
      pointOutId
    )
    try {
      const response = await this.ordersApi_.addOrder({
        orderRequest: apishipOrder,
      })
      const orderId = response.data.orderId
      const labels = await this.getShipmentDocuments({ orderId })
      const result: CreateFulfillmentResult = {
        data: {
          orderId,
          order: apishipOrder,
        },
        labels,
      }
      this.logger_.debug(
        `Apiship.createFulfillment output: ${JSON.stringify(result, null, 2)}`
      )
      return result
    } catch (e: any) {
      throw this.buildError("An error occurred in createFulfillment", e)
    }
  }

  async pickTariffId(providerKey: string): Promise<number> {
    this.logger_.debug(`Apiship.pickTariffId input: ${JSON.stringify(providerKey)}`)
    const fields = "id,tariffId,providerKey,name"
    const filter = `providerKey=${providerKey}`
    let rows: TariffObject[] | undefined
    try {
      this.logger_.debug(`Apiship.getListTariffs try filter: ${filter}`)
      const { data: response } = await this.listsApi_.getListTariffs({
        limit: 100,
        offset: 0,
        filter,
        fields
      })
      const r = response.rows || []
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
      const response = await this.ordersApi_.cancelOrder({ orderId })
      this.logger_.debug(`Apiship.cancelFulfillment output: ${JSON.stringify(response, null, 2)}`)
      return response
    } catch (e: any) {
      throw this.buildError("An error occurred in cancelFulfillment", e)
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
    this.logger_.debug(`Apiship.waitForOrderInfo input: ${orderId}`)

    const response = await this.executeWithRetry({
      apiCall: () => this.ordersApi_.getOrderInfo({ orderId }),
      isReady: (response: any) => Boolean(response?.data?.order?.providerNumber),
      label: `orderInfo:${orderId}`,
    })
    const order = (response as any).data.order
    const result = {
      trackingNumber: String(order.providerNumber),
      trackingUrl: String(order.trackingUrl ?? ""),
    }
    this.logger_.debug(`Apiship.waitForOrderInfo output: ${JSON.stringify(result, null, 2)}`)

    return result
  }

  /**
   * Retrieve a labels for orders.
   */
  private async waitForLabelUrl(orderId: number): Promise<string> {
    this.logger_.debug(`Apiship.waitForLabelUrl input: ${orderId}`)

    const response = await this.executeWithRetry({
      apiCall: () => this.orderDocsApi_.getLabels({
        labelsRequest: {
          orderIds: [orderId],
          format: "pdf"
        }
      }),
      isReady: (response: any) => Boolean(response?.data?.url),
      label: `labels:${orderId}`,
    })
    const result = String((response as any).data.url)
    this.logger_.debug(`Apiship.waitForLabelUrl output: ${result}`)

    return result
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

    return { data: {}, labels: [] } as CreateFulfillmentResult
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
      const { data: response } = await this.orderDocsApi_.getWaybills({ documentsRequest })
      const result = response?.waybillItems?.[0].file
      this.logger_.debug(`Apiship.getFulfillmentDocuments output: ${JSON.stringify(result, null, 2)}`)
      return result as unknown as never[]
    } catch (e: any) {
      throw this.buildError("An error occurred in getFulfillmentDocuments", e)
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
    return data
  }

  async validateOption(data: any): Promise<boolean> {
    this.logger_.debug(`Apiship.validateOption input: ${JSON.stringify(data, null, 2)}`)

    if (!isDefined(data.id)) {
      this.logger_.error("Required option `id` is missing in shipping option data")
      return false
    }
    if (!isDefined(data.deliveryType)) {
      this.logger_.error("Required option `deliveryType` is missing in shipping option data")
      return false
    } else if (![1, 2].includes(data.deliveryType)) {
      this.logger_.error(`Invalid option \`deliveryType\` provided in shipping option data. Valid values are: ${[1, 2].join(", ")}`)
      return false
    }
    if (!isDefined(data.pickupType)) {
      this.logger_.error("Required option `pickupType` is missing in shipping option data")
      return false
    } else if (![1, 2].includes(data.pickupType)) {
      this.logger_.error(`Invalid option \`pickupType\` provided in shipping option data. Valid values are: ${[1, 2].join(", ")}`)
      return false
    }
    return true
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

export default ApishipBase
