import type { SidebarItemType, SidebarType } from "@/types";
import { pluginsSidebar } from "./plugins";
import { toolsSidebar } from "./tools";
import { tutorialsSidebar } from "./tutorials";

const sidebars: SidebarType[] = [
  pluginsSidebar,
  toolsSidebar,
  tutorialsSidebar,
];

const getAllSidebarPaths = () => {
  const collect = (
    items: (SidebarItemType | SidebarType)[],
    basePath: string = ""
  ): string[] =>
    items.flatMap((item) => {
      if ("isSection" in item && item.isSection && item.slug) {
        const sectionPath = basePath
          ? `${basePath}/${item.slug}`
          : `/${item.slug}`;
        const paths = [sectionPath];
        if (item.children) {
          paths.push(...collect(item.children, sectionPath));
        }
        return paths;
      }
      // Handle SidebarItemType
      else if ("slug" in item && item.slug) {
        const itemPath = basePath
          ? `${basePath}/${item.slug}`
          : `/${item.slug}`;
        const paths = [itemPath];
        if (Array.isArray(item.children) && item.children.length > 0) {
          paths.push(...collect(item.children, basePath));
        }
        return paths;
      }
      return [];
    });

  return sidebars.flatMap((s) => {
    if (s.slug) {
      return collect(s.children, `/${s.slug}`);
    }
    return [];
  });
};

// Function to get items that should be shown in header (sections)
const getHeaderSections = (): SidebarType[] => {
  return sidebars.filter((sidebar) => sidebar.isSection);
};

export {
  tutorialsSidebar,
  toolsSidebar,
  pluginsSidebar,
  sidebars,
  getAllSidebarPaths,
  getHeaderSections,
};
