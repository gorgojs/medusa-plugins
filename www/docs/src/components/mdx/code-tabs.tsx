"use client";

import {
  useState,
  useEffect,
  useRef,
  Children,
  isValidElement,
  type ReactNode,
  type ReactElement,
} from "react";
import { CheckMini, SquareTwoStack } from "@medusajs/icons";
import { Tooltip } from "@medusajs/ui";
import { cn } from "@/lib/utils";
import { CodeHighlight } from "./code-block";

export type CodeTabProps = {
  label: string;
  value: string;
  children?: ReactNode;
};

export function CodeTab(_props: CodeTabProps) {
  return null;
}

type ExtractedCode = {
  code: string;
  language: string;
  title?: string;
};

function extractCode(node: ReactNode): ExtractedCode | null {
  if (!isValidElement(node)) return null;
  const el = node as ReactElement<any>;

  if (typeof el.props?.className === "string") {
    const m = el.props.className.match(/language-(\w+)/);
    if (m) {
      const raw = Array.isArray(el.props.children) ? el.props.children[0] : el.props.children;
      const code = typeof raw === "string" ? raw.replace(/\n$/, "") : "";
      return { code, language: m[1], title: el.props.title };
    }
  }

  for (const child of Children.toArray(el.props?.children ?? [])) {
    const result = extractCode(child);
    if (result) return result;
  }
  return null;
}

type TabInfo = {
  label: string;
  value: string;
  extracted: ExtractedCode | null;
  rawChildren: ReactNode;
};

export type CodeTabsProps = {
  children?: ReactNode;
};

export function CodeTabs({ children }: CodeTabsProps) {
  const tabs: TabInfo[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    const el = child as ReactElement<any>;
    if (typeof el.props?.label !== "string" || typeof el.props?.value !== "string") return;

    tabs.push({
      label: el.props.label,
      value: el.props.value,
      extracted: extractCode(el.props.children),
      rawChildren: el.props.children,
    });
  });

  const [selectedValue, setSelectedValue] = useState(tabs[0]?.value ?? "");
  const [copied, setCopied] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.value === selectedValue);
    const btn = tabRefs.current[activeIndex];
    if (btn) {
      setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [selectedValue, tabs.length]);

  if (!tabs.length) return null;

  const activeTab = tabs.find((t) => t.value === selectedValue) ?? tabs[0];

  const handleCopy = () => {
    if (!activeTab?.extracted) return;
    navigator.clipboard.writeText(activeTab.extracted.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mb-docs_1 overflow-hidden code-block-highlight rounded-docs_lg bg-dark shadow-none dark:shadow-elevation-code-block">

      {/* Tab row */}
      <div className="flex items-start justify-between gap-2 px-docs_1 pt-docs_0.5">
        {/* Tabs with sliding indicator */}
        <div className="relative flex items-center overflow-x-auto gap-3">
          {tabs.map((tab, i) => {
            const isActive = tab.value === selectedValue;
            return (
              <button
                key={tab.value}
                ref={(el) => { tabRefs.current[i] = el; }}
                onClick={() => setSelectedValue(tab.value)}
                className={cn(
                  "txt-compact-xsmall pb-4 transition-colors shrink-0",
                  isActive
                    ? "text-medusa-contrast-fg-primary"
                    : "text-medusa-contrast-fg-secondary hover:text-medusa-contrast-fg-primary"
                )}
              >
                {tab.label}
              </button>
            );
          })}
          {/* Sliding indicator */}
          <span
            className="absolute bottom-0 h-px bg-medusa-contrast-fg-primary transition-all duration-200 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </div>

        {/* Copy button */}
        {activeTab?.extracted && (
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
        )}
      </div>

      {/* Filename row */}
      {activeTab?.extracted?.title && (
        <div className="px-docs_1 py-docs_0.5">
          <span className="txt-compact-xsmall text-medusa-contrast-fg-secondary truncate">
            {activeTab.extracted.title}
          </span>
        </div>
      )}

      {/* Code area */}
      <div className="px-[5px] pb-[5px]">
        <div className="border border-solid border-medusa-contrast-border-bot rounded-docs_DEFAULT bg-medusa-contrast-bg-subtle overflow-hidden">
          {activeTab?.extracted ? (
            <CodeHighlight
              code={activeTab.extracted.code}
              language={activeTab.extracted.language}
              lineNumberBg="bg-medusa-contrast-bg-subtle"
            />
          ) : (
            <div className="p-docs_1 text-medusa-contrast-fg-secondary text-compact-small">
              {activeTab?.rawChildren}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
