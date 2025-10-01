'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { sidebars } from '@/lib/sidebar';

export function MainNavigationMenu({ className }: { className?: string }) {
  return (
    <NavigationMenu className={className} viewport={false}>
      <NavigationMenuList>
        {sidebars.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle({
                className: 'text-ui-fg-subtle font-normal',
              })}
            >
              <Link href={link.href}>{link.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
