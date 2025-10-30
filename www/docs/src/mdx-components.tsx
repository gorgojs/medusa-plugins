import { Table } from "@medusajs/ui";
import slugify from "@sindresorhus/slugify";
import type { MDXComponents } from "mdx/types";
import { CodeMdx } from "@/components/mdx/code-mdx";
import { cn } from "./lib/utils";

const generateId = (text: string) => {
  return slugify(text);
};

const components: MDXComponents = {
  h1: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <h1
        id={generateId(text)}
        className={cn("scroll-m-28 lg:scroll-m-24", className)}
        {...props}
      >
        {children}
      </h1>
    );
  },
  h2: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <h2
        id={generateId(text)}
        className={cn("scroll-m-28 lg:scroll-m-24", className)}
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <h3
        id={generateId(text)}
        className={cn("scroll-m-28 lg:scroll-m-24", className)}
        {...props}
      >
        {children}
      </h3>
    );
  },
  h4: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <h4
        id={generateId(text)}
        className={cn("scroll-m-28 lg:scroll-m-24", className)}
        {...props}
      >
        {children}
      </h4>
    );
  },
  h5: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <h5
        id={generateId(text)}
        className={cn("scroll-m-28 lg:scroll-m-24", className)}
        {...props}
      >
        {children}
      </h5>
    );
  },
  h6: ({ children, className, ...props }) => {
    const text = Array.isArray(children) ? children.join("") : String(children);
    return (
      <h6
        id={generateId(text)}
        className={cn("scroll-m-28 lg:scroll-m-24", className)}
        {...props}
      >
        {children}
      </h6>
    );
  },

  // table
  table: ({ children }) => (
    <div className="overflow-x-scroll border-x rounded-md not-prose ">
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
