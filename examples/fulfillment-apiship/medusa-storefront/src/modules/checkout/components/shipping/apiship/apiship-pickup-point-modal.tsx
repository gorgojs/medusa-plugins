"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { IconButton } from "@medusajs/ui"
import { XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { setShippingMethod } from "@lib/data/cart"
import {
  calculatePriceForShippingOption,
  retrieveCalculation,
  getPointAddresses,
} from "@lib/data/fulfillment"
import { ApishipMap } from "./apiship-map"
import {
  ApishipCalculation,
  ApishipPoint,
  ApishipTariff,
  Chosen
} from "./types"
import {
  buildTariffsByPointId,
  extractPointIds,
  useAsyncEffect,
  useLatestRef,
  useLockBodyScroll,
} from "./utils"

type ApishipPickupPointModalProps = {
  open: boolean
  onClose: (cancel?: boolean) => void
  cart: HttpTypes.StoreCart
  shippingOptionId: string | null
  initialChosen?: Chosen | null
  onPriceUpdate?: (shippingOptionId: string, amount: number) => void
  onError?: (message: string) => void
  onChosenChange: (chosen: Chosen | null) => void
  providersMap: Record<string, string>
}

export const ApishipPickupPointModal: React.FC<ApishipPickupPointModalProps> = ({
  open,
  onClose,
  cart,
  shippingOptionId,
  initialChosen,
  onPriceUpdate,
  onError,
  onChosenChange,
  providersMap
}) => {
  const onErrorRef = useLatestRef(onError)
  const onPriceRef = useLatestRef(onPriceUpdate)

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const [pinCloseInside, setPinCloseInside] = useState(false)

  const [isLoadingPoints, setIsLoadingPoints] = useState(false)
  const [points, setPoints] = useState<ApishipPoint[]>([])
  const [tariffsByPointId, setTariffsByPointId] = useState<Record<string, ApishipTariff[]>>({})

  const [selectedPointId, setSelectedPointId] = useState<string | null>(null)
  const [selectedTariffKey, setSelectedTariffKey] = useState<string | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return

    const OUTSIDE_POSITION_OFFSET_PX = 48
    const VIEWPORT_SAFE_MARGIN_PX = 8
    const SWITCH_BACK_HYSTERESIS_PX = 24

    let animationFrameId = 0

    const updateCloseButtonPlacement = () => {
      cancelAnimationFrame(animationFrameId)

      animationFrameId = requestAnimationFrame(() => {
        const modalWrapperEl = wrapperRef.current
        if (!modalWrapperEl) return
        const wrapperRect = modalWrapperEl.getBoundingClientRect()
        const overflowRightPx =
          wrapperRect.right +
          OUTSIDE_POSITION_OFFSET_PX +
          VIEWPORT_SAFE_MARGIN_PX -
          window.innerWidth

        setPinCloseInside((isPinnedInside) => {
          if (!isPinnedInside) {
            return overflowRightPx > 0
          }
          return overflowRightPx > -SWITCH_BACK_HYSTERESIS_PX
        })
      })
    }

    updateCloseButtonPlacement()
    window.addEventListener("resize", updateCloseButtonPlacement)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", updateCloseButtonPlacement)
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    if (initialChosen?.deliveryType === 2) {
      setSelectedPointId(initialChosen.point?.id ?? null)
      setSelectedTariffKey(initialChosen.tariff?.key ?? null)
      setIsPanelOpen(true)
      return
    }

    setSelectedPointId(null)
    setSelectedTariffKey(null)
    setIsPanelOpen(false)
  }, [open, initialChosen, shippingOptionId])

  useEffect(() => {
    setSelectedPointId(null)
    setSelectedTariffKey(null)
    setIsPanelOpen(false)
  }, [shippingOptionId])

  useAsyncEffect(async (isCancelled) => {
    if (!open || !shippingOptionId) return

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

      const pointAddresses = (await getPointAddresses(cart.id, shippingOptionId, pointIds)) as { points: ApishipPoint[] }
      if (isCancelled()) return

      setPoints(pointAddresses?.points ?? [])
    } catch (e: any) {
      console.error(e)
      onErrorRef.current?.(e?.message ?? "Failed to load pickup points")
      setPoints([])
      setTariffsByPointId({})
    } finally {
      if (!isCancelled()) setIsLoadingPoints(false)
    }
  }, [open, shippingOptionId, cart.id])

  const persistChosen = useCallback(async (next: Chosen) => {
    if (!shippingOptionId) return

    await setShippingMethod({
      cartId: cart.id,
      shippingMethodId: shippingOptionId,
      data: { apishipData: next },
    })

    const calculation = await calculatePriceForShippingOption(shippingOptionId, cart.id)
    if (calculation?.id && typeof calculation.amount === "number") {
      onPriceRef.current?.(calculation.id, calculation.amount)
    }
  }, [cart.id, shippingOptionId, onPriceRef])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50"
      />
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose(initialChosen ? false : true)
        }}
      >
        <div className="relative" ref={wrapperRef}>
          <IconButton
            aria-label="Close"
            ref={closeButtonRef}
            onClick={() => onClose(initialChosen ? false : true)}
            className={pinCloseInside
              ? "absolute right-2 top-2 z-50 shadow-none border"
              : "absolute top-0 -right-12 z-50 shadow-none border"
            }
          >
            <XMark />
          </IconButton>
          <div
            className="
              h-[820px] w-[1350px]
              max-w-[calc(100vw-32px)] max-h-[calc(100vh-32px)]
              overflow-hidden rounded-rounded border bg-white
            "
          >
            <ApishipMap
              points={points}
              tariffsByPointId={tariffsByPointId}
              isLoading={isLoadingPoints}
              selectedPointId={selectedPointId}
              selectedTariffKey={selectedTariffKey}
              isPanelOpen={isPanelOpen}
              onClosePanel={() => {
                setIsPanelOpen(false)
                setSelectedPointId(null)
              }}
              onSelectPoint={(pid) => {
                setSelectedPointId(pid)
                setSelectedTariffKey(null)
                setIsPanelOpen(true)
              }}
              onSelectTariff={(key) => setSelectedTariffKey(key)}
              chosen={
                initialChosen?.deliveryType === 2
                  ? { pointId: initialChosen.point?.id, tariffKey: initialChosen.tariff?.key }
                  : null
              }
              onChoose={async ({ point, tariff }) => {
                const cost =
                  typeof tariff.deliveryCostOriginal === "number"
                    ? tariff.deliveryCostOriginal
                    : tariff.deliveryCost

                const chosen: Chosen = {
                  deliveryType: 2,
                  tariff,
                  point
                }
                try {
                  await persistChosen(chosen)
                  onChosenChange(chosen)
                  onClose()
                } catch (e: any) {
                  onErrorRef.current?.(e?.message ?? "Failed to save the selected tariff")
                }
              }}
              providersMap={providersMap}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
