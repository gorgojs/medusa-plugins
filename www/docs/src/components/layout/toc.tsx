"use client";

import { ScrollText } from "@medusajs/icons";
import { Button } from "@medusajs/ui";
import { ChevronUp } from "lucide-react";
import { useRef } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useTOC } from "@/contexts/toc-context";
import { cn } from "@/lib/utils";

interface TOCContentProps {
  tocItems: { id: string; text: string; level: number }[];
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

function TOCContent({ tocItems, activeId, setActiveId }: TOCContentProps) {
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const { setIsTocOpen } = useTOC();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
    setActiveId(id);
    setIsTocOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsTocOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4 px-9 py-9 xl:py-0 w-full transition-all">
      <h3 className="font-medium text-sm text-ui-fg-subtle flex gap-2 items-center">
        <ScrollText /> On This Page
      </h3>

      <ScrollArea
        ref={scrollContainerRef}
        className="min-[900px]:h-[calc(100vh-20rem)]"
        showShadows
        shadowSize="32px"
      >
        <ScrollBar />
        <ul className="space-y-3 p-1">
          {tocItems.map((item) => (
            <li
              id={`toc-${item.id}`}
              key={`toc-${item.id}`}
              ref={(el) => {
                itemRefs.current[`toc-${item.id}`] = el;
              }}
              className={cn("text-sm text-ui-fg-subtle flex items-center", {
                "text-ui-fg-base": activeId === item.id,
                "pl-4": item.level > 2,
              })}
            >
              <div
                className={cn(
                  "h-5 w-0 bg-transparent rounded-r-2xl shrink-0 transition-all",
                  activeId === item.id && "bg-ui-fg-subtle w-0.5 mr-3"
                )}
              />
              <a
                href={`#${item.id}`}
                className={cn("hover:text-foreground transition-colors")}
                onClick={(e) => handleLinkClick(e, item.id)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </ScrollArea>

      <Button
        variant="secondary"
        size="small"
        onClick={scrollToTop}
        className="self-start flex items-center gap-1 mt-4"
      >
        <ChevronUp className="w-4 h-4" />
        Back to Top
      </Button>
    </div>
  );
}

const TableOfContents = () => {
  const { tocItems, activeId, setActiveId, isTocOpen, setIsTocOpen } = useTOC();

  const isDesktop = useMediaQuery("(min-width: 900px)", {
    defaultValue: true,
    initializeWithValue: false,
  });

  if (tocItems.length === 0) {
    return <div className="hidden xl:block w-[250px]" />;
  }

  if (isDesktop) {
    return (
      <aside className="w-[250px]">
        <TOCContent
          tocItems={tocItems}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </aside>
    );
  }

  return (
    <Drawer open={isTocOpen} onOpenChange={setIsTocOpen} direction="right">
      <DrawerTitle className="sr-only">Table of Contents</DrawerTitle>
      <DrawerContent className="h-full">
        <div className="overflow-y-auto">
          <TOCContent
            tocItems={tocItems}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default TableOfContents;
