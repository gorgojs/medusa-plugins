import {
  Items_FFD_105,
  Items_FFD_12,
  Receipt_FFD_12,
  Receipt_FFD_105,
  Taxation
} from "../types"
import {
  getSmallestUnit,
} from "./get-smallest-unit"

export function generateReceiptFfd105(
  taxation: Taxation,
  items: Array<Record<string, any>>,
  currencyCode: string,
  shippingTotal: number,
  shippingMethods: Array<Record<string, any>>,
  email?: string,
  phone?: string
): Receipt_FFD_105 {
  const res = {} as Receipt_FFD_105

  res.FfdVersion = "1.05"
  res.Taxation = taxation

  if (email)
    res.Email = email

  if (phone)
    res.Phone = phone

  const Items: Items_FFD_105[] = items.map(i => ({
    Name: i.variant_title
      ? `${i.product_title} (${i.variant_title})`
      : i.product_title as string,
    Price: getSmallestUnit(i.unit_price, currencyCode),
    Quantity: i.quantity,
    Amount: getSmallestUnit(i.total, currencyCode),
    Tax: 'vat0',
    PaymentMethod: 'full_payment',
    PaymentObject: 'commodity',
  }))
  if (shippingTotal > 0) {
    const name = shippingMethods?.[0]?.name ?? 'Shipping'
    const amt = getSmallestUnit(shippingTotal, currencyCode)
    Items.push({
      Name: name.length > 128 ? name.slice(0, 125) + '…' : name,
      Price: amt,
      Quantity: 1,
      Amount: amt,
      Tax: 'vat0',
      PaymentMethod: 'full_payment',
      PaymentObject: 'service',
    })
  }

  res.Items = Items
  return res
}

export function generateReceiptFfd12(
  taxation: Taxation,
  items: Array<Record<string, any>>,
  currencyCode: string,
  shippingTotal: number,
  shippingMethods: Array<Record<string, any>>,
  shippingAddress: Record<string, any>,
  email?: string,
  phone?: string
): Receipt_FFD_12{
  const res = {} as Receipt_FFD_12

  res.FfdVersion = "1.2"
  res.Taxation = taxation
  res.ClientInfo = {DocumentCode: "21"}

  if(email)
    res.Email = email

  if(phone)
    res.Phone = phone

  if(shippingAddress.first_name && shippingAddress.last_name)
    res.Customer = `${shippingAddress.last_name} ${shippingAddress.first_name}`

  const Items: Items_FFD_12[] = items.map(i => ({
    Name: i.variant_title
      ? `${i.product_title} (${i.variant_title})`
      : i.product_title as string,
    Price: getSmallestUnit(i.unit_price, currencyCode),
    Quantity: i.quantity,
    Amount: getSmallestUnit(i.total, currencyCode),
    Tax: 'vat0',
    PaymentMethod: 'full_payment',
    PaymentObject: 'commodity',
    MeasurementUnit: 'шт'
  }))
  if (shippingTotal > 0) {
    const name = shippingMethods?.[0]?.name ?? 'Shipping'
    const amt = getSmallestUnit(shippingTotal, currencyCode)
    Items.push({
      Name: name.length > 128 ? name.slice(0, 125) + '…' : name,
      Price: amt,
      Quantity: 1,
      Amount: amt,
      Tax: 'vat0',
      PaymentMethod: 'full_payment',
      PaymentObject: 'service',
      MeasurementUnit: 'шт'
    })
  }
   
  res.Items = Items

  return res
}