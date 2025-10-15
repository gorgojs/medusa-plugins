import { ReactNode } from "react"
import { MarketplaceInjectionZone } from "../../../types"
import { useWidgets } from "../../providers/widget-provider"
import { JsonViewSection } from "../common/json-view-section"

export interface WidgetProps {
  before: MarketplaceInjectionZone
  after: MarketplaceInjectionZone
}


export interface PageProps<TData> {
  children: ReactNode
  widgets: WidgetProps
  data?: TData
  showJSON?: boolean
}

export const SingleColumnPageWithWidgets = <TData,>({
  children,
  widgets,
  /**
   * Data of the page which is passed to Widgets, JSON view, and Metadata view.
   */
  data,
  /**
   * Whether to show JSON view of the data. Defaults to false.
   */
  showJSON
}: PageProps<TData>) => {
  const { before, after } = widgets
  const widgetProps = { data }
  const { getWidgets } = useWidgets()

  if (showJSON && !data) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "`showJSON` is true but no data is provided. To display JSON, provide data prop."
      )
    }

    showJSON = false
  }

  return (
    <div className="flex flex-col gap-y-3">
      {getWidgets(before).map((Component, i) => {
        return <Component {...widgetProps} key={i} />
      })}
      {children}
      {getWidgets(after).map((Component, i) => {
        return <Component {...widgetProps} key={i} />
      })}
      {showJSON && <JsonViewSection data={data!} />}
    </div>
  )
}
