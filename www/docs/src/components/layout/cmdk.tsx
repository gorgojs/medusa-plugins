"use client";

import { MagnifierAlert, TriangleRightMini } from "@medusajs/icons";
import { Button, Kbd } from "@medusajs/ui";
import { Search as SearchIcon } from "lucide-react";
import MiniSearch, { type AsPlainObject, type SearchResult } from "minisearch";
import { useLocale, useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { miniSearchOptions } from "@/lib/minisearch-options";
import type { ContentItem } from "@/types";

interface SearchResultItem extends ContentItem {
  score: number;
  snippet: string;
  terms: string[];
}

const getContentSnippet = (
  content: string,
  terms: string[],
  snippetLength: number = 60,
): string => {
  if (!content) return "";
  if (!terms || terms.length === 0) {
    return content.length > snippetLength
      ? content.substring(0, snippetLength).trim() + "..."
      : content;
  }

  const lowerContent = content.toLowerCase();
  const uniqueTerms = [...new Set(terms.map((t) => t.toLowerCase()))];

  const matchPositions: number[] = [];
  uniqueTerms.forEach((term) => {
    const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
    [...lowerContent.matchAll(regex)].forEach((match) => {
      if (match.index !== undefined) {
        matchPositions.push(match.index);
      }
    });
  });

  if (matchPositions.length === 0) {
    return content.length > snippetLength
      ? content.substring(0, snippetLength).trim() + "..."
      : content;
  }

  matchPositions.sort((a, b) => a - b);

  let bestWindow = { start: 0, score: -1 };

  matchPositions.forEach((pos) => {
    const windowStart = Math.max(0, pos - snippetLength / 2);
    const windowEnd = Math.min(content.length, windowStart + snippetLength);
    const windowText = lowerContent.substring(windowStart, windowEnd);

    let score = 0;
    uniqueTerms.forEach((term) => {
      if (windowText.includes(term)) {
        score++;
      }
    });

    if (score > bestWindow.score) {
      bestWindow = { start: windowStart, score };
    }
  });

  let startIndex = bestWindow.start;

  if (startIndex > 0) {
    const spaceIndex = content.lastIndexOf(" ", startIndex);
    if (spaceIndex !== -1) {
      startIndex = spaceIndex + 1;
    }
  }

  const endIndex = Math.min(content.length, startIndex + snippetLength);
  let snippet = content.substring(startIndex, endIndex).trim();

  if (startIndex > 0) {
    snippet = "..." + snippet;
  }
  if (endIndex < content.length) {
    snippet = snippet + "...";
  }

  return snippet;
};

const highlightSearchTerms = (
  text: string,
  terms: string[],
): React.ReactNode => {
  if (!terms || terms.length === 0 || !text) {
    return text;
  }

  const pattern = terms
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  if (!pattern) {
    return text;
  }

  const regex = new RegExp(`(?<!\\p{L})(${pattern})(?!\\p{L})`, "gui");

  const parts = text.split(regex);
  const termsSet = new Set(terms.map((t) => t.toLowerCase()));

  return (
    <span>
      {parts.map((part, index) =>
        part && termsSet.has(part.toLowerCase()) ? (
          <mark
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="bg-ui-bg-highlight text-ui-fg-interactive dark:text-white px-0.5 rounded"
          >
            {part}
          </mark>
        ) : (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <span key={index}>{part}</span>
        ),
      )}
    </span>
  );
};

const useIsMac = () => {
  const [isMac, setIsMac] = useState(false);
  useEffect(() => {
    setIsMac(window.navigator.userAgent.toLowerCase().includes("mac"));
  }, []);
  return isMac;
};

const CmdK = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isMac = useIsMac();

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [searchIndex, setSearchIndex] =
    useState<MiniSearch<ContentItem> | null>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open && !searchIndex) {
      const initializeIndex = async () => {
        setLoading(true);
        try {
          const cacheKey = `search-index-${locale}`;
          let indexJSON: AsPlainObject;
          const cachedIndex = localStorage.getItem(cacheKey);
          if (cachedIndex) {
            indexJSON = JSON.parse(cachedIndex);
          } else {
            const response = await fetch(`/search-index-${locale}.json`);
            if (!response.ok) throw new Error("Failed to fetch search index.");
            indexJSON = await response.json();
            localStorage.setItem(cacheKey, JSON.stringify(indexJSON));
          }
          const miniSearch = MiniSearch.loadJS<ContentItem>(
            indexJSON,
            miniSearchOptions,
          );
          setSearchIndex(miniSearch);
        } catch (error) {
          console.error("Error initializing client-side search:", error);
        } finally {
          setLoading(false);
        }
      };
      initializeIndex();
    }
  }, [open, locale, searchIndex]);

  useEffect(() => {
    if (!searchIndex) return;

    const rawResults = searchTerm.trim()
      ? (searchIndex.search(searchTerm) as (SearchResult & ContentItem)[])
      : (searchIndex.search(MiniSearch.wildcard) as (SearchResult &
          ContentItem)[]);

    const processedResults = rawResults.map((result) => ({
      ...result,
      snippet: getContentSnippet(result.content, result.terms),
      terms: result.terms,
    }));

    setSearchResults(processedResults as SearchResultItem[]);
  }, [searchTerm, searchIndex]);

  const handleSelect = useCallback((href: string) => {
    window.location.href = href;
    setOpen(false);
    setSearchTerm("");
  }, []);

  return (
    <>
      <Button
        variant="secondary"
        className="relative w-full justify-start text-sm text-ui-subtle flex items-center text-ui-fg-muted cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">
          {t("header.search.label")}
        </span>
        <span className="inline-flex lg:hidden">
          {t("header.search.shortLabel")}
        </span>
        <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="fixed top-1/2 left-1/2 z-50 grid max-w-[94%] w-full sm:max-w-lg -translate-x-1/2 -translate-y-1/2 gap-0 overflow-hidden rounded-xl border bg-ui-bg-base p-0 shadow-lg outline-none animate-in fade-in-90 slide-in-from-top-10 sm:zoom-in-90"
      >
        <div className="relative">
          <CommandInput
            placeholder={t("search.placeholder")}
            value={searchTerm}
            onValueChange={setSearchTerm}
          />
          <Button
            className="absolute right-1 top-1/2 -translate-y-1/2 text-ui-fg-subtle"
            variant="transparent"
            onClick={() => setSearchTerm("")}
          >
            Clear
          </Button>
        </div>
        <CommandList className="min-h-[440px] max-h-[440px] overflow-y-auto overflow-x-hidden">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <p>{t("search.loadingText")}</p>
            </div>
          )}

          {!loading && searchTerm && searchResults.length === 0 && (
            <CommandEmpty className="text-center text-sm h-[440px] flex flex-col items-center justify-center">
              <MagnifierAlert className="mb-3" />
              <h5 className="txt-compact-small-plus mb-1.5">
                {t("search.emptyResults.title")}
              </h5>
              <p className="txt-small max-w-sm">
                {t("search.emptyResults.description")}
              </p>
            </CommandEmpty>
          )}

          <CommandGroup>
            {searchResults.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.href)}
                className="flex flex-col cursor-pointer items-start justify-between hover:bg-ui-bg-base-hover gap-1.5 !p-2"
              >
                <div className="txt-compact-small-plus">
                  {highlightSearchTerms(item.title, item.terms)}
                </div>
                <div className="txt-compact-small text-ui-fg-subtle line-clamp-1 w-full">
                  {highlightSearchTerms(item.snippet, item.terms)}
                </div>
                <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-x-1">
                  {item.sectionHierarchy?.map((segment, index) => (
                    <React.Fragment key={index}>
                      <span>{segment}</span>
                      {index < item.sectionHierarchy.length - 1 && (
                        <TriangleRightMini />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>

        <div className="bg-ui-bg-component static bottom-0 hidden lg:flex items-center justify-end text-xs gap-3 py-3 pr-3 border-t">
          <div>
            {t("search.navigation")} <Kbd className="ml-2">↓</Kbd> <Kbd>↑</Kbd>
          </div>
          <div className="w-px h-3 bg-ui-border-base" />
          <div>
            {t("search.open")} <Kbd className="w-5 ml-2">↵</Kbd>
          </div>
        </div>
      </CommandDialog>
    </>
  );
};

export default CmdK;
