"use client"

import { useCallback, useEffect, useMemo, useRef } from "react"
import { Button, Heading, Text, clx, IconButton } from "@medusajs/ui"
import { Loader, XMark } from "@medusajs/icons"
import { Radio, RadioGroup } from "@headlessui/react"
import MedusaRadio from "@modules/common/components/radio"
import {
  ApishipPoint,
  ApishipTariff
} from "./types"
import {
  days,
  useLatestRef
} from "./utils"

const DEFAULT_CENTER: [number, number] = [37.618423, 55.751244]

type ApishipMapProps = {
  points: ApishipPoint[]
  tariffsByPointId: Record<string, ApishipTariff[]>
  isLoading?: boolean
  selectedPointId: string | null
  selectedTariffKey: string | null
  isPanelOpen: boolean
  onClosePanel: () => void
  onSelectPoint: (id: string) => void
  onSelectTariff: (tariffKey: string) => void
  onChoose: (payload: { point: ApishipPoint; tariff: ApishipTariff }) => void
  chosen?: { pointId?: string; tariffKey?: string } | null
  providersMap: Record<string, string>
}

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const

const Schedule = ({ worktime }: { worktime: Record<string, string> }) => {
  if (!worktime || Object.keys(worktime).length === 0) return null
  return (
    <div className="flex flex-col gap-[1px]">
      {Object.keys(worktime).map((day) => {
        const label = WEEK_DAYS[Number(day) - 1]
        const time = worktime[day]
        return (
          <div className="flex flex-row justify-between" key={day}>
            <Text className="txt-medium text-ui-fg-subtle">
              {label}
            </Text>
            <Text className="text-ui-fg-muted">
              {time}
            </Text>
          </div>
        )
      })}
    </div>
  )
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

export const ApishipMap: React.FC<ApishipMapProps> = ({
  points,
  tariffsByPointId,
  isLoading,
  selectedPointId,
  selectedTariffKey,
  isPanelOpen,
  onClosePanel,
  onSelectPoint,
  onSelectTariff,
  onChoose,
  chosen,
  providersMap
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<Map<string, { marker: any; el: HTMLDivElement }>>(new Map())
  const initPromiseRef = useRef<Promise<void> | null>(null)

  const isSameAsChosen =
    !!chosen?.pointId &&
    !!chosen?.tariffKey &&
    chosen.pointId === selectedPointId &&
    chosen.tariffKey === selectedTariffKey

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

  const applySelectionStyles = useCallback(() => {
    for (const [id, { el }] of markersRef.current.entries()) {
      const sel = id === selectedPointId

      el.style.background = sel ? "#3b82f6" : "white"
      el.style.border = sel ? "2px solid #1d4ed8" : "2px solid rgba(0,0,0,0.25)"

      const dot = el.firstElementChild as HTMLElement | null
      if (dot) {
        dot.style.border = sel
          ? "2px solid rgba(255,255,255,0.95)"
          : "2px solid rgba(0,0,0,0.25)"
      }
    }
  }, [selectedPointId])

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

          const SIZE = 18

          el.style.width = `${SIZE}px`
          el.style.height = `${SIZE}px`

          el.style.background = "white"
          el.style.border = "2px solid rgba(0,0,0,0.25)"
          el.style.borderRadius = "50% 50% 50% 0"
          el.style.transform = "rotate(-45deg)"
          el.style.boxShadow = "0 2px 2px rgba(0,0,0,0.18)"
          el.style.cursor = "pointer"
          el.style.position = "relative"
          el.style.transformOrigin = "50% 50%"

          const dot = document.createElement("div")
          dot.style.width = "8px"
          dot.style.height = "8px"
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
        applySelectionStyles()
      })()

    return () => {
      cancelled = true
    }
  }, [points, clearMarkers, onSelectPointRef])

  useEffect(() => {
    applySelectionStyles()
  }, [applySelectionStyles])

  const showNoPoints = !isLoading && points.length === 0

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <Loader />
        </div>
      )}
      {showNoPoints && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <Text className="text-ui-fg-muted">No pickup points found for this shipping method.</Text>
        </div>
      )}
      {!isLoading && activePoint && isPanelOpen && !showNoPoints && (
        <div className="absolute left-0 top-0 z-[70] w-full md:w-[470px] h-full border-r bg-white flex flex-col min-h-0">
          <div className="flex flex-row justify-between p-[35px] pb-0 items-center">
            <Heading
              level="h2"
              className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
            >
              {`${providersMap?.[activePoint.providerKey ?? ""] ?? ""} pickup point`.trimStart()}
            </Heading>
            <IconButton
              aria-label="Close"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onClosePanel()
              }}
              className="shadow-none"
            >
              <XMark />
            </IconButton>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto p-[35px] pt-[18px] flex flex-col gap-[18px]">
            <div className="flex flex-col">
              <Text className="font-medium txt-medium text-ui-fg-base">
                {activePoint.name}
              </Text>
              <Text className="text-ui-fg-muted txt-medium">
                {activePoint.address}
              </Text>
            </div>

            <div className="flex flex-col gap-[10px]">
              <Text className="font-medium txt-medium text-ui-fg-base">Tariffs</Text>

              <RadioGroup className="flex flex-col gap-[10px]">
                {activeTariffs.map((t) => {
                  const active = t.key === selectedTariffKey
                  const cost =
                    typeof t.deliveryCostOriginal === "number"
                      ? t.deliveryCostOriginal
                      : t.deliveryCost

                  return (
                    <Radio
                      key={t.tariffId}
                      value={t.tariffId}
                      data-testid="delivery-option-radio"
                      onClick={() => {
                        onSelectTariff(t.key)
                      }}
                      className={clx(
                        "flex items-center justify-between text-small-regular cursor-pointer py-2 border rounded-rounded pl-2 pr-3 hover:shadow-borders-interactive-with-active",
                        { "border-ui-border-interactive": active }
                      )}
                    >
                      <div className="flex gap-2 w-full">
                        <MedusaRadio checked={active} />
                        <div className="flex flex-row w-full items-center justify-between">
                          <div className="flex flex-col">
                            <span className="txt-compact-small-plus">
                              {t.tariffName}
                            </span>
                            <span className="txt-small text-ui-fg-subtle">
                              Delivery time: {days(t)}
                            </span>
                          </div>
                          <span className="txt-small-plus text-ui-fg-subtle">
                            {`RUB ${cost}`}
                          </span>
                        </div>
                      </div>
                    </Radio>
                  )
                })}
              </RadioGroup>
            </div>
            <Button
              size="large"
              onClick={() => {
                if (!activePoint || !selectedTariff) return
                onChoose({ point: activePoint, tariff: selectedTariff })
              }}
              disabled={!selectedTariff || isSameAsChosen}
              className="w-full mb-[16px] !overflow-visible"
            >
              Choose
            </Button>
            {activePoint.worktime && (
              <div className="flex flex-col">
                <Text className="font-medium txt-medium text-ui-fg-base">
                  Schedule
                </Text>
                <Schedule worktime={activePoint.worktime} />
              </div>
            )}

            {!!activePoint.photos?.length && (
              <div className="flex flex-col gap-[10px]">
                <Text className="font-medium txt-medium text-ui-fg-base">Photos</Text>
                <div className="flex flex-row gap-[10px] overflow-x-auto">
                  {activePoint.photos.map((src, index) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={index}
                      src={src}
                      alt={`Photo ${index + 1} of pickup point`}
                      className="w-auto h-[120px] rounded-md border object-cover"
                    />
                  ))}
                </div>
              </div>
            )}

            {activePoint.description && (
              <div className="flex flex-col">
                <Text className="font-medium txt-medium text-ui-fg-base">
                  Description
                </Text>
                <Text className="text-ui-fg-muted txt-medium">
                  {activePoint.description}
                </Text>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
