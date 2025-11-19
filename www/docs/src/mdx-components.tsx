import { Table } from "@medusajs/ui";
import type { MDXComponents } from "mdx/types";
import { CodeMdx } from "@/components/mdx/code-mdx";
import HeadingLink from "./components/mdx/heading-link";

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

  //code
  code: CodeMdx,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
