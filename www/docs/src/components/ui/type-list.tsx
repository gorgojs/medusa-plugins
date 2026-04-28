"use client"

import * as Collapsible from "@radix-ui/react-collapsible"
import { TriangleRightMini } from "@medusajs/icons"
import React, { useState } from "react"
import { cn } from "@/lib/utils"

export type Type = {
  name: string
  type: string
  optional?: boolean
  defaultValue?: string
  example?: string
  description?: string
  children?: Type[]
}

export type TypeListProps = {
  types: Type[]
  expandUrl?: string
  sectionTitle?: string
  openedLevel?: number
} & React.HTMLAttributes<HTMLDivElement>

function InlineMarkdown({ text }: { text: string }) {
  const lines = text.split(/\n/)
  const nodes: React.ReactNode[] = []
  let listItems: string[] = []

  const flushList = (key: string) => {
    if (listItems.length === 0) return
    nodes.push(
      <ul key={key} className="list-disc pl-4 space-y-0.5">
        {listItems.map((item, i) => (
          <li key={i} className="marker:text-ui-border-strong">{renderInline(item)}</li>
        ))}
      </ul>
    )
    listItems = []
  }

  lines.forEach((line, i) => {
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2))
    } else {
      flushList(`list-${i}`)
      if (nodes.length > 0) nodes.push(<br key={`br-${i}`} />)
      nodes.push(...renderInline(line))
    }
  })
  flushList("list-end")

  return <>{nodes}</>
}

function renderInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = []
  const regex = /(`[^`]+`|\*\*[^*]+\*\*)/g
  let lastIndex = 0
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    const m = match[0]
    if (m.startsWith("`")) {
      parts.push(
        <code
          key={match.index}
          className="text-ui-tag-neutral-text bg-ui-tag-neutral-bg border border-ui-tag-neutral-border font-monospace text-xs rounded-sm py-0 px-[5px]"
        >
          {m.slice(1, -1)}
        </code>
      )
    } else if (m.startsWith("**")) {
      parts.push(<strong key={match.index}>{m.slice(2, -2)}</strong>)
    }
    lastIndex = match.index + m.length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts
}

type TypeListItemProps = {
  typeItem: Type
  level?: number
  expandUrl?: string
  sectionTitle?: string
  openedLevel?: number
}

function TypeListItem({
  typeItem,
  level = 1,
  expandUrl,
  sectionTitle,
  openedLevel = 0,
}: TypeListItemProps) {
  const hasChildren = (typeItem.children?.length ?? 0) > 0
  const [open, setOpen] = useState(openedLevel >= level)

  const inlineCodeCn =
    "text-ui-tag-neutral-text bg-ui-tag-neutral-bg border border-ui-tag-neutral-border font-monospace text-xs rounded-sm py-0 px-[5px]"

  const borderCn = ""
  const paddingCn = level === 1 ? "pl-1 pr-docs_1" : "pl-4 pr-4"

  const header = (
    <div className="flex items-start gap-0.5">
      {hasChildren && (
        <TriangleRightMini
          className={cn(
            "text-ui-fg-subtle transition-transform mt-[18px] shrink-0",
            open && "rotate-90"
          )}
        />
      )}
      <div className={cn("my-4 flex flex-col gap-1.5", !hasChildren && "pl-[18px]")}>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <code className="font-monospace py-0 whitespace-nowrap">
            {typeItem.name}
          </code>
          <span className="font-monospace text-sm text-ui-fg-muted">
            {typeItem.type}
          </span>
          {typeItem.optional === true && (
            <span className="text-xs text-ui-tag-blue-text">
              optional
            </span>
          )}
        </div>
        {typeItem.description && (
          <span className="text-compact-small text-ui-fg-base">
            <InlineMarkdown text={typeItem.description} />
          </span>
        )}
        {typeItem.defaultValue && (
          <span className="text-compact-small text-ui-fg-base">
            Default: <code className={inlineCodeCn}>{typeItem.defaultValue}</code>
          </span>
        )}
        {typeItem.example && (
          <span className="text-compact-small text-ui-fg-base">
            Example: <code className={inlineCodeCn}>{typeItem.example}</code>
          </span>
        )}
      </div>
    </div>
  )

  if (hasChildren) {
    return (
      <Collapsible.Root
        open={open}
        onOpenChange={setOpen}
        className={cn(borderCn, paddingCn)}
      >
        <Collapsible.Trigger asChild>
          <div className="cursor-pointer">{header}</div>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <TypeListItems
            types={typeItem.children!}
            level={level + 1}
            expandUrl={expandUrl}
            openedLevel={openedLevel}
          />
        </Collapsible.Content>
      </Collapsible.Root>
    )
  }

  return (
    <div className={cn(borderCn, paddingCn)}>
      {header}
    </div>
  )
}

type TypeListItemsProps = {
  types: Type[]
  level?: number
  expandUrl?: string
  sectionTitle?: string
  openedLevel?: number
}

function TypeListItems({
  types,
  level = 1,
  expandUrl,
  sectionTitle,
  openedLevel,
}: TypeListItemsProps) {
  if (level > 1) {
    return (
      <div className="border border-ui-border-base bg-ui-bg-subtle rounded-md mx-2 mb-3 overflow-hidden py-2">
        {types.map((typeItem, key) => (
          <React.Fragment key={key}>
            {key > 0 && <div className="border-t border-ui-border-base mx-4" />}
            <TypeListItem
              typeItem={typeItem}
              level={level}
              expandUrl={expandUrl}
              sectionTitle={sectionTitle}
              openedLevel={openedLevel}
            />
          </React.Fragment>
        ))}
      </div>
    )
  }

  return (
    <div className="divide-y divide-ui-border-base">
      {types.map((typeItem, key) => (
        <TypeListItem
          key={key}
          typeItem={typeItem}
          level={level}
          expandUrl={expandUrl}
          sectionTitle={sectionTitle}
          openedLevel={openedLevel}
        />
      ))}
    </div>
  )
}

export function TypeList({
  types,
  className,
  sectionTitle,
  expandUrl,
  openedLevel,
  ...props
}: TypeListProps) {
  return (
    <div
      className={cn(
        "my-3 not-prose border-t border-b border-ui-border-base overflow-hidden",
        className
      )}
      {...props}
    >
      <TypeListItems
        types={types}
        expandUrl={expandUrl}
        sectionTitle={sectionTitle}
        openedLevel={openedLevel}
      />
    </div>
  )
}
