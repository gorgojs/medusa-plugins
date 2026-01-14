"use client";

import type { Toc, TocEntry } from "@stefanprobst/rehype-extract-toc";
import type { MouseEvent } from "react";
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

type HeadingPosition = {
  id: string;
  top: number;
};

function TableOfContents({ toc }: { toc: Toc }) {
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const headingPositionsRef = useRef<HeadingPosition[]>([]);
  const rafRef = useRef<number | null>(null);

  const tocIdSet = useMemo(() => {
    const ids = new Set<string>();
    const walk = (entry: TocEntry) => {
      if (entry.id) ids.add(entry.id);
      entry.children?.forEach(walk);
    };
    toc.forEach(walk);
    return ids;
  }, [toc]);

  const updateHeadingPositions = useCallback(() => {
    const contentContainer = document.querySelector(
      ".prose",
    ) as HTMLElement | null;
    if (!contentContainer) {
      headingPositionsRef.current = [];
      return;
    }

    const headings = Array.from(
      document.querySelectorAll(
        ".prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6",
      ),
    ) as HTMLElement[];

    if (headings.length === 0) {
      headingPositionsRef.current = [];
      return;
    }

    const positions: HeadingPosition[] = headings.map((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`;
      }
      return {
        id: heading.id,
        top: heading.getBoundingClientRect().top + window.scrollY,
      };
    });

    headingPositionsRef.current = positions.filter((pos) =>
      tocIdSet.has(pos.id),
    );
  }, [tocIdSet]);

  const getActivationOffset = useCallback(() => {
    return Math.min(180, Math.round(window.innerHeight * 0.3));
  }, []);

  const findActiveHeading = useCallback((): string | "" => {
    const positions = headingPositionsRef.current;
    if (positions.length === 0) return "";

    const viewportTop = window.scrollY;
    const maxScrollTop = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );

    if (viewportTop <= 0) return positions[0].id;
    if (viewportTop >= maxScrollTop - 1)
      return positions[positions.length - 1].id;

    const lineY = viewportTop + getActivationOffset();
    let lo = 0;
    let hi = positions.length - 1;
    let ans = 0;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (positions[mid].top <= lineY) {
        ans = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    return positions[ans].id;
  }, [getActivationOffset]);

  const scheduleActiveUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      const next = findActiveHeading();
      setActiveId((prev) => (next && prev !== next ? next : prev));
    });
  }, [findActiveHeading]);

  const handleTocClick = useCallback(
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      updateHeadingPositions();
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const maxScrollTop = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const offset = getActivationOffset();
      const nextScrollTop = Math.max(
        0,
        Math.min(maxScrollTop, targetTop - offset),
      );
      window.history.replaceState(null, "", `#${id}`);
      setActiveId(id);
      window.scrollTo({ top: nextScrollTop, behavior: "smooth" });
    },
    [getActivationOffset, updateHeadingPositions],
  );

  useEffect(() => {
    updateHeadingPositions();

    const onResize = debounce(() => {
      updateHeadingPositions();
      scheduleActiveUpdate();
    }, 150);

    const onScroll = () => scheduleActiveUpdate();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    const contentContainer = document.querySelector(".prose");
    const resizeObserver =
      contentContainer && "ResizeObserver" in window
        ? new ResizeObserver(() => {
            updateHeadingPositions();
            scheduleActiveUpdate();
          })
        : null;
    if (contentContainer && resizeObserver) {
      resizeObserver.observe(contentContainer);
    }

    const initial = findActiveHeading();
    if (initial) setActiveId(initial);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (resizeObserver) resizeObserver.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [findActiveHeading, scheduleActiveUpdate, updateHeadingPositions]);

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
              activeId === item.id && "h-5 w-0.5",
            )}
          />
          <a
            href={`#${item.id}`}
            onClick={handleTocClick(item.id!)}
            className={cn(
              "hover:text-foreground transition-colors",
              activeId === item.id && "text-ui-fg-base",
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
