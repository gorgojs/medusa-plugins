"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";
import SidebarItem from "@/components/layout/sidebar/sidebar-item";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useSidebar } from "@/contexts/sidebar-context";
import { sidebars } from "@/lib/sidebar";
import { getFullSectionPath } from "@/lib/utils";
import type { SidebarItemType, SidebarType } from "@/types";

const SidebarContent = ({
  items,
  basePath = "",
}: {
  items: (SidebarItemType | SidebarType)[];
  basePath?: string;
}) => (
  <nav className="flex flex-col gap-y-1 p-4">
    {items.map((item) => (
      <SidebarItem
        key={"slug" in item ? item.slug : item.title}
        {...item}
        basePath={basePath}
      />
    ))}
  </nav>
);

const useSidebarItems = (pathname: string) => {
  return useMemo(() => {
    const pathSegments = getFullSectionPath(pathname);
    if (pathSegments.length === 0) {
      return { items: sidebars, basePath: "" };
    }

    let currentLevel: (SidebarItemType | SidebarType)[] = sidebars;
    let lastSectionWithItems: (SidebarItemType | SidebarType)[] = [];
    let currentBasePath = "";
    let accumulatedPath = "";

    for (const segment of pathSegments) {
      const matchingItem = currentLevel.find(
        (item) => item.slug?.toLowerCase() === segment.toLowerCase()
      );

      if (!matchingItem) break;

      accumulatedPath += `/${matchingItem.slug}`;
      if ("isSection" in matchingItem && matchingItem.isSection) {
        lastSectionWithItems = matchingItem.children || [];
        currentBasePath = accumulatedPath;
      }

      currentLevel = Array.isArray(matchingItem.children)
        ? matchingItem.children
        : [];
    }

    return { items: lastSectionWithItems, basePath: currentBasePath };
  }, [pathname]);
};

const Sidebar = () => {
  const pathname = usePathname() ?? "";
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const { items, basePath } = useSidebarItems(pathname);

  const isMobile = useMediaQuery("(max-width: 1023px)", {
    defaultValue: false,
    initializeWithValue: false,
  });

  if (isMobile) {
    return (
      <Drawer
        direction="left"
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      >
        <DrawerTitle className="sr-only">Sidebar</DrawerTitle>
        <DrawerContent className="h-full">
          <div className="overflow-y-auto">
            <SidebarContent items={items} basePath={basePath} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <aside className="sticky top-12 w-[250px]">
      <div className="overflow-y-auto">
        <SidebarContent items={items} basePath={basePath} />
      </div>
    </aside>
  );
};

export default Sidebar;
