import {
  FulfillmentDTO,
  FulfillmentItemDTO,
  FulfillmentOrderDTO,
  StockLocationDTO
} from "@medusajs/framework/types"
import {
  type OrderRequest,
} from "../../../apiship-client"

const ITEM_LENGTH = 10
const ITEM_WIDTH = 10
const ITEM_HEIGHT = 10
const ITEM_WEIGHT = 20

export function mapToApishipOrderRequest(
  data: Record<string, unknown>,
  items: Partial<Omit<FulfillmentItemDTO, "fulfillment">>[],
  order: Partial<FulfillmentOrderDTO>,
  fulfillment: Partial<Omit<FulfillmentDTO, "provider_id" | "data" | "items">>,
  stockLocation: StockLocationDTO,
  providerKey: string,
  providerConnectId: string,
  tariffId: number,
  isCod: boolean
): OrderRequest {
  const stolstockLocationAddress = stockLocation.address!

  const sender = {
    countryCode: stolstockLocationAddress.country_code.toUpperCase(),
    city: stolstockLocationAddress.city!,
    region: stolstockLocationAddress.province!,
    addressString: `${stolstockLocationAddress.city}, ${stolstockLocationAddress.address_1}, ${stolstockLocationAddress.address_2}`,
    // TODO: parse real sender contact name (mb in provider option?)
    contactName: "Отправитель",
    phone: stolstockLocationAddress.phone!,
    companyName: stolstockLocationAddress.company!,
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
      height: height || ITEM_HEIGHT,
      length: length || ITEM_LENGTH,
      width: width || ITEM_WIDTH,
      weight: weight || ITEM_WEIGHT,
      articul: articul,
      description: description,
      quantity: quantity,
      assessedCost: cost,
      cost: cost,
      costVat: -1,
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
    deliveryCostVat: -1,
    codCost,
    assessedCost,
    // TODO: in example DeliveryPayedByRecipient always
    isDeliveryPayedByRecipient: isCod ? true : false,
    // TODO: in example there is no paymentMethod at all
    ...(isCod ? {paymentMethod: 3} : {}),
    ...(isCod ? {deliveryCost} : {}),
  }

  const apishipOrder: OrderRequest = {
    order: {
      providerKey,
      providerConnectId,
      tariffId,
      pickupType: 1,
      deliveryType: 1,
      clientNumber: order.shipping_address?.customer_id || `medusa-${Date.now()}`,
      weight: totalWeight,
    },
    cost,
    sender,
    recipient,
    places: [place],
  }
  return apishipOrder
}