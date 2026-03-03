import { Tooltip } from "@medusajs/ui"
import { PlaceholderCell } from "../placeholder-cell"

type DateCellProps = {
  date?: Date | string | null,
  mode?: "full" | "relative"
}

export const DateCell = ({ date, mode = "full" }: DateCellProps) => {

  if (!date) {
    return <PlaceholderCell />
  }

  let displayDate: string
  switch (mode) {
    case "full":
      break
    case "relative":
      break
  }

  return (
    <div className="flex h-full w-full items-center overflow-hidden">
      <Tooltip
        className="z-10"
        content={
          <span className="text-pretty">{``}</span>
        }
      >
        <span className="truncate">
          { }
        </span>
      </Tooltip>
    </div>
  )
}
