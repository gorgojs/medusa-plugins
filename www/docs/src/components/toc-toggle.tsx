"use client";

import { SidebarRight } from "@medusajs/icons";
import { Button } from "@medusajs/ui";
import { useTOC } from "@/contexts/toc-context";
import { cn } from "@/lib/utils";

export function TocToggle({ className }: { className?: string }) {
  const { toggleRightSidebar: toggleToc } = useTOC();

  return (
    <Button
      variant="transparent"
      onClick={() => toggleToc()}
      className={cn(className, "cursor-pointer p-0 size-8")}
    >
      <SidebarRight />
    </Button>
  );
}
