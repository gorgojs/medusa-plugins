import {
  ApishipCalculation,
  ApishipTariff,
} from "../apiship-types"
import { useEffect, useRef } from "react"

export function days(tariff: ApishipTariff) {
  const min = tariff.daysMin ?? 0
  const max = tariff.daysMax ?? 0
  if (!min && !max) return null
  if (min === max) return min === 1 ? `${min} day` : `${min} days`
  return `${min}–${max} days`
}

export function useLatestRef<T>(value: T) {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref
}

export function buildTariffKey (
  providerKey: string,
  tariff: Omit<ApishipTariff, "key" | "providerKey">,
  idx: number
) {
  return `${providerKey}:${tariff.tariffId ?? tariff.tariffProviderId ?? tariff.tariffName ?? idx}`
}

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const body = document.body
    const html = document.documentElement

    const prevBodyOverflow = body.style.overflow
    const prevBodyPaddingRight = body.style.paddingRight
    const prevHtmlOverflow = html.style.overflow

    const scrollbarWidth = window.innerWidth - html.clientWidth
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    body.style.overflow = "hidden"
    html.style.overflow = "hidden"

    return () => {
      body.style.overflow = prevBodyOverflow
      body.style.paddingRight = prevBodyPaddingRight
      html.style.overflow = prevHtmlOverflow
    }
  }, [locked])
}

export function useAsyncEffect(fn: (isCancelled: () => boolean) => Promise<void>, deps: any[]) {
  useEffect(() => {
    let cancelled = false
    const isCancelled = () => cancelled
    fn(isCancelled).catch((e) => console.error(e))
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export function buildTariffsByPointId(calculation?: ApishipCalculation | null) {
  const map: Record<string, ApishipTariff[]> = {}
  calculation?.deliveryToPoint?.forEach(({ providerKey, tariffs }) => {
    tariffs?.forEach((tariff) => {
      for (const pointId of tariff.pointIds ?? []) {
        const key = `${providerKey}:${tariff.tariffProviderId ?? ""}:${tariff.tariffId ?? ""}`
        const entry: ApishipTariff = { key, providerKey, ...tariff }
        const arr = (map[String(pointId)] ??= [])
        if (!arr.some((t) => t.key === key)) arr.push(entry)
      }
    })
  })
  return map
}

export function extractPointIds(map: Record<string, ApishipTariff[]>) {
  return Object.keys(map).map(Number).filter(Number.isFinite)
}
