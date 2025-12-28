"use client"

import { Radio, RadioGroup } from "@headlessui/react"
import { setShippingMethod } from "@lib/data/cart"
import {
  calculatePriceForShippingOption,
  retrieveCalculation,
  getPointAddresses,
} from "@lib/data/fulfillment"
import { convertToLocale } from "@lib/util/money"
import { CheckCircleSolid, Loader } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import { Button, clx, Heading, Text } from "@medusajs/ui"
import ErrorMessage from "@modules/checkout/components/error-message"
import Divider from "@modules/common/components/divider"
import MedusaRadio from "@modules/common/components/radio"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import ApishipYandexMapV3, {
  ApishipPoint,
  ApishipTariffForPoint,
} from "./apiship-yandex-map-v3"

const PICKUP_OPTION_ON = "__PICKUP_ON"
const PICKUP_OPTION_OFF = "__PICKUP_OFF"

type ShippingProps = {
  cart: HttpTypes.StoreCart
  availableShippingMethods: HttpTypes.StoreCartShippingOption[] | null
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

function buildTariffsByPointId(calculation?: ApishipCalculation | null) {
  const map: Record<string, ApishipTariffForPoint[]> = {}

  calculation?.deliveryToPoint?.forEach((block) => {
    const providerKey = block.providerKey

    block.tariffs?.forEach((tariff) => {
      const pointIds = tariff.pointIds ?? []
      pointIds.forEach((pid) => {
        const pointId = String(pid)

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

        if (!map[pointId]) map[pointId] = []

        // dedupe within a point
        if (!map[pointId].some((t) => t.key === key)) {
          map[pointId].push(entry)
        }
      })
    })
  })

  return map
}

function extractPointIdsFromTariffsMap(
  tariffsByPointId: Record<string, ApishipTariffForPoint[]>
) {
  return Object.keys(tariffsByPointId)
    .map((id) => Number(id))
    .filter(Number.isFinite)
}

function formatAddress(address: HttpTypes.StoreCartAddress) {
  if (!address) return ""

  let ret = ""
  if (address.address_1) ret += ` ${address.address_1}`
  if (address.address_2) ret += `, ${address.address_2}`
  if (address.postal_code) ret += `, ${address.postal_code} ${address.city}`
  if (address.country_code) ret += `, ${address.country_code.toUpperCase()}`
  return ret
}

const Shipping: React.FC<ShippingProps> = ({ cart, availableShippingMethods }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPrices, setIsLoadingPrices] = useState(true)

  const [showPickupOptions, setShowPickupOptions] =
    useState<string>(PICKUP_OPTION_OFF)
  const [calculatedPricesMap, setCalculatedPricesMap] = useState<
    Record<string, number>
  >({})
  const [error, setError] = useState<string | null>(null)
  const [shippingMethodId, setShippingMethodId] = useState<string | null>(
    cart.shipping_methods?.at(-1)?.shipping_option_id || null
  )

  const [isLoadingPoints, setIsLoadingPoints] = useState(false)
  const [apishipPoints, setApishipPoints] = useState<ApishipPoint[]>([])
  const [tariffsByPointId, setTariffsByPointId] = useState<
    Record<string, ApishipTariffForPoint[]>
  >({})

  const [selectedPointId, setSelectedPointId] = useState<string | null>(null)
  const [selectedTariffKey, setSelectedTariffKey] = useState<string | null>(
    null
  )
  const [chosen, setChosen] = useState<{
    pointId: string
    pointLabel: string
    tariffKey: string
    tariffLabel: string
    priceLabel: string
    daysLabel: string
    apiship?: {
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
  } | null>(null)

  const [activeToPointOptionId, setActiveToPointOptionId] = useState<string | null>(
    null
  )

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "delivery"

  const _shippingMethods = availableShippingMethods?.filter(
    (sm) => sm.service_zone?.fulfillment_set?.type !== "pickup"
  )

  const _pickupMethods = availableShippingMethods?.filter(
    (sm) => sm.service_zone?.fulfillment_set?.type === "pickup"
  )

  const hasPickupOptions = !!_pickupMethods?.length

  useEffect(() => {
    setIsLoadingPrices(true)

    if (_shippingMethods?.length) {
      const promises = _shippingMethods
        .filter((sm) => sm.price_type === "calculated")
        .map(async (sm) => {
          const calculation = (await retrieveCalculation(cart.id, sm.id)) as any
          console.log(`Calculation to ${sm.name}`, calculation)

          return calculatePriceForShippingOption(sm.id, cart.id)
        })

      if (promises.length) {
        Promise.allSettled(promises).then((res) => {
          const pricesMap: Record<string, number> = {}
          res
            .filter((r) => r.status === "fulfilled")
            .forEach((p) => (pricesMap[p.value?.id || ""] = p.value?.amount!))

          setCalculatedPricesMap(pricesMap)
          setIsLoadingPrices(false)
        })
      } else {
        setIsLoadingPrices(false)
      }
    } else {
      setIsLoadingPrices(false)
    }

    if (_pickupMethods?.find((m) => m.id === shippingMethodId)) {
      setShowPickupOptions(PICKUP_OPTION_ON)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableShippingMethods])

  const handleEdit = () => {
    router.push(pathname + "?step=delivery", { scroll: false })
  }

  const handleSubmit = async () => {
    setError(null)
    try {
      setIsLoading(true)
      if (shouldShowApishipMap) {
        if (!chosen || !shippingMethodId) return
        await setShippingMethod({
          cartId: cart.id,
          shippingMethodId,
          data: {
            apiship: chosen.apiship,
          },
        })
      }

      router.push(pathname + "?step=payment", { scroll: false })
    } catch (e: any) {
      setError(e?.message ?? "Failed to save delivery selection")
    } finally {
      setIsLoading(false)
    }
  }

  const resetToPointSelection = () => {
    setSelectedPointId(null)
    setSelectedTariffKey(null)
    setChosen(null)
  }

  const handleSetShippingMethod = async (
    id: string,
    variant: "shipping" | "pickup"
  ) => {
    setError(null)

    if (variant === "pickup") {
      setShowPickupOptions(PICKUP_OPTION_ON)

      setActiveToPointOptionId(null)
      setApishipPoints([])
      setTariffsByPointId({})
      resetToPointSelection()
    } else {
      setShowPickupOptions(PICKUP_OPTION_OFF)
    }

    let currentId: string | null = null
    setIsLoading(true)
    setShippingMethodId((prev) => {
      currentId = prev
      return id
    })

    try {
      await setShippingMethod({ cartId: cart.id, shippingMethodId: id })

      if (variant === "shipping") {
        resetToPointSelection()

        const option = _shippingMethods?.find((sm) => sm.id === id)

        if (option?.price_type === "calculated" && (option as any).data?.deliveryType === 2) {
          setIsLoadingPoints(true)
          setActiveToPointOptionId(option.id)
          setApishipPoints([])
          setTariffsByPointId({})

          try {
            const calculation = (await retrieveCalculation(
              cart.id,
              id
            )) as ApishipCalculation

            const tariffsMap = buildTariffsByPointId(calculation)
            setTariffsByPointId(tariffsMap)

            const pointIds = extractPointIdsFromTariffsMap(tariffsMap)

            if (pointIds.length) {
              const resp = (await getPointAddresses(cart.id, option.id, pointIds)) as {
                points: ApishipPoint[]
              }
              setApishipPoints(resp?.points ?? [])
            } else {
              setApishipPoints([])
            }
          } catch (e) {
            console.error("Failed to load pickup points/tariffs for option", id, e)
            setApishipPoints([])
            setTariffsByPointId({})
          } finally {
            setIsLoadingPoints(false)
          }
        } else {
          setActiveToPointOptionId(null)
          setApishipPoints([])
          setTariffsByPointId({})
          resetToPointSelection()
          setIsLoadingPoints(false)
        }
      }
    } catch (err: any) {
      setShippingMethodId(currentId)
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  const shouldShowApishipMap = useMemo(() => {
    return isOpen && !!activeToPointOptionId && shippingMethodId === activeToPointOptionId
  }, [isOpen, activeToPointOptionId, shippingMethodId])

  const canContinue = !!cart.shipping_methods?.[0] && (!shouldShowApishipMap || !!chosen)

  const renderApishipInsert = () => {
    if (!shouldShowApishipMap) return null

    return (
      <div className="mt-2 mb-2">
        <div className="mt-6">
          <span className="font-medium txt-medium text-ui-fg-base">Пункт выдачи</span>
          <span className="mb-4 text-ui-fg-muted txt-medium block">
            Выберите ПВЗ и тариф
          </span>

          <ApishipYandexMapV3
            points={apishipPoints}
            tariffsByPointId={tariffsByPointId}
            isLoading={isLoadingPoints}
            currencyCode={cart.currency_code}
            selectedPointId={selectedPointId}
            selectedTariffKey={selectedTariffKey}
            onSelectPoint={(pid) => {
              setSelectedPointId(pid)
              setSelectedTariffKey(null)
              setChosen(null)
            }}
            onSelectTariff={(key) => {
              setSelectedTariffKey(key)
              setChosen(null)
            }}
            onClearSelection={() => {
              setSelectedPointId(null)
              setSelectedTariffKey(null)
              setChosen(null)
            }}
            onChoose={({ point, tariff }) => {
              setChosen({
                pointId: point.id,
                pointLabel: point.name || point.address || `ПВЗ #${point.id}`,
                tariffKey: tariff.key,
                tariffLabel: `${tariff.tariffName || "Tariff"} (${tariff.providerKey})`,
                priceLabel:
                  typeof tariff.deliveryCost === "number"
                    ? new Intl.NumberFormat("ru-RU", {
                        style: "currency",
                        currency: cart.currency_code.toUpperCase(),
                        maximumFractionDigits: 2,
                      }).format(tariff.deliveryCost)
                    : "—",
                daysLabel:
                  tariff.daysMin && tariff.daysMax
                    ? tariff.daysMin === tariff.daysMax
                      ? `${tariff.daysMin} дн.`
                      : `${tariff.daysMin}–${tariff.daysMax} дн.`
                    : "—",
                apiship: {
                  pointId: point.id,
                  pointProviderKey: point.providerKey,
                  tariffKey: tariff.key,
                  tariffId: tariff.tariffId,
                  tariffProviderId: tariff.tariffProviderId,
                  tariffProviderKey: tariff.providerKey,
                  deliveryCost: tariff.deliveryCost,
                  daysMin: tariff.daysMin,
                  daysMax: tariff.daysMax,
                },
              })
            }}
          />

          {chosen && (
            <div className="mt-4 rounded-rounded border p-4">
              <Text className="txt-medium-plus">Выбрано</Text>
              <Text className="text-ui-fg-muted mt-1">{chosen.pointLabel}</Text>
              <Text className="text-ui-fg-muted mt-1">
                {chosen.tariffLabel} · {chosen.priceLabel} · {chosen.daysLabel}
              </Text>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && cart.shipping_methods?.length === 0,
            }
          )}
        >
          Delivery
          {!isOpen && (cart.shipping_methods?.length ?? 0) > 0 && (
            <CheckCircleSolid />
          )}
        </Heading>

        {!isOpen && cart?.shipping_address && cart?.billing_address && cart?.email && (
          <Text>
            <button
              onClick={handleEdit}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
              data-testid="edit-delivery-button"
            >
              Edit
            </button>
          </Text>
        )}
      </div>

      {isOpen ? (
        <>
          <div className="grid">
            <div className="flex flex-col">
              <span className="font-medium txt-medium text-ui-fg-base">
                Shipping method
              </span>
              <span className="mb-4 text-ui-fg-muted txt-medium">
                How would you like you order delivered
              </span>
            </div>

            <div data-testid="delivery-options-container">
              <div className="pb-8 md:pt-0 pt-2">
                {hasPickupOptions && (
                  <RadioGroup
                    value={showPickupOptions}
                    onChange={() => {
                      const id = _pickupMethods.find(
                        (option) => !option.insufficient_inventory
                      )?.id
                      if (id) handleSetShippingMethod(id, "pickup")
                    }}
                  >
                    <Radio
                      value={PICKUP_OPTION_ON}
                      data-testid="delivery-option-radio"
                      className={clx(
                        "flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
                        {
                          "border-ui-border-interactive":
                            showPickupOptions === PICKUP_OPTION_ON,
                        }
                      )}
                    >
                      <div className="flex items-center gap-x-4">
                        <MedusaRadio checked={showPickupOptions === PICKUP_OPTION_ON} />
                        <span className="text-base-regular">Pick up your order</span>
                      </div>
                      <span className="justify-self-end text-ui-fg-base">-</span>
                    </Radio>
                  </RadioGroup>
                )}

                <RadioGroup
                  value={shippingMethodId}
                  onChange={(v) => {
                    if (v) return handleSetShippingMethod(v, "shipping")
                  }}
                >
                  {_shippingMethods?.map((option, idx) => {
                    const isDisabled =
                      option.price_type === "calculated" &&
                      !isLoadingPrices &&
                      typeof calculatedPricesMap[option.id] !== "number"

                    const isSelected = option.id === shippingMethodId

                    const shouldInsertAfterThis =
                      shouldShowApishipMap && option.id === activeToPointOptionId && isSelected

                    return (
                      <div key={option.id}>
                        <Radio
                          value={option.id}
                          data-testid="delivery-option-radio"
                          disabled={isDisabled}
                          className={clx(
                            "flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
                            {
                              "border-ui-border-interactive": isSelected,
                              "hover:shadow-brders-none cursor-not-allowed":
                                isDisabled,
                            }
                          )}
                        >
                          <div className="flex items-center gap-x-4">
                            <MedusaRadio checked={isSelected} />
                            <span className="text-base-regular">{option.name}</span>
                          </div>
                          <span className="justify-self-end text-ui-fg-base">
                            {option.price_type === "flat" ? (
                              convertToLocale({
                                amount: option.amount!,
                                currency_code: cart?.currency_code,
                              })
                            ) : calculatedPricesMap[option.id] ? (
                              convertToLocale({
                                amount: calculatedPricesMap[option.id],
                                currency_code: cart?.currency_code,
                              })
                            ) : isLoadingPrices ? (
                              <Loader />
                            ) : (
                              "-"
                            )}
                          </span>
                        </Radio>
                        {shouldInsertAfterThis ? renderApishipInsert() : null}
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>
            </div>
          </div>

          {showPickupOptions === PICKUP_OPTION_ON && (
            <div className="grid">
              <div className="flex flex-col">
                <span className="font-medium txt-medium text-ui-fg-base">Store</span>
                <span className="mb-4 text-ui-fg-muted txt-medium">Choose a store near you</span>
              </div>
              <div data-testid="delivery-options-container">
                <div className="pb-8 md:pt-0 pt-2">
                  <RadioGroup
                    value={shippingMethodId}
                    onChange={(v) => {
                      if (v) return handleSetShippingMethod(v, "pickup")
                    }}
                  >
                    {_pickupMethods?.map((option) => (
                      <Radio
                        key={option.id}
                        value={option.id}
                        disabled={option.insufficient_inventory}
                        data-testid="delivery-option-radio"
                        className={clx(
                          "flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
                          {
                            "border-ui-border-interactive": option.id === shippingMethodId,
                            "hover:shadow-brders-none cursor-not-allowed":
                              option.insufficient_inventory,
                          }
                        )}
                      >
                        <div className="flex items-start gap-x-4">
                          <MedusaRadio checked={option.id === shippingMethodId} />
                          <div className="flex flex-col">
                            <span className="text-base-regular">{option.name}</span>
                            <span className="text-base-regular text-ui-fg-muted">
                              {formatAddress(option.service_zone?.fulfillment_set?.location?.address)}
                            </span>
                          </div>
                        </div>
                        <span className="justify-self-end text-ui-fg-base">
                          {convertToLocale({
                            amount: option.amount!,
                            currency_code: cart?.currency_code,
                          })}
                        </span>
                      </Radio>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          <div>
            <ErrorMessage error={error} data-testid="delivery-option-error-message" />

            <Button
              size="large"
              className="mt"
              onClick={handleSubmit}
              isLoading={isLoading}
              disabled={!canContinue}
              data-testid="submit-delivery-option-button"
            >
              Continue to payment
            </Button>

            {shouldShowApishipMap && !chosen && (
              <Text className="text-ui-fg-muted mt-2">
                Чтобы продолжить, выбери ПВЗ и нажми <b>Choose</b> на нужном тарифе.
              </Text>
            )}
          </div>
        </>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && (cart.shipping_methods?.length ?? 0) > 0 && (
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium-plus text-ui-fg-base mb-1">Method</Text>
                <Text className="txt-medium text-ui-fg-subtle">
                  {cart.shipping_methods!.at(-1)!.name}{" "}
                  {convertToLocale({
                    amount: cart.shipping_methods!.at(-1)!.amount!,
                    currency_code: cart?.currency_code,
                  })}
                </Text>
              </div>
            )}
          </div>
        </div>
      )}

      <Divider className="mt-8" />
    </div>
  )
}

export default Shipping