import { ComponentType, ReactNode } from "react"

export interface WidgetProps {
  before: ComponentType<any>[]
  after: ComponentType<any>[]
}

export interface PageProps<TData> {
  children: ReactNode
  widgets: WidgetProps
  data?: TData
}

export const SingleColumnLayout = <TData,>({
  children,
  widgets,
  data
}: PageProps<TData>) => {
  const { before, after } = widgets
  const widgetProps = { data }

  return (
    <div className="flex flex-col gap-y-3">
      {before.map((Component, i) => {
        return <Component {...widgetProps} key={i} />
      })}
      {children}
      {after.map((Component, i) => {
        return <Component {...widgetProps} key={i} />
      })}
    </div>
  )
}
