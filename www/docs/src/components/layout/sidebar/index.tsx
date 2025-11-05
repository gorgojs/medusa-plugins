"use client";

import { useLocale } from "next-intl";
import { useMediaQuery } from "usehooks-ts";
import SidebarItem from "@/components/layout/sidebar/sidebar-item";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useSidebar } from "@/contexts/sidebar-context";
import { getLocalizedString } from "@/lib/utils";
import type { SidebarItemType, SidebarType } from "@/types";

export const overviewTitle = {
  en: "Overview",
  ru: "Обзор",
};

const SidebarContent = ({
  section,
  items,
  basePath = "",
}: {
  items: (SidebarItemType | SidebarType)[];
  section: SidebarType;
  basePath?: string;
}) => {
  const locale = useLocale();

  const displayTitle =
    typeof section.title === "string"
      ? section.title
      : getLocalizedString(section.title, locale);

  return (
    <nav className="flex flex-col px-4">
      <div className="text-xs font-medium text-ui-fg-subtle/60 mb-3">
        {displayTitle}
      </div>
      <div className="w-full h-1 border-dashed border-b" />
      {section?.hasOverview && (
        <SidebarItem
          key={`overview-${section.slug}`}
          slug={"/"}
          title={overviewTitle}
          items={[]}
          basePath={basePath}
          isOverview={true}
        />
      )}
      {items.map((item) => (
        <SidebarItem
          level={"isSection" in item ? 0 : 1}
          key={item.slug}
          slug={item.slug}
          title={item.title}
          items={item.children as SidebarItemType[]}
          icon={"icon" in item ? item.icon : undefined}
          basePath={basePath}
          hasOverview={"hasOverview" in item && item?.hasOverview}
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
        <DrawerContent className="h-full bg-ui-bg-component">
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
