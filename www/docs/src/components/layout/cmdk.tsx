"use client";

import { MagnifierAlert } from "@medusajs/icons";
import { Button, Kbd } from "@medusajs/ui";
import { SearchIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface CommandItemType {
  id: string;
  title: string;
  description?: string;
  href: string;
  section?: string;
  content: string;
}

const useIsMac = () => {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(navigator.userAgent.toLowerCase().includes("mac"));
  }, []);

  return isMac;
};

const CmdK = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isMac = useIsMac();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<CommandItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [allContent, setAllContent] = useState<CommandItemType[]>([]);

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
    if (open && allContent.length === 0) {
      const fetchAllContent = async () => {
        try {
          setLoading(true);
          const response = await fetch(`/api/search?locale=${locale}`);
          if (!response.ok) throw new Error("Failed to fetch initial content");
          const data = await response.json();
          const contentArray = Array.isArray(data) ? data : [];
          setAllContent(contentArray);
          setSearchResults(contentArray);
        } catch (error) {
          console.error("Error loading search content:", error);
          setAllContent([]);
          setSearchResults([]);
        } finally {
          setLoading(false);
        }
      };
      fetchAllContent();
    }
  }, [open, allContent.length, locale]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults(allContent);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(searchTerm)}&locale=${locale}`
        );
        if (!response.ok) throw new Error("Failed to fetch search results");
        const data = await response.json();
        setSearchResults(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error searching content:", error);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, allContent, locale]);

  const handleSelect = useCallback((href: string) => {
    window.location.href = href;
    setOpen(false);
    setSearchTerm("");
  }, []);

  return (
    <>
      <Button
        variant="secondary"
        className="relative w-full justify-start text-sm text-ui-subtle flex items-center text-ui-fg-muted"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">
          {t("header.search.label")}
        </span>
        <span className="inline-flex lg:hidden">
          {t("header.search.shortLabel")}
        </span>
        <kbd className="pointer-events-none ml-8 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">
            {isMac ? t("keyboard.command") : t("keyboard.control")}
          </span>
          K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-0 overflow-hidden rounded-xl border bg-ui-bg-base p-0 shadow-lg outline-none animate-in fade-in-90 slide-in-from-top-10 sm:zoom-in-90"
      >
        <CommandInput
          placeholder={t("search.placeholder")}
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList className="min-h-[400px] max-h-[400px] overflow-y-auto overflow-x-hidden">
          {loading && (
            <div className="flex items-center justify-center h-[400px]">
              <p className="text-sm text-muted-foreground">
                {t("search.loadingText", {
                  defaultValue: "Searching documentation...",
                })}
              </p>
            </div>
          )}

          {!loading && searchTerm && searchResults.length === 0 && (
            <CommandEmpty className="text-center text-sm h-[400px] flex flex-col items-center justify-center">
              <MagnifierAlert className="mb-3" />
              <h5 className="mb-1.5 font-medium">
                {t("search.emptyResults.title")}
              </h5>
              <p className="text-center max-w-xs text-ui-fg-subtle leading-tight">
                {t("search.emptyResults.description")}
              </p>
            </CommandEmpty>
          )}

          <CommandGroup>
            {searchResults.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.href)}
                className="flex flex-col cursor-pointer items-start justify-between px-4 py-3 hover:bg-accent gap-1"
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-2">
                  {item.content}
                  {/*{item.description || item.content?.substring(0, 220)}*/}
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.section}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <div className="bg-ui-bg-component sticky bottom-0 flex items-center justify-end text-xs gap-3 py-3 pr-3 border-t">
            <div>
              Navigation <Kbd className="ml-2">↓</Kbd> <Kbd>↑</Kbd>
            </div>
            <div className="w-px h-[12px] bg-ui-border-base" />
            <div>
              Open result <Kbd className="w-[20px] ml-2">↵</Kbd>
            </div>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CmdK;
