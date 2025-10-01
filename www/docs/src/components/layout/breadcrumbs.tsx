'use client';

import { TriangleRightMini } from '@medusajs/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from 'next-intl';
import React from 'react';
import { sidebars } from '@/lib/sidebar';
import { cn, isLocale } from '@/lib/utils';
import type { SidebarItemType } from '@/types';

interface Breadcrumb {
  title: string;
  href?: string;
}

function getLocale(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (isLocale(firstSegment)) {
    return firstSegment;
  }

  return 'en';
}

function stripLocale(path: string): string {
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return '/';

  if (isLocale(segments[0])) {
    if (segments.length === 1) return '/';
    return '/' + segments.slice(1).join('/');
  }

  return path;
}

function findBreadcrumbPath(
  pathname: string,
  items: SidebarItemType[],
  currentPath: Breadcrumb[]
): Breadcrumb[] | null {
  for (const item of items) {
    const newPath = [...currentPath, { title: item.title, href: item.href }];

    if (item.href === pathname) {
      return newPath;
    }

    if (item.children) {
      const foundPath = findBreadcrumbPath(pathname, item.children, newPath);
      if (foundPath) {
        return foundPath;
      }
    }
  }

  return null;
}

export default function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  if (!pathname) return null;

  const sectionKey = pathname.split('/')[2] ?? '';
  const currentSidebar = sidebars.find((sidebar) => sidebar.section === sectionKey);

  const normalizedPath = stripLocale(pathname);
  const homeBreadcrumb: Breadcrumb = { title: 'Documentation', href: '/' };

  let breadcrumbs: Breadcrumb[] = [homeBreadcrumb];

  if (currentSidebar) {
    const dynamicBreadcrumbs = findBreadcrumbPath(normalizedPath, currentSidebar.children, []);
    if (dynamicBreadcrumbs) {
      breadcrumbs = [homeBreadcrumb, ...dynamicBreadcrumbs];
    }
  }

  const locale = getLocale(pathname);

  return (
    <nav aria-label="breadcrumb" className={cn('text-sm text-ui-fg-muted', className)}>
      <ol className="flex flex-row items-center gap-x-1">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const hasHref = !!crumb.href;

          return (
            <React.Fragment key={crumb.title + index}>
              <li
                className={cn('breadcrumb-item', {
                  'font-medium text-ui-fg-subtle': isLast,
                })}
                aria-current={isLast ? 'page' : undefined}
              >
                {hasHref ? (
                  <Link
                    href={`/${locale}${crumb.href === '/' ? '' : crumb.href}`}
                    className="transition-colors hover:text-ui-fg-subtle"
                  >
                    {crumb.title}
                  </Link>
                ) : (
                  <span>{crumb.title}</span>
                )}
              </li>
              {!isLast && <TriangleRightMini className="text-ui-fg-muted" />}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
