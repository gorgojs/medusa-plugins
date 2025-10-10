import type { FlattenedItem, SidebarItemType, SidebarType } from "@/types";
import { isLocale } from "../utils";
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
      const itemPath = basePath ? `${basePath}/${item.slug}` : `/${item.slug}`;
      const paths = [itemPath];
      if (Array.isArray(item.children) && item.children.length > 0) {
        paths.push(...collect(item.children, itemPath));
      }
      return paths;
    });

  return sidebars.flatMap((s) => {
    if (s.slug) {
      return collect(s.children, `/${s.slug}`);
    }
    return [];
  });
};

const getHeaderSections = (): SidebarType[] => {
  return sidebars.filter((sidebar) => sidebar.isSection);
};

type SidebarNode = SidebarItemType | SidebarType;

const getCurrentSidebar = (
  pathname?: string | null
): {
  section: SidebarType | undefined;
  baseSlugs: string[];
} => {
  if (!pathname) {
    return { section: undefined, baseSlugs: [] };
  }

  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments.length > 0 && isLocale(pathSegments[0])) {
    pathSegments.shift();
  }

  if (pathSegments.length === 0) {
    return { section: undefined, baseSlugs: [] };
  }

  let currentSection: SidebarNode | undefined = sidebars.find(
    (s) => s.isSection && s.slug === pathSegments[0]
  );

  if (!currentSection) {
    return { section: undefined, baseSlugs: [] };
  }

  const baseSlugs = [currentSection.slug];

  for (let i = 1; i < pathSegments.length; i++) {
    const segment = pathSegments[i];

    const nextSection: SidebarType | SidebarItemType | null | undefined =
      currentSection!.children?.find(
        (child): child is SidebarType =>
          "isSection" in child && child.isSection! && child.slug === segment
      );

    if (nextSection) {
      currentSection = nextSection;
      baseSlugs.push(nextSection.slug);
    } else {
      break;
    }
  }

  return {
    section: currentSection as SidebarType,
    baseSlugs,
  };
};

function flattenSidebarItems(
  items: (SidebarType | SidebarItemType)[],
  parentSlugs: string[] = []
): FlattenedItem[] {
  return items.flatMap((item) => {
    const currentSlugs = item.slug ? [...parentSlugs, item.slug] : parentSlugs;

    const self =
      item.slug && !item.isSection
        ? [
            {
              title: item.title,
              slug: item.slug,
              path: currentSlugs,
            } as FlattenedItem,
          ]
        : [];

    const children = item.children
      ? flattenSidebarItems(item.children, currentSlugs)
      : [];

    return [...self, ...children];
  });
}

export {
  tutorialsSidebar,
  toolsSidebar,
  pluginsSidebar,
  sidebars,
  getAllSidebarPaths,
  getHeaderSections,
  getCurrentSidebar,
  flattenSidebarItems,
};
