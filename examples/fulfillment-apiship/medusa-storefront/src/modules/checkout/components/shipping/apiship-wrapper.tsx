"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Button, Text } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import { setShippingMethod } from "@lib/data/cart"
import {
  calculatePriceForShippingOption,
  retrieveCalculation,
  getPointAddresses,
} from "@lib/data/fulfillment"
import
ApishipMap,
{ ApishipPoint }
  from "./apiship-map"

type ApishipTariffForPoint = {
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

type ApishipCalculation = {
  deliveryToPoint?: Array<{
    providerKey: string
    tariffs?: Array<{
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
      pointIds?: number[]
    }>
  }>
}

type Chosen = {
  pointId: string
  description?: string
  worktime?: Record<string, string>
  photos?: string[]
  pointLabel: string
  tariffKey: string
  tariffLabel: string
  priceLabel: string
  daysLabel: string
  apiship: {
    pointId: string
    pointProviderKey?: string
    tariffKey: string
    tariffId?: number
    tariffProviderId?: string
    tariffProviderKey?: string
    deliveryCost?: number
    daysMin?: number
    daysMax?: number
  }
}

function buildTariffsByPointId(calculation?: ApishipCalculation | null) {
  const map: Record<string, ApishipTariffForPoint[]> = {}
  calculation?.deliveryToPoint?.forEach(({ providerKey, tariffs }) => {
    tariffs?.forEach((tariff) => {
      for (const pointId of tariff.pointIds ?? []) {
        const key = `${providerKey}:${tariff.tariffProviderId ?? ""}:${tariff.tariffId ?? ""}`
        const entry: ApishipTariffForPoint = {
          key,
          providerKey,
          tariffProviderId: tariff.tariffProviderId,
          tariffId: tariff.tariffId,
          tariffName: tariff.tariffName,
          deliveryCost: tariff.deliveryCost,
          deliveryCostOriginal: tariff.deliveryCostOriginal,
          daysMin: tariff.daysMin,
          daysMax: tariff.daysMax,
          calendarDaysMin: tariff.calendarDaysMin,
          calendarDaysMax: tariff.calendarDaysMax,
          workDaysMin: tariff.workDaysMin,
          workDaysMax: tariff.workDaysMax,
        }
        const arr = (map[String(pointId)] ??= [])
        if (!arr.some((tariff) => tariff.key === key)) arr.push(entry)
      }
    })
  })

  return map
}

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const

const Schedule = ({
  worktime
}: {
  worktime: Record<string, string>
}) => {
  if (Object.keys(worktime).length > 0) {
    return (
      <div className="py-3">
        <Text className="text-ui-fg-muted mt-1">Schedule:</Text>
        {Object.keys(worktime).map((day) => {
          const label = WEEK_DAYS[Number(day) - 1]
          const time = worktime[day]
          return (
            <Text className="text-ui-fg-muted mt-1" key={day}>
              {label}: {time}
            </Text>
          )
        })}
      </div>
    )
  } else {
    return null
  }
}

function extractPointIds(map: Record<string, ApishipTariffForPoint[]>) {
  return Object.keys(map).map(Number).filter(Number.isFinite)
}

function money(amount: number, currencyCode: string) {
  try {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: currencyCode.toUpperCase(),
      maximumFractionDigits: 2,
    }).format(amount)
  } catch {
    return `${amount} ${currencyCode.toUpperCase()}`
  }
}

function days(t: ApishipTariffForPoint) {
  const min = t.daysMin ?? 0
  const max = t.daysMax ?? 0
  if (!min && !max) return "—"
  if (min === max) return min === 1 ? `${min} day` : `${min} days`
  return `${min}–${max} days`
}

function useLatestRef<T>(value: T) {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref
}

