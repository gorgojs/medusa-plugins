"use client";

import { ScrollText } from "@medusajs/icons";
import type { Toc, TocEntry } from "@stefanprobst/rehype-extract-toc";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

function debounce<T extends (...args: any[]) => void>(fn: T, wait = 50) {
  let t: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

type ContentBlock = {
  id: string;
  element: HTMLElement;
  startY: number;
  endY: number;
  text: string;
};

function TableOfContents({ toc }: { toc: Toc }) {
  const t = useTranslations("toc");

  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const contentBlocksRef = useRef<ContentBlock[]>([]);
  const scrollDirectionRef = useRef<{
    direction: "up" | "down" | "none";
    lastY: number;
    lastTimestamp: number;
  }>({
    direction: "none",
    lastY: 0,
    lastTimestamp: 0,
  });
  const directionResetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const generateContentBlocks = useCallback(() => {
    const contentContainer = document.querySelector(
      ".prose"
    ) as HTMLElement | null;
    if (!contentContainer) {
      contentBlocksRef.current = [];
      return;
    }

    const allHeadings = Array.from(
      document.querySelectorAll(
        ".prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6"
      )
    ) as HTMLElement[];

    if (allHeadings.length === 0) {
      contentBlocksRef.current = [];
      return;
    }

    const headings = allHeadings.map((h, i) => {
      if (!h.id) {
        h.id = `heading-${i}`;
      }
      return h;
    });

    const containerRect = contentContainer.getBoundingClientRect();
    const containerOffsetTop = containerRect.top + window.scrollY;

    const blocks: ContentBlock[] = headings.map((heading, index) => {
      const headingRect = heading.getBoundingClientRect();
      const startY = headingRect.top + window.scrollY;
      let endY: number;
      if (index < headings.length - 1) {
        const nextRect = headings[index + 1].getBoundingClientRect();
        endY = nextRect.top + window.scrollY;
      } else {
        endY = containerOffsetTop + containerRect.height;
      }
      return {
        id: heading.id,
        element: heading,
        startY,
        endY,
        text: heading.textContent || "",
      };
    });

    contentBlocksRef.current = blocks;
  }, []);

  const updateScrollDirection = useCallback((currentY: number) => {
    const now = Date.now();
    const last = scrollDirectionRef.current;
    const timeDiff = now - last.lastTimestamp;
    const yDiff = currentY - last.lastY;

    if (timeDiff > 0) {
      const speed = Math.abs(yDiff) / timeDiff;
      if (Math.abs(yDiff) > 1 && speed < 2) {
        const newDirection = yDiff > 0 ? "down" : "up";
        scrollDirectionRef.current = {
          direction: newDirection,
          lastY: currentY,
          lastTimestamp: now,
        };
      } else {
        scrollDirectionRef.current.lastY = currentY;
        scrollDirectionRef.current.lastTimestamp = now;
      }
    }

    if (directionResetTimeoutRef.current)
      clearTimeout(directionResetTimeoutRef.current);
    directionResetTimeoutRef.current = setTimeout(() => {
      scrollDirectionRef.current.direction = "none";
    }, 2000);
  }, []);

  const calculateBlockIntersection = useCallback(
    (block: ContentBlock, viewportTop: number, viewportHeight: number) => {
      const focusTop = viewportTop + viewportHeight * 0.3;
      const focusBottom = viewportTop + viewportHeight * 0.7;
      const focusHeight = focusBottom - focusTop;

      const intersectionTop = Math.max(block.startY, focusTop);
      const intersectionBottom = Math.min(block.endY, focusBottom);
      const intersectionHeight = Math.max(
        0,
        intersectionBottom - intersectionTop
      );

      return intersectionHeight / focusHeight;
    },
    []
  );

  const findActiveHeading = useCallback((): string | "" => {
    const blocks = contentBlocksRef.current;
    if (blocks.length === 0) return "";

    const viewportTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    updateScrollDirection(viewportTop);

    const focusTop = viewportTop + viewportHeight * 0.3;
    const focusBottom = viewportTop + viewportHeight * 0.7;

    const blocksInFocus = blocks
      .map((block, index) => {
        const coverage = calculateBlockIntersection(
          block,
          viewportTop,
          viewportHeight
        );
        return { block, index, coverage };
      })
      .filter((b) => b.coverage > 0)
      .sort((a, b) => b.coverage - a.coverage);

    const firstBlock = blocks[0];
    const lastBlock = blocks[blocks.length - 1];

    if (
      firstBlock &&
      viewportTop < 100 &&
      firstBlock.startY > viewportTop + viewportHeight * 0.5
    ) {
      return "";
    }

    if (blocksInFocus.length === 0) {
      if (firstBlock && firstBlock.endY <= focusTop) return "";
      if (lastBlock && lastBlock.startY >= focusBottom) return "";
      if (lastBlock && lastBlock.endY <= focusTop) return "";
      return "";
    }

    if (blocksInFocus.length === 1) return blocksInFocus[0].block.id;

    const topBlock = blocksInFocus[0];
    const secondBlock = blocksInFocus[1];
    const coverageDiff = topBlock.coverage - secondBlock.coverage;

    if (coverageDiff > 0.15) return topBlock.block.id;
    if (topBlock.coverage > 0.3 && secondBlock.coverage < 0.2)
      return topBlock.block.id;

    const scrollDirection = scrollDirectionRef.current.direction;
    if (scrollDirection === "down") {
      const lowerBlock = blocksInFocus.find(
        (item) =>
          item.block.startY > topBlock.block.startY && item.coverage > 0.2
      );
      return lowerBlock ? lowerBlock.block.id : topBlock.block.id;
    } else if (scrollDirection === "up") {
      const upperBlock = blocksInFocus.find(
        (item) =>
          item.block.startY < topBlock.block.startY && item.coverage > 0.2
      );
      return upperBlock ? upperBlock.block.id : topBlock.block.id;
    } else {
      if (Math.abs(topBlock.coverage - secondBlock.coverage) < 0.05) {
        const focusCenter = focusTop + (focusBottom - focusTop) / 2;
        let closest = topBlock;
        let minDistance = Infinity;
        for (const item of blocksInFocus) {
          const blockCenter = (item.block.startY + item.block.endY) / 2;
          const distance = Math.abs(blockCenter - focusCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closest = item;
          }
        }
        return closest.block.id;
      } else {
        return topBlock.block.id;
      }
    }
  }, [calculateBlockIntersection, updateScrollDirection]);

  const debouncedHandler = useMemo(
    () =>
      debounce(() => {
        const newActive = findActiveHeading();
        if (newActive !== activeId) {
          setActiveId(newActive || null);
        }
      }, 50),
    [findActiveHeading, activeId]
  );

  useEffect(() => {
    generateContentBlocks();

    const onResize = debounce(() => generateContentBlocks(), 150);

    window.addEventListener("scroll", debouncedHandler, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    const initial = findActiveHeading();
    if (initial) setActiveId(initial);

    return () => {
      window.removeEventListener("scroll", debouncedHandler);
      window.removeEventListener("resize", onResize);
      if (directionResetTimeoutRef.current)
        clearTimeout(directionResetTimeoutRef.current);
    };
  }, [generateContentBlocks, debouncedHandler, findActiveHeading]);

  useEffect(() => {
    if (!activeId) return;
    const refKey = `toc-${activeId}`;
    const el = itemRefs.current[refKey];
    if (!el) return;

    try {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    } catch {
      const container = scrollContainerRef.current;
      if (container) {
        const elOffset = el.offsetTop;
        const containerHeight = container.clientHeight;
        const elTopRelative = elOffset - container.offsetTop;
        const target =
          elTopRelative - containerHeight / 2 + el.clientHeight / 2;
        container.scrollTo({ top: target, behavior: "smooth" });
      }
    }
  }, [activeId]);

  const renderTocItem = (item: TocEntry) => {
    if (item.depth === 1) {
      if (!item.children?.length) return null;
      return (
        <ul className="space-y-3" key={"toc"}>
          {item.children.map((child) => renderTocItem(child))}
        </ul>
      );
    }

    return (
      <li
        id={`toc-${item.id}`}
        key={item.id}
        ref={(el) => {
          if (item.id) {
            itemRefs.current[`toc-${item.id}`] = el;
          }
        }}
        className={cn("text-sm text-ui-fg-subtle", {
          "pl-4": item.depth > 2,
        })}
      >
        <div className="flex items-center ">
          <div
            className={cn(
              "h-5 w-0 shrink-0 bg-ui-fg-base left-1 mr-2 rounded-r-2xl transition-all",
              activeId === item.id && "h-5 w-0.5"
            )}
          />
          <a
            href={`#${item.id}`}
            className={cn(
              "hover:text-foreground transition-colors",
              activeId === item.id && "text-ui-fg-base"
            )}
          >
            {item.value}
          </a>
        </div>

        {item.children && item.children?.length > 0 && (
          <ul className="space-y-3 mt-3">
            {item.children.map((child) => renderTocItem(child))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full transition-all">
      <ScrollArea
        ref={scrollContainerRef}
        className="md:h-[calc(100vh-24rem)] xl:h-[calc(100vh-22rem)]"
      >
        <ScrollBar />
        {toc.map((item) => renderTocItem(item))}
      </ScrollArea>
    </div>
  );
}

export default TableOfContents;
