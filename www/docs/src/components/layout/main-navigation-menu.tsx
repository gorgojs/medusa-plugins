"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
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
import { cn, getLocalizedString } from "@/lib/utils";

export function MainNavigationMenu({ className }: { className?: string }) {
  const locale = useLocale();
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
                  {typeof link.title === "string"
                    ? link.title
                    : getLocalizedString(link.title, locale)}
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
                              {typeof child.title === "string"
                                ? child.title
                                : getLocalizedString(child.title, locale)}
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
                <Link href={`/${link.slug}`}>
                  {typeof link.title === "string"
                    ? link.title
                    : getLocalizedString(link.title, locale)}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
