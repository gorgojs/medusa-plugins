"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getHeaderSections } from "@/lib/sidebar";
import { cn } from "@/lib/utils";

export function MainNavigationMenu({ className }: { className?: string }) {
  const headerSections = getHeaderSections();

  return (
    <NavigationMenu className={className} viewport={false}>
      <NavigationMenuList>
        {headerSections.map((link) => (
          <NavigationMenuItem key={link.slug}>
            {link.children &&
            link.children.some(
              (child) => "isSection" in child && child.isSection
            ) ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-ui-fg-subtle font-normal"
                  )}
                >
                  {link.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[224px] gap-0.5">
                    {link.children
                      .filter(
                        (child) => "isSection" in child && child.isSection
                      )
                      .map((child) => (
                        <li key={child.slug}>
                          <NavigationMenuLink asChild>
                            <Link href={`/${link.slug}/${child.slug}`}>
                              {child.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({
                  className: "text-ui-fg-subtle font-normal",
                })}
              >
                <Link href={`/${link.slug}`}>{link.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
