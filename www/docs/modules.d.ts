declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  import type { Toc } from "@stefanprobst/rehype-extract-toc";

  export const metadata: {
    title: string;
    description: string;
    keywords?: string[];
  };
  export const tableOfContents: Toc;
  export default function MDXContent(props: MDXProps): JSX.Element;
}
