"use client";

import type React from "react";
import { InlineCode } from "@/components/ui/inline-code";
import { CodeBlock } from "@/components/mdx/code-block";

export type CodeMdxProps = {
  className?: string;
  children?: React.ReactNode;
  title?: string;
};

export const CodeMdx = ({ className, children, title }: CodeMdxProps) => {
  if (!children) {
    return <></>;
  }

  const match = /language-(\w+)/.exec(className || "");
  const code = ((Array.isArray(children) ? children[0] : children) as string).replace(/\n$/, "");

  if (match) {
    return <CodeBlock code={code} language={match[1]} title={title} />;
  }

  return <InlineCode>{code}</InlineCode>;
};
