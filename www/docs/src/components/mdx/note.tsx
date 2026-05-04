"use client";

import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export type NoteType = "default" | "warning" | "success" | "error";

export type NoteProps = {
  type?: NoteType;
  title?: string;
  children?: ReactNode;
  forceMultiline?: boolean;
};

const INDICATOR_CLASSES: Record<NoteType, string> = {
  default: "bg-medusa-tag-neutral-icon",
  warning: "bg-medusa-tag-orange-icon",
  success: "bg-medusa-tag-green-icon",
  error: "bg-medusa-tag-red-icon",
};

const PUNCTUATIONS = [".", ":", ";", ",", "!", "?"];

export function Note({ type = "default", title, children, forceMultiline = false }: NoteProps) {
  const t = useTranslations("components.note");

  const resolvedTitle = title ?? t(type);
  const lastChar = resolvedTitle.charAt(resolvedTitle.length - 1);
  const showColon = !PUNCTUATIONS.includes(lastChar);

  return (
    <div
      className={cn(
        "py-[10px] px-docs_0.75 my-docs_1",
        "flex gap-docs_0.75 rounded-docs_DEFAULT items-stretch",
        "bg-medusa-bg-component border border-medusa-border-base"
      )}
    >
      <span className={cn("rounded-full w-docs_0.25 shrink-0", INDICATOR_CLASSES[type])} />
      <div className="flex-1 min-w-0 text-compact-small text-medusa-fg-subtle [&_ol]:!mb-0 [&_ul]:!mb-0">
        <span className="text-compact-small-plus text-medusa-fg-base font-medium">
          {resolvedTitle}
          {showColon ? ":" : ""}&nbsp;
        </span>
        <span
          className={cn(
            forceMultiline
              ? "block mt-1"
              : // MDX wraps paragraph text in <p> — make it inline so title and content stay on one line
                "[&>p]:inline [&>p]:m-0 [&>p]:p-0"
          )}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
