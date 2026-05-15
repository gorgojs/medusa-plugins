"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { CheckMini, SquareTwoStack } from "@medusajs/icons";
import { Tooltip } from "@medusajs/ui";
import { cn } from "@/lib/utils";

export type CodeBlockProps = {
  code: string;
  language: string;
  title?: string;
};

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={cn(
        "mb-docs_1 overflow-hidden code-block-highlight bg-dark",
        title ? "rounded-docs_lg" : "rounded-docs_DEFAULT",
        "shadow-none dark:shadow-elevation-code-block"
      )}
    >
      <div className="flex items-center justify-between gap-2 px-docs_1 py-docs_0.5">
        <span className="txt-compact-xsmall text-medusa-contrast-fg-secondary truncate">
          {title ?? ""}
        </span>
        <Tooltip content={copied ? "Copied!" : "Copy"} open={copied || undefined}>
          <button
            onClick={handleCopy}
            aria-label={copied ? "Copied!" : "Copy code"}
            className={cn(
              "cursor-pointer shrink-0 p-[4.5px] rounded-docs_sm",
              "text-medusa-contrast-fg-secondary",
              "hover:text-medusa-contrast-fg-primary hover:bg-white/10",
              "focus:outline-none focus:bg-white/10 transition-colors"
            )}
          >
            {copied ? <CheckMini /> : <SquareTwoStack />}
          </button>
        </Tooltip>
      </div>

      <div className="px-[5px] pb-[5px]">
        <div className="border border-solid border-medusa-contrast-border-bot rounded-docs_DEFAULT bg-medusa-contrast-bg-subtle overflow-hidden">
          <CodeHighlight code={code} language={language} lineNumberBg="bg-medusa-contrast-bg-subtle" />
        </div>
      </div>
    </div>
  );
}

const CODE_THEME = {
  ...themes.vsDark,
  plain: {
    ...themes.vsDark.plain,
    color: "rgba(255, 255, 255, 0.88)",
  },
};

export function CodeHighlight({
  code,
  language,
  lineNumberBg,
}: {
  code: string;
  language: string;
  lineNumberBg: string;
}) {
  return (
    <Highlight theme={CODE_THEME} code={code.trim()} language={language}>
      {({ className, style: { backgroundColor: _bg, ...style }, tokens, getLineProps, getTokenProps }) => {
        const showLineNumbers = tokens.length > 1;
        return (
          <pre
            className={cn("!my-0 overflow-x-auto p-0 bg-transparent !outline-none", className)}
            style={style}
          >
            <code className="text-code-body font-monospace table min-w-full print:whitespace-pre-wrap py-docs_0.75">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  {showLineNumbers && (
                    <span
                      className={cn(
                        "table-cell select-none text-right",
                        "sticky left-0 w-[1%] px-docs_1 mr-docs_1",
                        "text-medusa-contrast-fg-secondary",
                        lineNumberBg
                      )}
                    >
                      {i + 1}
                    </span>
                  )}
                  <span className={cn("table-cell whitespace-pre", showLineNumbers ? "pr-docs_1" : "px-docs_1")}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        );
      }}
    </Highlight>
  );
}
