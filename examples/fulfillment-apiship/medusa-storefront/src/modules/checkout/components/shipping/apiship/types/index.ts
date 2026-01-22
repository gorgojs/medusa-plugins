export type ApishipCalculation = {
  deliveryToDoor?: Array<{
    providerKey: string
    tariffs?: Array<
      Omit<ApishipTariff, "key" | "providerKey">
    >
  }>
  deliveryToPoint?: Array<{
    providerKey: string
    tariffs?: Array<
      Omit<ApishipTariff, "key" | "providerKey"> & { pointIds?: number[] }
    >
  }>
}

export type ApishipTariff = {
  key: string
  providerKey: string
  tariffProviderId?: string
  tariffId?: number
  tariffName?: string
  deliveryCost?: number
  deliveryCostOriginal?: number
  daysMin?: number
  daysMax?: number
  calendarDaysMin?: number
  calendarDaysMax?: number
  workDaysMin?: number
  workDaysMax?: number
}

export type ApishipPoint = {
  id: string
  providerKey?: string
  availableOperation?: number
  name?: string
  description?: string
  worktime?: Record<string, string>
  photos?: string[]
  timetable?: string
  lat: number
  lng: number
  code?: string
  postIndex?: string
  region?: string
  city?: string
  address?: string
  phone?: string
}

export type Chosen = {
  deliveryType: number
  tariff: ApishipTariff
  point?: ApishipPoint
}