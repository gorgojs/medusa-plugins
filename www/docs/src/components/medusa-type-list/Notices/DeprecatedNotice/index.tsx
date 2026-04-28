import React from "react"
import { Badge } from "../../Badge"
import { Tooltip } from "../../Tooltip"

export type DeprecatedNoticeProps = {
  description?: string
  tooltipTextClassName?: string
  badgeClassName?: string
  badgeContent?: React.ReactNode
}

export const DeprecatedNotice = ({
  description,
  tooltipTextClassName,
  badgeClassName,
  badgeContent = `Deprecated`,
}: DeprecatedNoticeProps) => {
  return (
    <Tooltip
      tooltipChildren={
        <span className={tooltipTextClassName}>
          {description ||
            "This feature is deprecated and may be removed in future releases."}
        </span>
      }
      clickable
    >
      <Badge variant="neutral" className={badgeClassName}>
        {badgeContent}
      </Badge>
    </Tooltip>
  )
}
