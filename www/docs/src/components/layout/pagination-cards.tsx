'use client';

import { ArrowLeftMini, ArrowRightMini } from '@medusajs/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebars } from '@/lib/sidebar';
import type { SidebarItemType } from '@/types';
import { getSectionKey } from '@/lib/utils';

interface FlattenedSidebarItem {
  title: string;
  href: string;
}

function flattenSidebarItems(
  items: SidebarItemType[],
  result: FlattenedSidebarItem[] = []
): FlattenedSidebarItem[] {
  for (const item of items) {
    if (item.href) {
      result.push({ title: item.title, href: item.href });
    }
    if (item.children) {
      flattenSidebarItems(item.children, result);
    }
  }
  return result;
}

export default function PaginationCards() {
  const pathname = usePathname();
  const sectionKey = getSectionKey(pathname);
  const currentSidebar = sidebars.find(
    (item) => item.section.toLowerCase() === sectionKey.toLowerCase()
  );

  const currentSidebarItems = currentSidebar?.children || [];
  const flattenedItems = flattenSidebarItems(currentSidebarItems);

  const currentIndex = flattenedItems.findIndex((item) => {
    return pathname?.endsWith(item.href ?? '');
  });
  const prevPage = currentIndex > 0 ? flattenedItems[currentIndex - 1] : null;
  const nextPage =
    currentIndex < flattenedItems.length - 1 ? flattenedItems[currentIndex + 1] : null;

  if (!prevPage && !nextPage) {
    return null;
  }

  return (
    <div className="flex gap-2 mt-8">
      {prevPage ? (
        <Link
          href={prevPage.href}
          className="group flex flex-1 flex-col gap-y-1 rounded-lg border border-medusa-border-base p-4 no-underline hover:bg-medusa-bg-base-hover"
        >
          <div className="flex flex-row items-center gap-x-2 text-medusa-fg-muted">
            <ArrowLeftMini />
            <span className="txt-compact-small">Previous</span>
          </div>
          <span className="txt-compact-small-plus font-medium text-medusa-fg-base group-hover:text-medusa-fg-interactive">
            {prevPage.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextPage ? (
        <Link
          href={nextPage.href}
          className="group flex flex-1 flex-col items-end gap-y-1 rounded-lg border border-medusa-border-base p-4 text-right no-underline hover:bg-medusa-bg-base-hover"
        >
          <div className="flex flex-row items-center gap-x-2 text-medusa-fg-muted">
            <span className="txt-compact-small">Next</span>
            <ArrowRightMini />
          </div>
          <span className="txt-compact-small-plus font-medium text-medusa-fg-base group-hover:text-medusa-fg-interactive">
            {nextPage.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
