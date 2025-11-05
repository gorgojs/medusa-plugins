"use client";

import { CodeBlock } from "@medusajs/ui";
import type React from "react";
import { InlineCode } from "@/components/ui/inline-code";

export type CodeMdxProps = {
  className?: string;
  children?: React.ReactNode;
};

export const CodeMdx = ({ className, children, ...rest }: CodeMdxProps) => {
  if (!children) {
    return <></>;
  }

  const match = /language-(\w+)/.exec(className || "");
  let code = children as string;

  code = code.replace(/\n$/, "");

  if (match) {
    return (
      <CodeBlock
        snippets={[
          {
            label: "Code",
            code,
            language: match[1],
            hideLineNumbers: true,
          },
        ]}
        {...rest}
      >
        <CodeBlock.Body />
      </CodeBlock>
    );
  }

  return <InlineCode>{code}</InlineCode>;
};
