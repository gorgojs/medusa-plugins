'use client';

import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'usehooks-ts';
import SidebarItem from '@/components/layout/sidebar/sidebar-item';
import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { useSidebar } from '@/contexts/sidebar-context';
import { sidebars } from '@/lib/sidebar';
import type { SidebarItemType } from '@/types';
import { getSectionKey } from '@/lib/utils';

const SidebarContent = ({ items }: { items: SidebarItemType[] }) => (
  <nav className="flex flex-col gap-y-1 p-4">
    {items.map((item) => (
      <SidebarItem key={item.title} {...item} />
    ))}
  </nav>
);

const Sidebar = () => {
  const pathname = usePathname() ?? '';
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const isMobile = useMediaQuery('(max-width: 1023px)', {
    defaultValue: false,
    initializeWithValue: false,
  });

  const sectionKey = getSectionKey(pathname);
  const currentSidebar = sidebars.find(
    (item) => item.section.toLowerCase() === sectionKey.toLowerCase()
  );
  const items = currentSidebar?.children || [];

  if (isMobile) {
    return (
      <Drawer direction="left" open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <DrawerTitle className="sr-only">Sidebar</DrawerTitle>
        <DrawerContent className="h-full">
          <div className="overflow-y-auto">
            <SidebarContent items={items} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <aside className="sticky top-12 w-[250px]">
      <div className="overflow-y-auto">
        <SidebarContent items={items} />
      </div>
    </aside>
  );
};

export default Sidebar;
