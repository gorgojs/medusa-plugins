import clsx from "clsx"
import React, { Suspense, lazy } from "react"
import { Loading } from "./Loading"
import { BrowserProvider } from "./providers/BrowserProvider"
import { SiteConfigProvider } from "./providers/SiteConfig"

export type CommonProps = {
  expandUrl?: string
  sectionTitle?: string
  openedLevel?: number
}

export type MedusaType = {
  name: string
  type: string
  optional?: boolean
  defaultValue?: string
  example?: string
  description?: string
  featureFlag?: string
  expandable: boolean
  children?: MedusaType[]
  deprecated?: {
    is_deprecated: boolean
    description?: string
  }
  since?: string
}

type MedusaTypeListProps = {
  types: MedusaType[]
  sectionTitle?: string
} & CommonProps &
  React.HTMLAttributes<HTMLDivElement>

const TypeListItems = lazy(async () => import("./Items"))

export const MedusaTypeList = ({
  types,
  className,
  sectionTitle,
  expandUrl,
  openedLevel,
  ...props
}: MedusaTypeListProps) => {
  return (
    <BrowserProvider>
      <SiteConfigProvider>
        <div
          className={clsx(
            "bg-medusa-bg-subtle rounded-docs_lg my-docs_1",
            "shadow-elevation-card-rest dark:shadow-elevation-card-rest-dark",
            "not-prose",
            className
          )}
          {...props}
        >
          <Suspense fallback={<Loading />}>
            <TypeListItems
              types={types}
              expandUrl={expandUrl}
              sectionTitle={sectionTitle}
              openedLevel={openedLevel}
            />
          </Suspense>
        </div>
      </SiteConfigProvider>
    </BrowserProvider>
  )
}
