"use client"

import { useCallback, useEffect, useMemo, useRef } from "react"
import { Button, Text, clx } from "@medusajs/ui"

const DEFAULT_CENTER: [number, number] = [37.618423, 55.751244]

export type ApishipPoint = {
  id: string
  providerKey?: string
  availableOperation?: number
  name?: string
  description?: string
  worktime?: Record<string, string>
  photos?: string[]
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

type MapProps = {
  points: ApishipPoint[]
  tariffsByPointId: Record<string, ApishipTariffForPoint[]>
  isLoading?: boolean
  currencyCode: string
  selectedPointId: string | null
  selectedTariffKey: string | null
  isPanelOpen: boolean
  onClosePanel: () => void
  onSelectPoint: (id: string) => void
  onSelectTariff: (tariffKey: string) => void
  onChoose: (payload: { point: ApishipPoint; tariff: ApishipTariffForPoint }) => void
}

export function useLatestRef<T>(value: T) {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref
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
    const existing = document.querySelector<HTMLScriptElement>('script[src^="https://api-maps.yandex.ru/v3/"]')
    if (existing) return resolve()

    const script = document.createElement("script")
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${encodeURIComponent(params.apikey)}&lang=${encodeURIComponent(
      params.lang ?? "ru_RU"
    )}`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load Yandex Maps JS API v3 script: ${script.src}`))
    document.head.appendChild(script)
  })

  return window.__ymaps3_loading_promise__
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

