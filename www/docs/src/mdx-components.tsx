import { Copy, Table } from "@medusajs/ui";
import slugify from "@sindresorhus/slugify";
import type { MDXComponents } from "mdx/types";
import { CodeMdx } from "@/components/mdx/code-mdx";
import { cn } from "./lib/utils";
import HeadingLink from "./components/mdx/heading-link";

const generateId = (text: string) => {
  return slugify(text);
};

const components: MDXComponents = {
  h1: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <HeadingLink
        id={generateId(text)}
        Heading="h1"
        className={className}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  },
  h2: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <HeadingLink
        id={generateId(text)}
        Heading="h2"
        className={className}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  },
  h3: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <HeadingLink
        id={generateId(text)}
        Heading="h3"
        className={className}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  },
  h4: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <HeadingLink
        id={generateId(text)}
        Heading="h4"
        className={className}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  },
  h5: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <HeadingLink
        id={generateId(text)}
        Heading="h5"
        className={className}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  },
  h6: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <HeadingLink
        id={generateId(text)}
        Heading="h6"
        className={className}
        {...props}
      >
        {children}
      </HeadingLink>
    );
  },

  // table
  table: ({ children }) => (
    <div className="overflow-x-scroll border-x rounded-md not-prose ">
      <Table className="table-auto min-w-xl">{children}</Table>
    </div>
  ),
  tr: ({ children }) => (
    <Table.Row className="text-nowrap whitespace-nowrap">{children}</Table.Row>
  ),
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
