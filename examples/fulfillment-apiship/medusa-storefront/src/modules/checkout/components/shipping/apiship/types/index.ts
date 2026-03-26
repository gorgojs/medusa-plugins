import type { ApishipHttpTypes } from "@gorgo/medusa-fulfillment-apiship/types"

export type ApishipCalculation = {
  deliveryToDoor?: Array<{
    providerKey: string
    tariffs?: Array<ApishipHttpTypes.StoreApishipDoorTariff>
  }>
  deliveryToPoint?: Array<{
    providerKey: string
    tariffs?: Array<ApishipHttpTypes.StoreApishipPointTariff>
  }>
}

export type ApishipTariff = {
  key: string
  providerKey: string
} & (
  ApishipHttpTypes.StoreApishipDoorTariff |
  ApishipHttpTypes.StoreApishipPointTariff
)

export type ApishipPoint = Omit<
  ApishipHttpTypes.StoreApishipPoint,
  "id" | "lat" | "lng" | "worktime"
> & {
  id: string
  lat: number
  lng: number
  worktime?: Record<string, string>
}

export type Chosen = {
  deliveryType: number
  tariff: ApishipTariff
  point?: ApishipPoint
}
