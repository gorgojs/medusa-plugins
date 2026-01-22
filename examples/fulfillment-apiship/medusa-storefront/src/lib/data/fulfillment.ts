"use server"

import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getAuthHeaders, getCacheOptions } from "./cookies"

export const listCartShippingMethods = async (cartId: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("fulfillment")),
  }

  return sdk.client
    .fetch<HttpTypes.StoreShippingOptionListResponse>(
      `/store/shipping-options`,
      {
        method: "GET",
        query: {
          cart_id: cartId,
        },
        headers,
        next,
        cache: "force-cache",
      }
    )
    .then(({ shipping_options }) => shipping_options)
    .catch(() => {
      return null
    })
}

export const calculatePriceForShippingOption = async (
  optionId: string,
  cartId: string,
  data?: Record<string, unknown>
) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("fulfillment")),
  }

  const body = { cart_id: cartId, data }

  if (data) {
    body.data = data
  }

  return sdk.client
    .fetch<{ shipping_option: HttpTypes.StoreCartShippingOption }>(
      `/store/shipping-options/${optionId}/calculate`,
      {
        method: "POST",
        body,
        headers,
        next,
      }
    )
    .then(({ shipping_option }) => shipping_option)
    .catch((e) => {
      return null
    })
}

export const retrieveCalculation = async (
  cartId: string,
  shippingOptionId: string
) => {
  const headers = {
    ...(await getAuthHeaders()),

  }

  const next = {
    ...(await getCacheOptions("fulfillment")),
  }

  const body = { cart_id: cartId }

  return sdk.client
    .fetch<Record<string, unknown>>(
      `/store/apiship/${shippingOptionId}/calculate`,
      {
        method: "POST",
        headers,
        body,
        next,
      }
    )
    .then(({ data }) => data)
    .catch((e) => {
      return null
    })
}

export const getPointAddresses = async (
  cartId: string,
  shippingOptionId: string,
  pointIds: Array<number>
) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("fulfillment")),
  }

  const body = {
    cartId,
    shippingOptionId,
    pointIds
  }

  return sdk.client
    .fetch<{
      points: any[]
      meta: any
    }>(`/store/apiship/points`, {
      method: "POST",
      headers,
      body,
      next,
    })
    .catch((e) => {
      console.error("getPointsAddresses error", e)
      return null
    })
}

export const retrieveProviders = async () => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("fulfillment")),
  }

  return sdk.client
    .fetch<{
      providers: Array<{
        key: string
        name: string
        description: string | null
      }>
    }>(`/store/apiship/providers`, {
      method: "POST",
      headers,
      next,
    })
    .catch((e) => {
      console.error("retrieveProviders error", e)
      return null
    })
}
