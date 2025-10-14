"use client";

import { TriangleRightMini } from "@medusajs/icons";
import React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { flattenSidebarItems, getCurrentSidebar } from "@/lib/sidebar";
import { cn } from "@/lib/utils";

export default function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  const { section, baseSlugs } = getCurrentSidebar(pathname);

  const flattenedItems = flattenSidebarItems(
    section?.children || [],
    baseSlugs
  );

  const currentPage = flattenedItems.find(
    (i) => `/${i.path.join("/")}` === pathname
  );

  const breadcrumbs = currentPage?.path ?? [];

  return (
    <nav
      aria-label="breadcrumb"
      className={cn("text-sm text-ui-fg-muted", className)}
    >
      {section?.children && (
        <ol className="flex flex-row items-center gap-x-1">
          <li>{section.title}</li>
          <TriangleRightMini className="text-ui-fg-muted" />
          {breadcrumbs.map((crumb, index) => {
            const page = flattenedItems.find((i) => i.slug === crumb);
            if (!page) {
              return null;
            }
            const isLast = index === breadcrumbs.length - 1;

            return (
              <React.Fragment key={crumb}>
                <li
                  className={cn(isLast && "font-medium text-ui-fg-subtle")}
                  aria-current={isLast ? "page" : undefined}
                >
                  <Link
                    href={`/${breadcrumbs.slice(0, index + 1).join("/")}`}
                    className="transition-colors hover:text-ui-fg-subtle"
                  >
                    {page?.title}
                  </Link>
                </li>
                {!isLast && <TriangleRightMini className="text-ui-fg-muted" />}
              </React.Fragment>
            );
          })}
        </ol>
      )}
    </nav>
  );
}
