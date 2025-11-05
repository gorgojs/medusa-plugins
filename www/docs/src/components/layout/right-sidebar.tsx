"use client";

import { useMediaQuery } from "usehooks-ts";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useTOC } from "@/contexts/toc-context";

const RightSidebar = ({ children }: { children?: React.ReactNode }) => {
  const { isRightSidebarOpen: isTocOpen, setIsRightSidebarOpen: setIsTocOpen } =
    useTOC();

  const isDesktop = useMediaQuery("(min-width: 900px)", {
    defaultValue: true,
    initializeWithValue: false,
  });

  if (isDesktop) {
    return (
      <aside className="w-[250px]">
        <div className="w-[200px] px-4 flex flex-col gap-y-4 h-full pt-2">
          {children}
        </div>
      </aside>
    );
  }

  return (
    <Drawer direction="right" open={isTocOpen} onOpenChange={setIsTocOpen}>
      <DrawerTitle className="sr-only">Table of Contents</DrawerTitle>
      <DrawerContent className="h-full bg-ui-bg-component">
        <div className="overflow-y-auto px-4 py-9 space-y-8">{children}</div>
      </DrawerContent>
    </Drawer>
  );
};

export default RightSidebar;
