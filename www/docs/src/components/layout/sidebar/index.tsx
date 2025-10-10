"use client";

import { useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";
import SidebarItem from "@/components/layout/sidebar/sidebar-item";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useSidebar } from "@/contexts/sidebar-context";
import { usePathname } from "@/i18n/navigation";
import { getCurrentSidebar } from "@/lib/sidebar";
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
        key={item.slug}
        slug={item.slug}
        title={item.title}
        items={item.children as SidebarItemType[]}
        basePath={basePath}
      />
    ))}
  </nav>
);

const useSidebarItems = (pathname: string) => {
  return useMemo(() => getCurrentSidebar(pathname), [pathname]);
};

const Sidebar = () => {
  const pathname = usePathname() ?? "";
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const { section, baseSlugs } = useSidebarItems(pathname);
  const basePath = `/${baseSlugs.join("/")}`;

  const isMobile = useMediaQuery("(max-width: 1279px)", {
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
            <SidebarContent
              items={section?.children ?? []}
              basePath={basePath}
            />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <aside className="sticky top-12 w-[250px]">
      <div className="overflow-y-auto">
        <SidebarContent items={section?.children ?? []} basePath={basePath} />
      </div>
    </aside>
  );
};

export default Sidebar;
