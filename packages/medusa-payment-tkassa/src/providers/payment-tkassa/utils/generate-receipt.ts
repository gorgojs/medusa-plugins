
import {
  getSmallestUnit,
} from "./get-smallest-unit"
import { components } from "t-kassa-api/openapi"


function generateReceiptFfd105(
  taxation: components["schemas"]["Receipt_FFD_105"]["Taxation"],
  taxItem: components["schemas"]["Items_FFD_105"]["Tax"] | components["schemas"]["Items_FFD_12"]["Tax"],
  taxShipping: components["schemas"]["Items_FFD_105"]["Tax"] | components["schemas"]["Items_FFD_12"]["Tax"],
  items: Array<Record<string, any>>,
  currencyCode: string,
  shippingTotal: number,
  shippingMethods: Array<Record<string, any>>,
  email?: string,
  phone?: string
): components["schemas"]["Receipt_FFD_105"] {
  const res = {} as components["schemas"]["Receipt_FFD_105"]

  res.FfdVersion = "1.05"
  res.Taxation = taxation

  if (email)
    res.Email = email

  if (phone)
    res.Phone = phone

  const Items: components["schemas"]["Items_FFD_105"][] = items.map(i => ({
    Name: i.variant_title
      ? `${i.product_title} (${i.variant_title})`
      : i.product_title as string,
    Price: getSmallestUnit(i.unit_price, currencyCode),
    Quantity: i.quantity,
    Amount: getSmallestUnit(i.total, currencyCode),
    Tax: taxItem,
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
      Tax: taxShipping,
      PaymentMethod: 'full_payment',
      PaymentObject: 'service',
    })
  }

  res.Items = Items
  return res
}

function generateReceiptFfd12(
  taxation: components["schemas"]["Receipt_FFD_12"]["Taxation"],
  taxItem: components["schemas"]["Items_FFD_105"]["Tax"] | components["schemas"]["Items_FFD_12"]["Tax"],
  taxShipping: components["schemas"]["Items_FFD_105"]["Tax"] | components["schemas"]["Items_FFD_12"]["Tax"],
  items: Array<Record<string, any>>,
  currencyCode: string,
  shippingTotal: number,
  shippingMethods: Array<Record<string, any>>,
  shippingAddress: Record<string, any>,
  email?: string,
  phone?: string
): components["schemas"]["Receipt_FFD_12"] {
  const res = {} as components["schemas"]["Receipt_FFD_12"]

  res.FfdVersion = "1.2"
  res.Taxation = taxation

  if (email)
    res.Email = email

  if (phone)
    res.Phone = phone

  if (shippingAddress.first_name && shippingAddress.last_name)
    res.Customer = `${shippingAddress.last_name} ${shippingAddress.first_name}`

  const Items: components["schemas"]["Items_FFD_12"][] = items.map(i => ({
    Name: i.variant_title
      ? `${i.product_title} (${i.variant_title})`
      : i.product_title as string,
    Price: getSmallestUnit(i.unit_price, currencyCode),
    Quantity: i.quantity,
    Amount: getSmallestUnit(i.total, currencyCode),
    Tax: taxItem,
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
      Tax: taxShipping,
      PaymentMethod: 'full_payment',
      PaymentObject: 'service',
      MeasurementUnit: 'шт'
    })
  }

  res.Items = Items

  return res
}

export function generateReceipt(
  ffdVersion: "1.05" | "1.2",
  taxation: components["schemas"]["Receipt_FFD_105"]["Taxation"] | components["schemas"]["Receipt_FFD_12"]["Taxation"],
  taxItem: components["schemas"]["Items_FFD_105"]["Tax"] | components["schemas"]["Items_FFD_12"]["Tax"],
  taxShipping: components["schemas"]["Items_FFD_105"]["Tax"] | components["schemas"]["Items_FFD_12"]["Tax"],
  cart: Record<string, any>
): components["schemas"]["Receipt_FFD_105"] | components["schemas"]["Receipt_FFD_12"] {

  const Email = cart?.email as string
  const Phone = cart?.shipping_address.phone as string
  const items = cart?.items as Array<Record<string, any>>
  const currencyCode = cart?.currency_code as string
  const shippingTotal = cart?.shipping_total as number
  const shippingMethods = cart?.shipping_methods as Array<Record<string, any>>
  const shippingAddress = cart?.shipping_address as Array<Record<string, any>>

  let receipt = {} as components["schemas"]["Receipt_FFD_105"] | components["schemas"]["Receipt_FFD_12"]

  switch (ffdVersion) {
    case "1.05":
      receipt = generateReceiptFfd105(
        taxation,
        taxItem,
        taxShipping,
        items,
        currencyCode,
        shippingTotal,
        shippingMethods,
        Email,
        Phone
      )
      break
    case "1.2":
      receipt = generateReceiptFfd12(
        taxation,
        taxItem,
        taxShipping,
        items,
        currencyCode,
        shippingTotal,
        shippingMethods,
        shippingAddress,
        Email,
        Phone
      )
      break
  }

  return receipt
}