function useAsyncEffect(fn: (isCancelled: () => boolean) => Promise<void>, deps: any[]) {
  useEffect(() => {
    let cancelled = false
    const isCancelled = () => cancelled
    fn(isCancelled).catch((e) => console.error(e))
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

type PanelProps = {
  enabled: boolean
  cart: HttpTypes.StoreCart
  shippingOptionId: string | null
  onReadyChange?: (ready: boolean) => void
  onPriceUpdate?: (shippingOptionId: string, amount: number) => void
  onError?: (message: string) => void
}

const ApishipWrapper = ({
  enabled,
  cart,
  shippingOptionId,
  onReadyChange,
  onPriceUpdate,
  onError,
}: PanelProps) => {
  const onErrorRef = useLatestRef(onError)
  const onReadyRef = useLatestRef(onReadyChange)
  const onPriceRef = useLatestRef(onPriceUpdate)

  const [isLoadingPoints, setIsLoadingPoints] = useState(false)
  const [points, setPoints] = useState<ApishipPoint[]>([])
  const [tariffsByPointId, setTariffsByPointId] = useState<Record<string, ApishipTariffForPoint[]>>(
    {}
  )

  const [selectedPointId, setSelectedPointId] = useState<string | null>(null)
  const [selectedTariffKey, setSelectedTariffKey] = useState<string | null>(null)
  const [chosen, setChosen] = useState<Chosen | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setIsLoadingPoints(false)
      setPoints([])
      setTariffsByPointId({})
      setSelectedPointId(null)
      setSelectedTariffKey(null)
      setChosen(null)
      setIsPanelOpen(false)
      onReadyRef.current?.(true)
    } else {
      onReadyRef.current?.(false)
    }
  }, [enabled, onReadyRef])

  useEffect(() => {
    onReadyRef.current?.(!enabled || !!chosen)
  }, [enabled, chosen, onReadyRef])

  useAsyncEffect(
    async (isCancelled) => {
      if (!enabled || !shippingOptionId) return

      setIsLoadingPoints(true)
      try {
        const calculation = (await retrieveCalculation(cart.id, shippingOptionId)) as ApishipCalculation
        if (isCancelled()) return

        const tariffsMap = buildTariffsByPointId(calculation)
        setTariffsByPointId(tariffsMap)

        const pointIds = extractPointIds(tariffsMap)
        if (!pointIds.length) {
          setPoints([])
          return
        }
        const pointAddresses = (await getPointAddresses(cart.id, shippingOptionId, pointIds)) as {
          points: ApishipPoint[]
        }
        if (isCancelled()) return

        setPoints(pointAddresses?.points ?? [])
      } catch (e: any) {
        console.error("ApishipToPointPanel load failed", e)
        onErrorRef.current?.(e?.message ?? "Failed to load pickup points")
        setPoints([])
        setTariffsByPointId({})
      } finally {
        if (!isCancelled()) setIsLoadingPoints(false)
      }
    },
    [enabled, shippingOptionId, cart.id]
  )

  const persistChosen = useCallback(
    async (next: Chosen) => {
      if (!shippingOptionId) return

      await setShippingMethod({
        cartId: cart.id,
        shippingMethodId: shippingOptionId,
        data: { apiship: next.apiship },
      })

      const calculation = await calculatePriceForShippingOption(shippingOptionId, cart.id)
      if (calculation?.id && typeof calculation.amount === "number") {
        onPriceRef.current?.(calculation.id, calculation.amount)
      }
    },
    [cart.id, shippingOptionId, onPriceRef]
  )

  if (!enabled) return null

  return (
    <div className="mt-4 rounded-rounded border bg-ui-bg-base p-4">
      <span className="font-medium txt-medium text-ui-fg-base block">Pickup Point</span>
      <span className="mb-3 text-ui-fg-muted txt-medium block">Select a pickup point and tariff</span>

      <ApishipMap
        points={points}
        tariffsByPointId={tariffsByPointId}
        isLoading={isLoadingPoints}
        currencyCode={cart.currency_code}
        selectedPointId={selectedPointId}
        selectedTariffKey={selectedTariffKey}
        isPanelOpen={isPanelOpen}
        onClosePanel={() => setIsPanelOpen(false)}
        onSelectPoint={(pid) => {
          setSelectedPointId(pid)
          setSelectedTariffKey(null)
          setIsPanelOpen(true)
        }}
        onSelectTariff={(key) => {
          setSelectedTariffKey(key)
        }}
        onChoose={async ({ point, tariff }) => {
          const cost =
            typeof tariff.deliveryCostOriginal === "number" ? tariff.deliveryCostOriginal : tariff.deliveryCost

          const next: Chosen = {
            pointId: point.id,
            description: point.description,
            worktime: point.worktime,
            photos: point.photos,
            pointLabel: point.name || point.address || `Point #${point.id}`,
            tariffKey: tariff.key,
            tariffLabel: `${tariff.tariffName || "Tariff"} (${tariff.providerKey})`,
            priceLabel: typeof cost === "number" ? money(cost, cart.currency_code) : "—",
            daysLabel: days(tariff),
            apiship: {
              pointId: point.id,
              pointProviderKey: point.providerKey,
              tariffKey: tariff.key,
              tariffId: tariff.tariffId,
              tariffProviderId: tariff.tariffProviderId,
              tariffProviderKey: tariff.providerKey,
              deliveryCost: cost,
              daysMin: tariff.daysMin,
              daysMax: tariff.daysMax,
            },
          }

          setChosen(next)
          try {
            await persistChosen(next)
          } catch (e: any) {
            onErrorRef.current?.(e?.message ?? "Failed to save the selected tariff")
          }
        }}
      />

      {chosen && (
        <div className="mt-4 rounded-rounded border p-4">
          <Text className="txt-medium-plus">Pickup Point</Text>
          <Text className="text-ui-fg-muted mt-1">{chosen.pointLabel}</Text>
          <Text className="text-ui-fg-muted mt-1">{chosen.description}</Text>
          <Schedule worktime={chosen.worktime!} />
          <Text className="text-ui-fg-muted mt-1 pb-3">
            {chosen.tariffLabel} · {chosen.priceLabel} · {chosen.daysLabel}
          </Text>
          <Button
            size="small"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setSelectedPointId(null)
              setSelectedTariffKey(null)
              setChosen(null)
              setIsPanelOpen(false)
            }}
          >
            Remove
          </Button>
        </div>
      )}
    </div>
  )
}

export default ApishipWrapper
