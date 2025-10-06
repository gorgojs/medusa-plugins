"use client";

import { MagnifierAlert } from "@medusajs/icons";
import { Button } from "@medusajs/ui";
import { SearchIcon } from "lucide-react";
import { useLocale } from "next-intl"; // 1. Import the useLocale hook
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

const CmdK = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<CommandItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [allContent, setAllContent] = useState<CommandItemType[]>([]);
  const locale = useLocale(); // 2. Get the current active locale

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

  // 3. MODIFIED: Fetch initial content for the CURRENT LOCALE
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
  }, [open, allContent.length, locale]); // Add locale to dependency array

  // 4. MODIFIED: Debounced search function for the CURRENT LOCALE
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults(allContent);
      return; // Exit early
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        // Pass both the search term and the locale to the API
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
    }, 300); // 300ms debounce

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, allContent, locale]); // Add locale and allContent to dependencies

  // 5. IMPROVEMENT: Use a stable callback for navigation
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
        <span className="hidden lg:inline-flex">Search docs...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none ml-8 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-0 overflow-hidden rounded-xl border bg-ui-bg-base p-0 shadow-lg outline-none animate-in fade-in-90 slide-in-from-top-10 sm:zoom-in-90"
      >
        <CommandInput
          placeholder="Search documentation..."
          value={searchTerm}
          onValueChange={setSearchTerm}
        />
        <CommandList className="min-h-[400px] max-h-[400px] overflow-y-auto overflow-x-hidden">
          {loading && (
            <div className="flex items-center justify-center h-[400px]">
              <p className="text-sm text-muted-foreground">
                Searching documentation...
              </p>
            </div>
          )}

          {!loading && searchTerm && searchResults.length === 0 && (
            <CommandEmpty className="text-center text-sm h-[400px] flex flex-col items-center justify-center">
              <MagnifierAlert className="mb-3" />
              <h5 className="mb-1.5 font-medium">No results found</h5>
              <p className="text-center max-w-xs text-ui-fg-subtle leading-tight">
                We couldn't find any matches for your search. Please try
                changing the filters or using different keywords.
              </p>
            </CommandEmpty>
          )}

          <CommandGroup heading="Documentation">
            {searchResults.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => handleSelect(item.href)}
                className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-accent"
              >
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.description || item.content?.substring(0, 220)}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">
                  {item.section}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CmdK;
