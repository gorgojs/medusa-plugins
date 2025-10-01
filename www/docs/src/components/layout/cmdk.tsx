'use client';

import { MagnifierAlert } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { sidebars } from '@/lib/sidebar';
import type { SidebarItemType } from '@/types';

interface CommandItemType {
  id: string;
  title: string;
  description?: string;
  href: string;
  section?: string;
}

const flattenSidebarItems = (
  sidebarItems: SidebarItemType[],
  section: string
): CommandItemType[] => {
  const items: CommandItemType[] = [];

  const processItems = (itemsList: SidebarItemType[], parentSection: string) => {
    itemsList.forEach((item) => {
      if (item.href) {
        items.push({
          id: `${parentSection}-${item.title.toLowerCase().replace(/\s+/g, '-')}`,
          title: item.title,
          href: item.href,
          section: parentSection,
        });
      }

      if (item.children && Array.isArray(item.children)) {
        processItems(item.children, parentSection);
      }
    });
  };

  processItems(sidebarItems, section);
  return items;
};

const CmdK = () => {
  const items = sidebars.flatMap((s) => flattenSidebarItems(s.children, s.section));
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredItems = searchTerm
    ? items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.section?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : items;

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
          {searchTerm && filteredItems.length === 0 && (
            <CommandEmpty className="text-center text-sm h-[400px] flex flex-col items-center justify-center">
              <MagnifierAlert className="mb-3" />
              <h5 className="mb-1.5 font-medium">No results found</h5>
              <p className="text-center max-w-xs text-ui-fg-subtle leading-tight">
                We couldn't find any matches for your search. Please try changing the filters or
                using different keywords.
              </p>
            </CommandEmpty>
          )}

          <CommandGroup heading="Documentation">
            {filteredItems.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  window.location.href = item.href;
                  setOpen(false);
                  setSearchTerm('');
                }}
                className="flex cursor-pointer items-center justify-between px-4 py-3 hover:bg-accent"
              >
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
                <div className="text-xs text-muted-foreground">{item.section}</div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CmdK;
