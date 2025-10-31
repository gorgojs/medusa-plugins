"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";
import { cn } from "@/lib/utils";

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-1.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-1.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-outline-variant relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    showShadows?: boolean;
    shadowSize?: string;
  }
>(
  (
    { className, children, showShadows = false, shadowSize = "1rem", ...props },
    ref
  ) => {
    const [canScrollTop, setCanScrollTop] = React.useState(false);
    const [canScrollBottom, setCanScrollBottom] = React.useState(false);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(false);
    const viewportRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = React.useCallback(() => {
      if (!viewportRef.current) return;

      const {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollLeft,
        scrollWidth,
        clientWidth,
      } = viewportRef.current;

      setCanScrollTop(scrollTop > 0);
      setCanScrollBottom(scrollHeight - scrollTop - clientHeight > 1);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollWidth - scrollLeft - clientWidth > 1);
    }, []);

    React.useEffect(() => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      handleScroll(); // Initial check

      const resizeObserver = new ResizeObserver(handleScroll);
      resizeObserver.observe(viewport);
      if (viewport.firstElementChild) {
        resizeObserver.observe(viewport.firstElementChild);
      }

      return () => resizeObserver.disconnect();
    }, [children, handleScroll]);

    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        data-slot="scroll-area"
        className={cn("relative", className)}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          ref={viewportRef}
          data-slot="scroll-area-viewport"
          className="focus-visible:ring-ring/50 size-full rounded-[inherit] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
          onScroll={handleScroll}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>

        {showShadows && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ "--shadow-size": shadowSize } as React.CSSProperties}
          >
            <div
              className={cn(
                "absolute left-0 top-0 w-full h-[var(--shadow-size)]",
                "bg-gradient-to-b from-ui-bg-base to-transparent opacity-0 transition-opacity",
                { "opacity-100": canScrollTop }
              )}
            />
            <div
              className={cn(
                "absolute bottom-0 left-0 w-full h-[var(--shadow-size)]",
                "bg-gradient-to-t from-ui-bg-base to-transparent opacity-0 transition-opacity",
                { "opacity-100": canScrollBottom }
              )}
            />
            <div
              className={cn(
                "absolute left-0 top-0 h-full w-[var(--shadow-size)]",
                "bg-gradient-to-r from-ui-bg-base to-transparent opacity-0 transition-opacity",
                { "opacity-100": canScrollLeft }
              )}
            />
            <div
              className={cn(
                "absolute right-0 top-0 h-full w-[var(--shadow-size)]",
                "bg-gradient-to-l from-ui-bg-base to-transparent opacity-0 transition-opacity",
                { "opacity-100": canScrollRight }
              )}
            />
          </div>
        )}
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  }
);
ScrollArea.displayName = "ScrollArea";

export { ScrollArea, ScrollBar };
