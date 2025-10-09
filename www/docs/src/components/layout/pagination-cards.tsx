"use client";

import {
  ArrowLeftMini,
  ArrowRightMini,
  TriangleLeftMini,
  TriangleRightMini,
} from "@medusajs/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebars } from "@/lib/sidebar";
import type { SidebarItemType, SidebarType } from "@/types";
import { getSectionKey } from "@/lib/utils";

interface FlattenedSidebarItem {
  title: string;
  href: string;
}

function PaginationCard({
  href,
  title,
  type,
}: {
  href: string;
  title: string;
  type: "prev" | "next";
}) {
  return (
    <Link
      href={href}
      className="flex justify-center items-center flex-1 border rounded-lg py-2.5 px-4 gap-1.5 text-ui-fg-subtle font-medium"
    >
      {type == "prev" && <TriangleLeftMini />}
      {title}
      {type == "next" && <TriangleRightMini />}
    </Link>
  );
}

function flattenSidebarItems(
  items: (SidebarItemType | SidebarType)[],
  basePath: string,
  result: FlattenedSidebarItem[] = []
): FlattenedSidebarItem[] {
  for (const item of items) {
    if ("isSection" in item && item.isSection) {
      const sectionPath = basePath
        ? `${basePath}/${item.slug}`
        : `/${item.slug}`;
      if (item.slug) {
        result.push({ title: item.title, href: sectionPath });
      }
      if (item.children) {
        flattenSidebarItems(item.children, sectionPath, result);
      }
    } else if ("slug" in item) {
      const itemPath = basePath ? `${basePath}/${item.slug}` : `/${item.slug}`;
      if (item.slug) {
        result.push({ title: item.title, href: itemPath });
      }
      if (Array.isArray(item.children) && item.children.length > 0) {
        flattenSidebarItems(item.children, basePath, result);
      }
    }
  }
  return result;
}

export default function PaginationCards() {
  const pathname = usePathname();
  const sectionKey = getSectionKey(pathname);
  const currentSidebar = sidebars.find(
    (item) => item.slug?.toLowerCase() === sectionKey.toLowerCase()
  );

  const currentSidebarItems = currentSidebar?.children || [];
  const basePath = currentSidebar?.slug ? `/${currentSidebar.slug}` : "";
  const flattenedItems = flattenSidebarItems(currentSidebarItems, basePath);

  const currentIndex = flattenedItems.findIndex((item) => {
    return pathname === item.href;
  });
  const prevPage = currentIndex > 0 ? flattenedItems[currentIndex - 1] : null;
  const nextPage =
    currentIndex < flattenedItems.length - 1
      ? flattenedItems[currentIndex + 1]
      : null;

  if (!prevPage && !nextPage) {
    return null;
  }

  return (
    <div className="flex gap-2 mt-8">
      {prevPage ? (
        <PaginationCard
          href={prevPage.href}
          title={prevPage.title}
          type="prev"
        />
      ) : (
        <div className="flex-1" />
      )}

      {nextPage ? (
        <PaginationCard
          href={nextPage.href}
          title={nextPage.title}
          type="next"
        />
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
