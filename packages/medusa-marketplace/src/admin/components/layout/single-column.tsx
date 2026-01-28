import { ComponentType, ReactNode } from "react"
import { useExtension } from "../extension-provider"
import { MarketplaceInjectionZone } from "../../../types"

// export interface WidgetProps {
//   before: ComponentType<any>[]
//   after: ComponentType<any>[]
// }

export interface WidgetProps {
  before: MarketplaceInjectionZone
  after: MarketplaceInjectionZone
}

// export interface PageProps<TData> {
//   children: ReactNode
//   widgets: WidgetProps
//   data?: TData
// }

export interface PageProps<TData> {
  children: ReactNode
  widgetsZone: WidgetProps
  data?: TData
}

export const SingleColumnLayout = <TData,>({
  children,
  widgetsZone,
  data
}: PageProps<TData>) => {
  const { before, after } = widgetsZone
  const widgetProps = { data }
  const { getWidgets } = useExtension()
  const widgetsBefore = getWidgets(before)
  const widgetsAafter = getWidgets(after)

  console.log("Widgets before: ", widgetsBefore)


  return (
    <div className="flex flex-col gap-y-3">
      
      {widgetsBefore.map((Component, i) => {
        return <Component {...widgetProps} key={i} />
      })}
      {children}
      {widgetsAafter.map((Component, i) => {
        return <Component {...widgetProps} key={i} />
      })}
    </div>
  )
}
