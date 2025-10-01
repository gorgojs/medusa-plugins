'use client';

import { usePathname } from '@/i18n/navigation';
import { TocToggle } from '../toc-toggle';
import Breadcrumbs from './breadcrumbs';
import { SidebarToggle } from './sidebar/sidebar-toggle';

export default function MobileNavigationMenu() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <div className="flex items-center border-b lg:hidden bg-ui-bg-base px-2">
      <SidebarToggle />
      <Breadcrumbs />
      <TocToggle className="ml-auto" />
    </div>
  );
}
