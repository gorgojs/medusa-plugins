import type { SidebarItemType, SidebarType } from '@/types';
import { pluginsSidebar } from './plugins';
import { toolsSidebar } from './tools';
import { tutorialsSidebar } from './tutorials';

const sidebars: SidebarType[] = [pluginsSidebar, toolsSidebar, tutorialsSidebar];

const getAllSidebarPaths = () => {
  const collect = (items: SidebarItemType[]): string[] =>
    items.flatMap((item) => [
      ...(item.href ? [item.href] : []),
      ...(item.children ? collect(item.children) : []),
    ]);

  return sidebars.flatMap((s) => [...collect(s.children)]);
};

export { tutorialsSidebar, toolsSidebar, pluginsSidebar, sidebars, getAllSidebarPaths };
