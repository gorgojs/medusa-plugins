import {
  FulfillmentDTO,
  FulfillmentItemDTO,
  FulfillmentOrderDTO,
  StockLocationDTO,
  CalculateShippingOptionPriceDTO
} from "@medusajs/framework/types"
import {
  type OrderRequest,
  type OrderReturnRequest,
  type CalculatorRequest,
  type CostDeliveryCostVatEnum,
  type CostPaymentMethodEnum,
  type ItemCostVatEnum,
} from "../../../lib/apiship-client"
import { ApishipOptions } from "../types"
import { MedusaError } from "@medusajs/framework/utils"

const ITEM_LENGTH = 10
const ITEM_WIDTH = 10
const ITEM_HEIGHT = 10
const ITEM_WEIGHT = 20

export function mapToApishipOrderRequest(
  apishipOptions: ApishipOptions,
  data: Record<string, unknown>,
  items: Partial<Omit<FulfillmentItemDTO, "fulfillment">>[],
  order: Partial<FulfillmentOrderDTO>,
  fulfillment: Partial<Omit<FulfillmentDTO, "provider_id" | "data" | "items">>,
  stockLocation: StockLocationDTO,
  providerKey: string,
  tariffId: number,
  deliveryType: number,
  pickupType: number,
  isCod: boolean,
  pointOutId?: number
): OrderRequest {
  const stolstockLocationAddress = stockLocation.address!
  const defaultSenderSettings = apishipOptions.defaultSenderSettings
  const sender = {
    countryCode: stolstockLocationAddress.country_code || defaultSenderSettings.countryCode,
    ...((stolstockLocationAddress.city && stolstockLocationAddress.address_1 && stolstockLocationAddress.address_2) ?
      { addressString: `${stolstockLocationAddress.city}, ${stolstockLocationAddress.address_1}, ${stolstockLocationAddress.address_2}` } :
      { addressString: defaultSenderSettings.addressString }),
    contactName: defaultSenderSettings.contactName,
    phone: stolstockLocationAddress.phone || defaultSenderSettings.phone,
    ...(stolstockLocationAddress.province ? { region: stolstockLocationAddress.province } : {}),
    ...(stolstockLocationAddress.city ? { city: stolstockLocationAddress.city } : {}),
    ...(stolstockLocationAddress.company ? { companyName: stolstockLocationAddress.company } : {}),
    ...(stolstockLocationAddress.postal_code ? { postIndex: stolstockLocationAddress.postal_code } : {}),
  }

  const shippingAddress = order.shipping_address!
  const recipient = {
    countryCode: (shippingAddress.country_code!).toUpperCase(),
    postIndex: order.shipping_address?.postal_code,
    region: shippingAddress.province,
    city: shippingAddress.city,
    addressString: [
      shippingAddress.city,
      shippingAddress.address_1,
      shippingAddress.address_2,
    ].filter(Boolean).join(", "),
    contactName: [shippingAddress.first_name, shippingAddress.last_name].join(" ") as string,
    phone: shippingAddress.phone!,
    ...(shippingAddress.company ? { companyName: shippingAddress.company } : {}),
    ...((order as any).customer.email ? { email: (order as any).customer.email } : {}),
  }

  const defaultProductSizes = apishipOptions.defaultProductSizes
  const placeItems = order.items!.map((item, idx) => {
    const quantity = item.quantity
    const weight = (item as any).variant.weight
    const height = (item as any).variant.height
    const length = (item as any).variant.length
    const width = (item as any).variant.width
    const articul = (item as any).variant.sku
    const description = `${item.title} ${item.subtitle}`
    const cost = isCod ? item.unit_price : 0
    return {
      length: length || defaultProductSizes?.length || ITEM_LENGTH,
      width: width || defaultProductSizes?.width || ITEM_WIDTH,
      height: height || defaultProductSizes?.height || ITEM_HEIGHT,
      weight: weight || defaultProductSizes?.weight || ITEM_WEIGHT,
      articul: articul,
      description: description,
      quantity: quantity,
      assessedCost: cost,
      cost: cost,
      costVat: -1 as ItemCostVatEnum,
      ...((item as any).variant.barcode ? { barcode: (item as any).variant.barcode } : {}),
    }
  })

  const totalWeight = placeItems.reduce((sum, item) => {
    const quantity = item.quantity
    const weight = item.weight
    return sum + weight * quantity
  }, 0)
  const dimensions = placeItems.map((item) => {
    const height = item.height
    const width = item.width
    const length = item.length
    const quantity = item.quantity
    const sorted = [height, width, length].sort((a, b) => a - b)
    return {
      minSum: sorted[0] * quantity,
      mid: sorted[1],
      max: sorted[2],
    }
  })
  const placeHeight = dimensions.reduce((s, d) => s + d.minSum, 0)
  const placeLength = Math.max(...dimensions.map((d) => d.mid))
  const placeWidth = Math.max(...dimensions.map((d) => d.max))
  const place = {
    height: placeHeight,
    length: placeLength,
    width: placeWidth,
    weight: totalWeight,
    items: placeItems,
  }

  const deliveryCostVat = apishipOptions.deliveryCostVat
  const assessedCost =
    placeItems.reduce((sum, item) => {
      const assessedCost = item.assessedCost
      const quantity = item.quantity
      return sum + assessedCost * quantity
    }, 0)
  const deliveryCost = order.shipping_total as number
  const itemsCost =
    placeItems.reduce((sum, item) => {
      const cost = item.cost
      const quantity = item.quantity
      return sum + cost * quantity
    }, 0)
  const codCost = isCod ? itemsCost + deliveryCost : 0
  const cost = {
    deliveryCostVat,
    codCost,
    assessedCost,
    // TODO: in example DeliveryPayedByRecipient always false
    isDeliveryPayedByRecipient: isCod ? true : false,
    // TODO: in example there is no paymentMethod at all
    ...(isCod ? { paymentMethod: 3 as CostPaymentMethodEnum } : {}),
    ...(isCod ? { deliveryCost } : {}),
  }

  const connectionsMap = apishipOptions.connectionsMap
  const providerConnectId = connectionsMap?.[providerKey]
  if (!providerConnectId) {
    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      "The `providerConnectId` parameter is missing or incorrectly specified."
    )
  }
  const apishipOrder: OrderRequest = {
    order: {
      providerKey,
      providerConnectId,
      tariffId,
      pickupType,
      deliveryType,
      clientNumber: order.shipping_address?.customer_id || `medusa-${Date.now()}`,
      weight: totalWeight,
      ...(deliveryType === 2 ? { pointOutId } : {}),
    },
    cost,
    sender,
    recipient,
    places: [place],
  }
  return apishipOrder
}

