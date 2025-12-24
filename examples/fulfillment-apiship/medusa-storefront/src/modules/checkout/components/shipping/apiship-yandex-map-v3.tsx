"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button, Text } from "@medusajs/ui"

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

type Props = {
  points: ApishipPoint[]
  isLoading?: boolean
  selectedPointId: string | null
  onSelectPoint: (id: string) => void
  onChoose?: () => void
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
    // Если скрипт уже есть — просто дождемся ymaps3.ready ниже
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

export default function ApishipYandexMapV3({
  points,
  isLoading,
  selectedPointId,
  onSelectPoint,
  onChoose,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<Map<string, { marker: any; el: HTMLDivElement }>>(new Map())

  const [activePoint, setActivePoint] = useState<ApishipPoint | null>(null)

  const firstCenter = useMemo<[number, number]>(() => {
    const p = points?.[0]
    if (p) return [p.lng, p.lat]
    return [37.618423, 55.751244] // Москва
  }, [points])

  useEffect(() => {
    const sp = selectedPointId ? points.find((p) => p.id === selectedPointId) : null
    setActivePoint(sp ?? null)
  }, [selectedPointId, points])

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
          location: {
            center: firstCenter,
            zoom: 10,
          },
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

      for (const p of points) {
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

        const marker = new YMapMarker(
          { coordinates: [p.lng, p.lat] },
          el
        )

        map.addChild(marker)
        markersRef.current.set(p.id, { marker, el })
      }
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
    return <Text className="text-ui-fg-muted">Загрузка ПВЗ…</Text>
  }

  if (!points?.length) {
    return <Text className="text-ui-fg-muted">ПВЗ для этого способа доставки не найдены.</Text>
  }

  return (
    <div className="w-full">
      <div className="relative rounded-rounded overflow-hidden border">
        <div ref={containerRef} style={{ width: "100%", height: 420 }} />

        {activePoint && (
          <div className="absolute left-3 top-3 right-3 md:right-auto md:w-[420px] rounded-rounded border bg-white/95 p-4 shadow">
            <Text className="txt-medium-plus">
              {activePoint.name || `ПВЗ #${activePoint.id}`}
            </Text>
            {activePoint.address && (
              <Text className="text-ui-fg-muted mt-1">{activePoint.address}</Text>
            )}
            {(activePoint.phone || activePoint.providerKey) && (
              <Text className="text-ui-fg-muted mt-1">
                {activePoint.phone ? `📞 ${activePoint.phone}` : null}
                {activePoint.phone && activePoint.providerKey ? " · " : null}
                {activePoint.providerKey ? `Provider: ${activePoint.providerKey}` : null}
              </Text>
            )}

            {onChoose && (
              <div className="mt-3">
                <Button size="small" onClick={onChoose}>
                  Choose
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {!activePoint && (
        <Text className="text-ui-fg-muted mt-2">
          Кликни по точке на карте, чтобы выбрать ПВЗ.
        </Text>
      )}
    </div>
  )
}