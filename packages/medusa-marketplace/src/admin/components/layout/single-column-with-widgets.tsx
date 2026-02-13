import { ReactNode } from "react"
import { MarketplaceInjectionZone } from "../../../types"
import { useWidgets } from "../../providers/widget-provider"

export interface WidgetProps {
  before: MarketplaceInjectionZone
  after: MarketplaceInjectionZone
}

export interface PageProps<TData> {
  children: ReactNode
  widgetsZone: WidgetProps
  data?: TData
}

export const SingleColumnLayoutWithWidgets = <TData,>({
  children,
  widgetsZone,
  data
}: PageProps<TData>) => {
  const { before, after } = widgetsZone
  const widgetProps = { data }
  const { getWidgets } = useWidgets()

  return (
    <div className="flex flex-col gap-y-3">
      
      {getWidgets(before).map((Component, i) => {
        return <Component {...widgetProps} key={i} />
      })}
      {children}
      {getWidgets(after).map((Component, i) => {
        return <Component {...widgetProps} key={i} />
      })}
    </div>
  )
}
