"use client"

import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"

export type CollapsibleProps = {
  initialValue?: boolean
  heightAnimation?: boolean
  translateEnabled?: boolean
  onClose?: () => void
  unmountOnExit?: boolean
  childrenRef?: React.RefObject<HTMLElement | null>
  useChild?: boolean
}

export type CollapsibleReturn = {
  getCollapsibleElms: (children: React.ReactNode) => React.JSX.Element
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export const useCollapsible = ({
  initialValue = true,
  heightAnimation = false,
  translateEnabled = true,
  onClose,
  unmountOnExit = true,
  childrenRef,
  useChild = true,
}: CollapsibleProps): CollapsibleReturn => {
  const [collapsed, setCollapsed] = useState(initialValue)

  const getNodeFromChildrenRef = () => {
    if (!useChild) {
      return childrenRef?.current
    }

    return (
      (childrenRef?.current?.firstElementChild as HTMLElement) ||
      childrenRef?.current
    )
  }

  const getCollapsibleElms = (children: React.ReactNode) => {
    return (
      <CSSTransition
        unmountOnExit={unmountOnExit}
        in={!collapsed}
        timeout={150}
        nodeRef={childrenRef}
        onEnter={() => {
          const node = getNodeFromChildrenRef()
          if (!node) {
            return
          }

          if (heightAnimation) {
            node.classList.add("transition-[height]")
            node.style.height = `0px`
          } else {
            node.classList.add("!mb-docs_2", "!mt-0")
            if (translateEnabled) {
              node.classList.add("translate-y-docs_1", "transition-transform")
            }
          }
        }}
        onEntering={() => {
          const node = getNodeFromChildrenRef()
          if (!node) {
            return
          }

          if (heightAnimation) {
            node.style.height = `${node.scrollHeight}px`
          }
        }}
        onEntered={() => {
          const node = getNodeFromChildrenRef()
          if (!node) {
            return
          }

          if (heightAnimation) {
            node.style.height = `auto`
          }
        }}
        onExit={() => {
          const node = getNodeFromChildrenRef()
          if (!node) {
            return
          }

          if (heightAnimation) {
            node.style.height = `${node.scrollHeight}px`
          } else {
            if (translateEnabled) {
              node.classList.add("transition-transform", "!-translate-y-docs_1")
            }
            setTimeout(() => {
              onClose?.()
            }, 100)
          }
        }}
        onExiting={() => {
          const node = getNodeFromChildrenRef()
          if (!node) {
            return
          }

          if (heightAnimation) {
            node.style.height = `0px`
            setTimeout(() => {
              onClose?.()
            }, 100)
          }
        }}
      >
        {children}
      </CSSTransition>
    )
  }

  return {
    getCollapsibleElms,
    collapsed,
    setCollapsed,
  }
}
