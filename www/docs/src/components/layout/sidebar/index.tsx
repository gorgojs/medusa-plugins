"use client";

import { useMediaQuery } from "usehooks-ts";
import SidebarItem from "@/components/layout/sidebar/sidebar-item";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useSidebar } from "@/contexts/sidebar-context";
import type { SidebarItemType, SidebarType } from "@/types";

const SidebarContent = ({
  items,
  basePath = "",
  section,
}: {
  items: (SidebarItemType | SidebarType)[];
  basePath?: string;
  section?: SidebarType;
}) => {
  // Create a localized "Overview" title for the overview item
  const overviewTitle = {
    en: "Overview",
    ru: "Обзор",
  };

  return (
    <nav className="flex flex-col gap-y-1 px-4">
      {section?.hasOverview && (
        <SidebarItem
          key={`overview-${section.slug}`}
          slug={section.slug}
          title={overviewTitle}
          items={[]}
          basePath={basePath}
          isOverview={true}
        />
      )}
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
};

const Sidebar = ({
  section,
  baseSlugs,
}: {
  section: SidebarType;
  baseSlugs: string[];
}) => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
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
          <div className="overflow-y-auto py-4">
            <SidebarContent
              items={section?.children ?? []}
              basePath={basePath}
              section={section}
            />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <aside className="sticky top-12 w-[250px]">
      <div className="overflow-y-auto">
        <SidebarContent
          items={section?.children ?? []}
          basePath={basePath}
          section={section}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
