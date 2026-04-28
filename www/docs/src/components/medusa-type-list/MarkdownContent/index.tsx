import React from "react"
import ReactMarkdown, {
  Options as ReactMarkdownOptions,
  Components,
} from "react-markdown"
import clsx from "clsx"

const defaultComponents: Components = {
  a: ({ href, children, className, ...props }) => (
    <a
      href={href}
      className={clsx(
        "text-medusa-fg-interactive hover:text-medusa-fg-interactive-hover",
        className
      )}
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, className, ...props }) => (
    <strong className={clsx("txt-medium-plus", className)} {...props}>
      {children}
    </strong>
  ),
  code: ({ children, className, ...props }) => (
    <code
      className={clsx(
        "text-medusa-tag-neutral-text bg-medusa-tag-neutral-bg border border-medusa-tag-neutral-border",
        "font-monospace text-code-label rounded-docs_sm py-0 px-[5px]",
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  ul: ({ children, className, ...props }) => (
    <ul
      className={clsx("list-disc px-docs_1 mb-docs_1.5", className)}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, className, ...props }) => (
    <ol
      className={clsx("list-decimal px-docs_1 mb-docs_1.5", className)}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, className, ...props }) => (
    <li className={clsx("text-medusa-fg-base", className)} {...props}>
      {children}
    </li>
  ),
  pre: ({ children, className, ...props }) => (
    <pre className={clsx("p-0 bg-transparent", className)} {...props}>
      {children}
    </pre>
  ),
}

export type MarkdownContentProps = ReactMarkdownOptions & {
  components?: Partial<Components> | null | undefined
}

export const MarkdownContent = ({
  children,
  components,
  ...props
}: MarkdownContentProps) => {
  return (
    <ReactMarkdown
      components={components || defaultComponents}
      {...props}
    >
      {children}
    </ReactMarkdown>
  )
}
