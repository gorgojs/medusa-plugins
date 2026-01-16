import React from "react"
import { DropdownMenu, IconButton, clx } from "@medusajs/ui"
import { EllipsisHorizontal } from "@medusajs/icons"
import { Link } from "react-router-dom"

export type Action = {
  icon: React.ReactNode
  label: string
  disabled?: boolean
} & (
    | { to: string; onClick?: never }
    | { onClick: () => void; to?: never }
  )

export type ActionGroup = { actions: Action[] }
export type ActionMenuProps = { groups: ActionGroup[] }

export const ActionMenu = ({ groups }: ActionMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton
          size="small"
          variant="transparent"
          onClick={(e) => e.stopPropagation()}
        >
          <EllipsisHorizontal />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        {groups.map((group, index) => {
          if (!group.actions.length) return null

          const isLast = index === groups.length - 1

          return (
            <DropdownMenu.Group key={index}>
              {group.actions.map((action, idx) => {
                const itemClass = clx(
                  "text-ui-fg-subtle flex items-center gap-x-2",
                  { "text-ui-fg-disabled": action.disabled }
                )

                if ("onClick" in action) {
                  return (
                    <DropdownMenu.Item
                      key={idx}
                      disabled={action.disabled}
                      className={itemClass}
                      onClick={(e) => {
                        e.stopPropagation()
                        action.onClick()
                      }}
                    >
                      {action.icon}
                      <span>{action.label}</span>
                    </DropdownMenu.Item>
                  )
                }

                return (
                  <div key={idx}>
                    <DropdownMenu.Item
                      className={itemClass}
                      asChild
                      disabled={action.disabled}
                    >
                      <Link to={action.to} onClick={(e) => e.stopPropagation()}>
                        {action.icon}
                        <span>{action.label}</span>
                      </Link>
                    </DropdownMenu.Item>
                  </div>
                )
              })}

              {!isLast && <DropdownMenu.Separator />}
            </DropdownMenu.Group>
          )
        })}
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