export function mapToApishipCalculatorRequest(
  optionData: CalculateShippingOptionPriceDTO["optionData"],
  data: CalculateShippingOptionPriceDTO["data"],
  context: CalculateShippingOptionPriceDTO["context"]
): CalculatorRequest {
  const shippingAddress = context.shipping_address!
  const toAddress = {
    countryCode: shippingAddress.country_code!.toUpperCase(),
    index: shippingAddress?.postal_code,
    addressString: [
      shippingAddress.city,
      shippingAddress.address_1,
      shippingAddress.address_2,
    ].filter(Boolean).join(", "),
    region: shippingAddress.province!,
    city: shippingAddress.city!,
  }

  const stockLocationAddress = context.from_location!.address!
  const fromAddress = {
    countryCode: stockLocationAddress.country_code.toUpperCase(),
    index: stockLocationAddress.postal_code!,
    addressString: [
      stockLocationAddress.city,
      stockLocationAddress.address_1,
      stockLocationAddress.address_2,
    ].filter(Boolean).join(", "),
    region: stockLocationAddress.province!,
    city: stockLocationAddress.city!,
  }

  const places = context.items.flatMap((item) => {
    const weight = (item as any).variant.weight as number || ITEM_WEIGHT
    const height = (item as any).variant.height as number || ITEM_HEIGHT
    const length = (item as any).variant.length as number || ITEM_LENGTH
    const width = (item as any).variant.width as number || ITEM_WIDTH
    const quantity = item.quantity as number
    return Array.from({ length: quantity }, () => ({
      height,
      length,
      width,
      weight,
    }))
  })

  const pickupTypes = [optionData.pickupType as number]
  const deliveryTypes = [optionData.deliveryType as number]

  const assessedCost = context.items.reduce((sum, item) => {
    const unitPrice = item.unit_price as number
    const quantity = item.quantity as number
    return sum + unitPrice * quantity
  }, 0)
  const codCost = optionData.isCod ? assessedCost : 0
  const includeFees = false

  const calculatorRequest: CalculatorRequest = {
    to: toAddress as any,
    from: fromAddress as any,
    places,
    pickupTypes,
    deliveryTypes,
    assessedCost,
    codCost,
    includeFees,
  }
  return calculatorRequest
}
