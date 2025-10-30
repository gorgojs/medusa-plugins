"use client";

import { TriangleLeftMini, TriangleRightMini } from "@medusajs/icons";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { flattenSidebarItems } from "@/lib/sidebar";
import { getLocalizedString } from "@/lib/utils";
import type { LocalizedString, SidebarType } from "@/types";
import { overviewTitle } from "./sidebar";

function PaginationCard({
  href,
  title,
  type,
}: {
  href: string;
  title: LocalizedString | string;
  type: "prev" | "next";
}) {
  const locale = useLocale();
  const displayTitle =
    typeof title === "string" ? title : getLocalizedString(title, locale);

  return (
    <Link
      href={href}
      className="flex justify-center items-center flex-1 border rounded-lg py-2.5 px-4 gap-1.5 text-ui-fg-subtle font-medium hover:bg-ui-bg-subtle transition-colors"
    >
      {type === "prev" && <TriangleLeftMini />}
      <span>{displayTitle}</span>
      {type === "next" && <TriangleRightMini />}
    </Link>
  );
}

export default function PaginationCards({
  section,
  baseSlugs,
}: {
  section: SidebarType;
  baseSlugs: string[];
}) {
  const pathname = usePathname();

  const flattenedItems = flattenSidebarItems(
    section?.children ?? [],
    baseSlugs
  );

  if (section.hasOverview) {
    flattenedItems.unshift({
      path: baseSlugs,
      title: overviewTitle,
      slug: "",
    });
  }

  const currentPageIndex = flattenedItems.findIndex(
    (i) => `/${i.path.join("/")}` === pathname
  );

  const prevPage =
    currentPageIndex > 0 ? flattenedItems[currentPageIndex - 1] : null;
  const nextPage =
    currentPageIndex < flattenedItems.length - 1
      ? flattenedItems[currentPageIndex + 1]
      : null;

  return (
    <div className="flex gap-2 mt-8">
      {prevPage ? (
        <PaginationCard
          href={`/${prevPage.path.join("/")}`}
          title={prevPage.title}
          type="prev"
        />
      ) : (
        <div className="flex-1" />
      )}

      {nextPage ? (
        <PaginationCard
          href={`/${nextPage.path.join("/")}`}
          title={nextPage.title}
          type="next"
        />
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
