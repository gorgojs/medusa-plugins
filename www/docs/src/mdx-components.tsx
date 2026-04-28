import { Table } from "@medusajs/ui";
import type { MDXComponents } from "mdx/types";
import { CodeMdx } from "@/components/mdx/code-mdx";
import HeadingLink from "./components/mdx/heading-link";
import { TypeList } from "@/components/ui/type-list";

const components: MDXComponents = {
  h1: ({ children, className, ...props }) => {
    return (
      <HeadingLink Heading="h1" className={className} {...props}>
        {children}
      </HeadingLink>
    );
  },
  h2: ({ children, className, ...props }) => {
    return (
      <HeadingLink Heading="h2" className={className} {...props}>
        {children}
      </HeadingLink>
    );
  },
  h3: ({ children, className, ...props }) => {
    return (
      <HeadingLink Heading="h3" className={className} {...props}>
        {children}
      </HeadingLink>
    );
  },
  h4: ({ children, className, ...props }) => {
    return (
      <HeadingLink Heading="h4" className={className} {...props}>
        {children}
      </HeadingLink>
    );
  },
  h5: ({ children, className, ...props }) => {
    return (
      <HeadingLink Heading="h5" className={className} {...props}>
        {children}
      </HeadingLink>
    );
  },
  h6: ({ children, className, ...props }) => {
    return (
      <HeadingLink Heading="h6" className={className} {...props}>
        {children}
      </HeadingLink>
    );
  },

  // table
  table: ({ children }) => (
    <div className="overflow-x-auto border-x rounded-md not-prose">
      <Table className="table-auto min-w-xl">{children}</Table>
    </div>
  ),
  tr: ({ children }) => <Table.Row>{children}</Table.Row>,
  td: ({ children }) => <Table.Cell>{children}</Table.Cell>,
  th: ({ children }) => <Table.HeaderCell>{children}</Table.HeaderCell>,
  tbody: ({ children }) => <Table.Body>{children}</Table.Body>,
  thead: ({ children }) => <Table.Header>{children}</Table.Header>,

  // lists
  ul: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-1">{children}</ol>,
  li: ({ children }) => <li className="text-ui-fg-base">{children}</li>,

  //code
  code: CodeMdx,

  // custom components available in all MDX files
  TypeList
};

export function useMDXComponents(): MDXComponents {
  return components;
}
