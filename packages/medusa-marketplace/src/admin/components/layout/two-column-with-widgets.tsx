import { ReactNode } from "react"
import { MarketplaceInjectionZone } from "../../../types"
import { useWidgets } from "../../providers/widget-provider"

export interface WidgetProps {
  before: MarketplaceInjectionZone
  after: MarketplaceInjectionZone
}

export interface TwoColumnLayoutProps<TData> {
  firstCol: ReactNode
  secondCol: ReactNode
  widgetsZone: WidgetProps
  data?: TData
}

export const TwoColumnLayoutWithWidgets = <TData,>({
  firstCol,
  secondCol,
  widgetsZone,
  data,
}: TwoColumnLayoutProps<TData>) => {
  const { before, after } = widgetsZone
  const widgetProps = { data }
  const { getWidgets } = useWidgets()

  return (
    <div className="flex flex-col gap-y-3 xl:flex-row xl:gap-x-4 xl:items-start">
      <div className="flex w-full flex-col gap-y-3">
        {getWidgets(before).map((Component, i) => (
          <Component {...widgetProps} key={`before-${i}`} />
        ))}
        {firstCol}
        {getWidgets(after).map((Component, i) => (
          <Component {...widgetProps} key={`after-${i}`} />
        ))}
      </div>

      <div className="flex w-full max-w-[100%] flex-col gap-y-3 xl:mt-0 xl:max-w-[440px]">
        {secondCol}
      </div>
    </div>
  )
}
