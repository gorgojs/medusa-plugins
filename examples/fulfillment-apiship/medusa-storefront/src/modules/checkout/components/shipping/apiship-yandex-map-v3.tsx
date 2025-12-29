"use client"

import { useEffect, useMemo, useRef } from "react"
import { Button, Text, clx } from "@medusajs/ui"

export type ApishipPoint = {
  id: string
  providerKey?: string
  availableOperation?: number
  name?: string
  lat: number
  lng: number
  code?: string
  postIndex?: string
  region?: string
  city?: string
  address?: string
  phone?: string
}

export type ApishipTariffForPoint = {
  key: string // unique key: providerKey:tariffProviderId:tariffId
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

type Props = {
  points: ApishipPoint[]
  tariffsByPointId: Record<string, ApishipTariffForPoint[]>
  isLoading?: boolean

  currencyCode: string // e.g. "rub"
  selectedPointId: string | null
  selectedTariffKey: string | null

  onSelectPoint: (id: string) => void
  onSelectTariff: (tariffKey: string) => void

  onChoose: (payload: { point: ApishipPoint; tariff: ApishipTariffForPoint }) => void
  onClearSelection: () => void
}

declare global {
  interface Window {
    ymaps3?: any
    __ymaps3_loading_promise__?: Promise<void>
  }
}

function ensureYmaps3Loaded(params: { apikey: string; lang?: string }): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()

  if (window.__ymaps3_loading_promise__) return window.__ymaps3_loading_promise__

  window.__ymaps3_loading_promise__ = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src^="https://api-maps.yandex.ru/v3/"]'
    )
    if (existing) {
      resolve()
      return
    }

    const script = document.createElement("script")
    const lang = params.lang ?? "ru_RU"
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${encodeURIComponent(
      params.apikey
    )}&lang=${encodeURIComponent(lang)}`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => {
      console.error("Failed to load:", script.src)
      reject(new Error(`Failed to load Yandex Maps JS API v3 script: ${script.src}`))
    }
    document.head.appendChild(script)
  })

  return window.__ymaps3_loading_promise__
}

function formatMoneyMajorUnits(amount: number, currencyCode: string) {
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

function formatDays(t: ApishipTariffForPoint) {
  const min = t.daysMin ?? 0
  const max = t.daysMax ?? 0
  if (!min && !max) return "—"
  if (min === max) {
    if(min === 1)
      return `${min} day`
    else 
      return `${min} days`
  }
  return `${min}–${max} days`
}

export default function ApishipYandexMapV3({
  points,
  tariffsByPointId,
  isLoading,
  currencyCode,
  selectedPointId,
  selectedTariffKey,
  onSelectPoint,
  onSelectTariff,
  onChoose,
  onClearSelection,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<Map<string, { marker: any; el: HTMLDivElement }>>(new Map())

  const activePoint = useMemo(() => {
    return selectedPointId ? points.find((p) => p.id === selectedPointId) ?? null : null
  }, [points, selectedPointId])

  const activeTariffs = useMemo(() => {
    if (!selectedPointId) return []
    return tariffsByPointId[selectedPointId] ?? []
  }, [tariffsByPointId, selectedPointId])

  const selectedTariff = useMemo(() => {
    if (!selectedTariffKey) return null
    return activeTariffs.find((t) => t.key === selectedTariffKey) ?? null
  }, [activeTariffs, selectedTariffKey])

  const firstCenter = useMemo<[number, number]>(() => {
    const p = points?.[0]
    if (p) return [p.lng, p.lat]
    return [37.618423, 55.751244]
  }, [points])

  useEffect(() => {
    let cancelled = false

    async function init() {
      if (!containerRef.current) return

      const apikey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY
      if (!apikey) {
        console.error("NEXT_PUBLIC_YANDEX_MAPS_API_KEY is not set")
        return
      }

      await ensureYmaps3Loaded({ apikey, lang: "ru_RU" })
      if (cancelled) return

      const ymaps3 = window.ymaps3
      if (!ymaps3) return

      await ymaps3.ready
      if (cancelled) return

      ymaps3.import.registerCdn(
        "https://cdn.jsdelivr.net/npm/{package}",
        "@yandex/ymaps3-default-ui-theme@0.0"
      )

      const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3

      if (!mapRef.current) {
        const map = new YMap(containerRef.current, {
          location: { center: firstCenter, zoom: 10 },
        })

        map.addChild(new YMapDefaultSchemeLayer({}))
        map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }))

        mapRef.current = map
      }

      const map = mapRef.current

      Array.from(markersRef.current.values()).forEach(({ marker }) => {
        try {
          map.removeChild(marker)
        } catch {
        }
      })
      markersRef.current.clear()

      points.forEach((p) => {
        const el = document.createElement("div")
        el.style.width = "12px"
        el.style.height = "12px"
        el.style.borderRadius = "9999px"
        el.style.border = "2px solid rgba(0,0,0,0.35)"
        el.style.background = "white"
        el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.18)"
        el.style.cursor = "pointer"
        el.title = p.name ?? p.address ?? `Point ${p.id}`

        el.addEventListener("click", (e) => {
          e.preventDefault()
          e.stopPropagation()
          onSelectPoint(p.id)
        })

        const marker = new YMapMarker({ coordinates: [p.lng, p.lat] }, el)
        map.addChild(marker)
        markersRef.current.set(p.id, { marker, el })
      })
    }

    init().catch((e) => console.error(e))

    return () => {
      cancelled = true
    }
  }, [points, firstCenter, onSelectPoint])

  useEffect(() => {
    Array.from(markersRef.current.entries()).forEach(([id, { el }]) => {
      const isSel = id === selectedPointId
      el.style.background = isSel ? "#3b82f6" : "white"
      el.style.border = isSel ? "2px solid #1d4ed8" : "2px solid rgba(0,0,0,0.35)"
    })
  }, [selectedPointId])

  if (isLoading) {
    return <Text className="text-ui-fg-muted">Loading pickup points…</Text>
  }

  if (!points?.length) {
    return <Text className="text-ui-fg-muted">No pickup points found for this shipping method.</Text>
  }

  return (
    <div className="w-full">
      <div className="relative rounded-rounded overflow-hidden border">
        <div ref={containerRef} style={{ width: "100%", height: 420 }} />

        {activePoint && (
          <div className="absolute left-3 top-3 right-3 md:right-auto md:w-[460px] rounded-rounded border bg-white/95 p-4 shadow">
            <button
              type="button"
              aria-label="Закрыть"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onClearSelection()
              }}
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white/70 text-ui-fg-subtle hover:bg-white"
            >
              ✕
            </button>

            <Text className="txt-medium-plus">
              {activePoint.name || `ПВЗ #${activePoint.id}`}
            </Text>

            {activePoint.address && (
              <Text className="text-ui-fg-muted mt-1">{activePoint.address}</Text>
            )}

            <div className="mt-3">
              <Text className="txt-medium-plus">Tariffs</Text>
              {activeTariffs.length ? (
                <div className="mt-2 flex flex-col gap-2 max-h-[220px] overflow-auto p-1">
                  {activeTariffs.map((t) => {
                    const active = t.key === selectedTariffKey
                    const price =
                      typeof t.deliveryCost === "number"
                        ? formatMoneyMajorUnits(t.deliveryCost, currencyCode)
                        : "—"

                    return (
                      <button
                        key={t.key}
                        type="button"
                        onClick={() => onSelectTariff(t.key)}
                        className={clx(
                          "box-border text-left rounded-rounded border px-3 py-2 hover:shadow-borders-interactive-with-active",
                          {
                            "border-ui-border-interactive bg-ui-bg-subtle": active,
                          }
                        )}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <Text className="txt-small-plus">
                            {t.tariffName || "Tariff"}{" "}
                            <span className="text-ui-fg-muted">({t.providerKey})</span>
                          </Text>
                          <Text className="txt-small-plus">{price}</Text>
                        </div>
                        <Text className="text-ui-fg-muted mt-1 txt-small">
                          Delivery time: {formatDays(t)}
                        </Text>
                      </button>
                    )
                  })}
                </div>
              ) : (
                <Text className="text-ui-fg-muted mt-2">
                  Для этой точки нет тарифов.
                </Text>
              )}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <Button
                size="small"
                onClick={() => {
                  if (!activePoint || !selectedTariff) return
                  onChoose({ point: activePoint, tariff: selectedTariff })
                }}
                disabled={!selectedTariff}
              >
                Choose
              </Button>

              {!selectedTariff && (
                <Text className="text-ui-fg-muted txt-small">
                  Select a tariff to confirm your choice.
                </Text>
              )}
            </div>
          </div>
        )}
      </div>

      {!activePoint && (
        <Text className="text-ui-fg-muted mt-2">
          Click on a point on the map to select a pickup point.
        </Text>
      )}
    </div>
  )
}