import type { Redirect } from "next/dist/lib/load-custom-routes";
import type { SidebarItemType, SidebarType } from "@/types";
import { sidebars } from "./sidebar";

const generateRedirects = (
  items: (SidebarItemType | SidebarType)[],
  basePath: string = ""
): Redirect[] => {
  const res = items.reduce((redirectsArray, item) => {
    if (!item.slug) {
      return redirectsArray;
    }

    const currentPath = basePath ? `${basePath}/${item.slug}` : `/${item.slug}`;

    if ("isSection" in item && item.isSection && !item.hasOverview) {
      const firstChild = item.children?.[0];

      if (!firstChild?.slug) {
        return redirectsArray;
      }

      const destinationPath = `${currentPath}/${firstChild.slug}`;
      redirectsArray.push({
        source: currentPath,
        destination: destinationPath,
        permanent: true,
      });
    }

    if (item.children?.length) {
      redirectsArray.push(...generateRedirects(item.children, currentPath));
    }

    return redirectsArray;
  }, [] as Redirect[]);
  return res;
};

export const redirects = async (): Promise<Redirect[]> => {
  return sidebars.flatMap((sidebar) => generateRedirects([sidebar]));
};