const ApishipMap = ({
  points,
  tariffsByPointId,
  isLoading,
  currencyCode,
  selectedPointId,
  selectedTariffKey,
  isPanelOpen,
  onClosePanel,
  onSelectPoint,
  onSelectTariff,
  onChoose,
}: MapProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<Map<string, { marker: any; el: HTMLDivElement }>>(new Map())
  const initPromiseRef = useRef<Promise<void> | null>(null)

  const onSelectPointRef = useLatestRef(onSelectPoint)

  const center = useMemo<[number, number]>(() => {
    const p = points?.[0]
    return p ? [p.lng, p.lat] : DEFAULT_CENTER
  }, [points])

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

  const clearMarkers = useCallback(() => {
    const map = mapRef.current
    if (!map) return
    for (const { marker } of markersRef.current.values()) {
      try {
        map.removeChild(marker)
      } catch { }
    }
    markersRef.current.clear()
  }, [])

  const destroyMap = useCallback(() => {
    clearMarkers()
    try {
      mapRef.current?.destroy?.()
    } catch { }
    mapRef.current = null
    initPromiseRef.current = null
  }, [clearMarkers])

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return
    let cancelled = false

    initPromiseRef.current = (async () => {
      const apikey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY
      if (!apikey) throw new Error("NEXT_PUBLIC_YANDEX_MAPS_API_KEY is not set")

      await ensureYmaps3Loaded({ apikey, lang: "ru_RU" })
      if (cancelled) return

      const ymaps3 = window.ymaps3
      if (!ymaps3) return
      await ymaps3.ready
      if (cancelled) return

      ymaps3.import.registerCdn("https://cdn.jsdelivr.net/npm/{package}", "@yandex/ymaps3-default-ui-theme@0.0")

      const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3

      const map = new YMap(containerRef.current!, { location: { center, zoom: 10 } })
      map.addChild(new YMapDefaultSchemeLayer({}))
      map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }))

      mapRef.current = map
    })().catch((e) => console.error("Yandex map init failed", e))

    return () => {
      cancelled = true
      destroyMap()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destroyMap])

  useEffect(() => {
    ; (async () => {
      if (!initPromiseRef.current) return
      await initPromiseRef.current
      try {
        mapRef.current?.setLocation?.({ center, zoom: 10 })
      } catch { }
    })()
  }, [center])

  useEffect(() => {
    let cancelled = false
      ; (async () => {
        if (!initPromiseRef.current) return
        await initPromiseRef.current
        if (cancelled) return

        const map = mapRef.current
        const ymaps3 = window.ymaps3
        if (!map || !ymaps3) return

        const { YMapMarker } = ymaps3

        clearMarkers()

        for (const p of points) {
          const el = document.createElement("div")

          const SIZE = 14

          el.style.width = `${SIZE}px`
          el.style.height = `${SIZE}px`

          el.style.background = "white"
          el.style.border = "2px solid rgba(0,0,0,0.25)"
          el.style.borderRadius = "50% 50% 50% 0"
          el.style.transform = "rotate(-45deg)"
          el.style.boxShadow = "0 2px 10px rgba(0,0,0,0.18)"
          el.style.cursor = "pointer"
          el.style.position = "relative"
          el.style.transformOrigin = "50% 50%"

          const dot = document.createElement("div")
          dot.style.width = "6px"
          dot.style.height = "6px"
          dot.style.background = "white"
          dot.style.border = "2px solid rgba(0,0,0,0.25)"
          dot.style.borderRadius = "9999px"
          dot.style.position = "absolute"
          dot.style.left = "50%"
          dot.style.top = "50%"
          dot.style.transform = "translate(-50%, -50%) rotate(45deg)"
          dot.style.boxSizing = "border-box"

          el.appendChild(dot)

          el.title = p.name ?? p.address ?? `Point ${p.id}`

          el.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation()
            onSelectPointRef.current(p.id)
          })

          const marker = new YMapMarker({ coordinates: [p.lng, p.lat] }, el)
          map.addChild(marker)
          markersRef.current.set(p.id, { marker, el })
        }
      })()

    return () => {
      cancelled = true
    }
  }, [points, clearMarkers, onSelectPointRef])

  useEffect(() => {
    for (const [id, { el }] of markersRef.current.entries()) {
      const sel = id === selectedPointId

      el.style.background = sel ? "#3b82f6" : "white"
      el.style.border = sel ? "2px solid #1d4ed8" : "2px solid rgba(0,0,0,0.25)"

      const dot = el.firstElementChild as HTMLElement | null
      if (dot) {
        dot.style.background = sel ? "white" : "white"
        dot.style.border = sel ? "2px solid rgba(255,255,255,0.95)" : "2px solid rgba(0,0,0,0.25)"
      }
    }
  }, [selectedPointId])

  const showNoPoints = !isLoading && points.length === 0

  return (
    <div className="w-full">
      <div className="relative rounded-rounded overflow-hidden border">
        <div ref={containerRef} style={{ width: "100%", height: 520 }} />

        {isLoading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <Text className="text-ui-fg-muted">Loading pickup points…</Text>
          </div>
        )}

        {showNoPoints && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <Text className="text-ui-fg-muted">No pickup points found for this shipping method.</Text>
          </div>
        )}

        {activePoint && isPanelOpen && !showNoPoints && (
          <div className="absolute left-3 top-3 right-3 md:right-auto md:w-[460px] rounded-rounded border bg-white/95 p-4 shadow">
            <button
              type="button"
              aria-label="Close"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onClosePanel()
              }}
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border bg-white/70 text-ui-fg-subtle hover:bg-white"
            >
              ✕
            </button>

            <Text className="txt-medium-plus">{activePoint.name || `Point #${activePoint.id}`}</Text>
            {activePoint.address && <Text className="text-ui-fg-muted mt-1">{activePoint.address}</Text>}

            <div className="mt-3">
              <Text className="txt-medium-plus">Tariffs</Text>

              {activeTariffs.length ? (
                <div className="mt-2 flex flex-col gap-2 max-h-[220px] overflow-auto p-1">
                  {activeTariffs.map((t) => {
                    const active = t.key === selectedTariffKey
                    const cost = typeof t.deliveryCostOriginal === "number" ? t.deliveryCostOriginal : t.deliveryCost
                    const price = typeof cost === "number" ? money(cost, currencyCode) : "—"

                    return (
                      <button
                        key={t.key}
                        type="button"
                        onClick={() => onSelectTariff(t.key)}
                        className={clx(
                          "box-border text-left rounded-rounded border px-3 py-2 hover:shadow-borders-interactive-with-active",
                          { "border-ui-border-interactive bg-ui-bg-subtle": active }
                        )}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <Text className="txt-small-plus">
                            {t.tariffName || "Tariff"} <span className="text-ui-fg-muted">({t.providerKey})</span>
                          </Text>
                          <Text className="txt-small-plus">{price}</Text>
                        </div>
                        <Text className="text-ui-fg-muted mt-1 txt-small">Delivery time: {days(t)}</Text>
                      </button>
                    )
                  })}
                </div>
              ) : (
                <Text className="text-ui-fg-muted mt-2">There are no tariffs for this point.</Text>
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
                <Text className="text-ui-fg-muted txt-small">Select a tariff to confirm your choice.</Text>
              )}
            </div>
          </div>
        )}
      </div>

      {!activePoint && !showNoPoints && !isLoading && (
        <Text className="text-ui-fg-muted mt-2">Click on a point on the map to select a pickup point.</Text>
      )}
    </div>
  )
}

export default ApishipMap
