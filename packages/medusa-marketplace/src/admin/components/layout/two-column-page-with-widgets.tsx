import { ReactNode } from "react"
import { MarketplaceInjectionZone } from "../../../types"
import { useWidgets } from "../../providers/widget-provider"
import { JsonViewSection } from "../common/json-view-section"

export interface WidgetProps {
  before: MarketplaceInjectionZone
  after: MarketplaceInjectionZone
  sideBefore: MarketplaceInjectionZone
  sideAfter: MarketplaceInjectionZone
}

export interface PageProps<TData> {
  firstCol: ReactNode
  secondCol: ReactNode
  widgets: WidgetProps
  data?: TData
  showJSON?: boolean
}

export const TwoColumnPageWithWidgets = <TData,>({
  firstCol,
  secondCol,
  widgets,
  /**
   * Data of the page which is passed to Widgets, JSON view, and Metadata view.
   */
  data,
  /**
   * Whether to show JSON view of the data. Defaults to false.
   */
  showJSON,
}: PageProps<TData>) => {
  const { before, after, sideBefore, sideAfter } = widgets
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
          {getWidgets(sideBefore).map((Component, i) => (
            <Component {...widgetProps} key={`side-before-${i}`} />
          ))}
          {secondCol}
          {getWidgets(sideAfter).map((Component, i) => (
            <Component {...widgetProps} key={`side-after-${i}`} />
          ))}
        </div>
      </div>
      {showJSON && <JsonViewSection data={data!} />}
    </div>
  )
}
