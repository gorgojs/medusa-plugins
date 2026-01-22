"use client"

import { Heading, Text } from "@medusajs/ui"
import { Chosen } from "./types"
import { days } from "./utils"

type ApishipChosenProps = {
  chosen: Chosen
  onRemove: () => void
  onEdit: () => void
}

export const ApishipChosen: React.FC<ApishipChosenProps> = ({
  chosen,
  onRemove,
  onEdit
}) => {
  const cost =
    typeof chosen.tariff.deliveryCostOriginal === "number"
      ? chosen.tariff.deliveryCostOriginal
      : chosen.tariff.deliveryCost

  const isToPoint = chosen.deliveryType === 2

  return (
    <div className="flex flex-col gap-4 mt-[32px]">
      <div className="flex flex-row justify-between">
        <Heading level="h2" className="txt-xlarge">
          {isToPoint ? "To the Pickup Point" : "By Courier"}
        </Heading>
        <div className="flex flex-row gap-[16px]">
          <Text>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onRemove()
              }}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
            >
              Remove
            </button>
          </Text>
          <Text>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onEdit()
              }}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
            >
              Edit
            </button>
          </Text>
        </div>
      </div>

      {isToPoint ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 w-[60%]">
            <div className="flex flex-col">
              <Text>{chosen.point?.name}</Text>
              {chosen.point?.address && (
                <Text className="text-ui-fg-muted">{chosen.point.address}</Text>
              )}
              {chosen.point?.timetable && (
                <Text className="text-ui-fg-muted">{chosen.point.timetable}</Text>
              )}
            </div>
            {chosen.point?.description && (
              <Text className="text-ui-fg-muted leading-none">{chosen.point.description}</Text>
            )}
          </div>
          <Text>
            {chosen.tariff.tariffName} · {`RUB ${cost ?? "—"}`}{days(chosen.tariff) ? ` · ${days(chosen.tariff)}` : ""}
          </Text>
        </div>
      ) : (
        <Text>
          {
            [chosen?.tariff?.tariffName,
            typeof cost === "number" ? `RUB ${cost}` : "RUB —",
            days?.(chosen?.tariff) || null,
            ].filter(Boolean).join(" · ")
          }
        </Text>
      )}
    </div>
  )
}
