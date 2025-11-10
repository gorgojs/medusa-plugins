import {
  FulfillmentDTO,
  FulfillmentItemDTO,
  FulfillmentOrderDTO,
} from "@medusajs/framework/types"
import {
  type OrderRequest,
  type OrderReturnRequest,
} from "../../../apiship-client"

export function mapToApishipOrderRequest(
  data: Record<string, unknown>,
  items: Partial<Omit<FulfillmentItemDTO, "fulfillment">>[],
  order: Partial<FulfillmentOrderDTO>,
  fulfillment: Partial<Omit<FulfillmentDTO, "provider_id" | "data" | "items">>,
  providerKey: string,
  providerConnectId: string,
  tariffId: number,
): OrderRequest {
  const fallbackItemWeight = 200
  const fallbackItemSide = 20
  const placeDimensions = { length: 40, width: 20, height: 20 }

  // TODO: parse real sender info
  const sender = {
    countryCode: "RU",
    city: "Москва",
    addressString: "г Москва, ул Машкова, д 21",
    contactName: "Отправитель",
    phone: "79990000000",
  }

  const shippingAddress = order.shipping_address!
  const recipient = {
    countryCode: (shippingAddress.country_code || "RU").toUpperCase(),
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
    ...(shippingAddress.company ? {companyName: shippingAddress.company} : {} ),
    ...((order as any).customer.email ? {email: (order as any).customer.email} : {} ),
  }

  // TODO: when no weight on items
  const totalWeight = order.items!.reduce((sum, item) => {
    const quantity = item.quantity
    const weight = (item as any).variant.weight || fallbackItemWeight
    return sum + weight * quantity
  }, 0)

  const assessedCost =
    order.items!.reduce((sum, item) => {
      const unitPrice = item.unit_price
      const quantity = item.quantity
      return sum + unitPrice * quantity
    }, 0) || Number(order.total)

  const placeItems = order.items!.map((item, idx) => {
    const quantity = item.quantity
    const weight = (item as any).variant.weight
    const height = (item as any).variant.height
    const length = (item as any).variant.length
    const width = (item as any).variant.width
    const articul = (item as any).variant.sku
    const description = `${item.title} ${item.subtitle}`
    const cost = item.unit_price

    return {
      //height: height || fallbackItemSide,
      //length: length || fallbackItemSide,
      //width: width || fallbackItemSide,
      weight: weight || fallbackItemWeight,
      articul: articul,
      description: description,
      quantity: quantity,
      assessedCost: cost,
      cost: cost,
      costVat: -1,
      ...((width && height && length) ? {width, height, length} : {}),
      ...((item as any).variant.barcode ? {barcode: (item as any).variant.barcode} : {}),
    }
  })

  const place = {
    //height: placeDimensions.height,
    //length: placeDimensions.length,
    //width: placeDimensions.width,
    weight: totalWeight,
    items: placeItems,
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
    cost: {
      assessedCost: assessedCost,
      deliveryCost: 200,
      deliveryCostVat: -1,
      codCost: assessedCost + 200,
      isDeliveryPayedByRecipient: false,
      paymentMethod: 2,
    },
    sender,
    recipient,
    places: [place],
  }
  return apishipOrder
}