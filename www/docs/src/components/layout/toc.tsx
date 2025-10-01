'use client';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { ScrollText } from '@medusajs/icons';
import { Button } from '@medusajs/ui';
import { ChevronUp } from 'lucide-react';
import { useRef } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useTOC } from '@/contexts/toc-context';
import { cn } from '@/lib/utils';

interface TOCContentProps {
  tocItems: { id: string; text: string; level: number }[];
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

function TOCContent({ tocItems, activeId, setActiveId }: TOCContentProps) {
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const { setIsTocOpen } = useTOC();

  // useEffect(() => {
  //   if (!activeId) return;
  //   const container = scrollContainerRef.current;
  //   const item = itemRefs.current[`toc-${activeId}`];

  //   if (!container || !item) return;

  //   item.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'center',
  //   });
  // }, [activeId]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.pushState(null, '', `#${id}`);
    setActiveId(id);
    setIsTocOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsTocOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4 lg:px-9 lg:py-0 w-full">
      <Button className="mb-8 px-4 py-2.5 hidden lg:flex">
        <div className="flex flex-col items-start gap-1.5">
          <div className="text-ui-fg-on-inverted/50 text-sm">Plugins are available</div>
          <div className="text-base flex items-center gap-2">
            <SiGithub className="size-4" /> Gorgo.js
          </div>
        </div>
      </Button>

      <h3 className="font-medium text-sm text-ui-fg-subtle flex gap-2 items-center">
        <ScrollText /> On This Page
      </h3>

      <ScrollArea
        ref={scrollContainerRef}
        className="lg:h-[calc(100vh-20rem)]"
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
              className={cn('text-sm', {
                'text-ui-fg-base': activeId === item.id,
                'text-ui-fg-subtle': activeId !== item.id,
                'pl-4': item.level > 2,
              })}
            >
              <a
                href={`#${item.id}`}
                className="hover:text-foreground transition-colors"
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

  const isDesktop = useMediaQuery('(min-width: 1280px)', {
    defaultValue: true,
    initializeWithValue: false,
  });

  if (tocItems.length === 0) {
    return <div className="hidden xl:block w-[250px]" />;
  }

  if (isDesktop) {
    return (
      <aside className="sticky top-24 w-[250px]">
        <TOCContent tocItems={tocItems} activeId={activeId} setActiveId={setActiveId} />
      </aside>
    );
  }

  return (
    <Drawer open={isTocOpen} onOpenChange={setIsTocOpen} direction="right">
      <DrawerTitle className="sr-only">Table of Contents</DrawerTitle>
      <DrawerContent className="h-full">
        <div className="overflow-y-auto">
          <TOCContent tocItems={tocItems} activeId={activeId} setActiveId={setActiveId} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default TableOfContents;
