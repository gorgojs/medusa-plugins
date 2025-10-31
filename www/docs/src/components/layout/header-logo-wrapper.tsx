"use client";

import { Book, Check, House, TriangleDownMini } from "@medusajs/icons";
import type { PropsWithChildren } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { docsLinks, siteLinks } from "@/data/site-links";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/types";

export default function HeaderLogoWrapper({
  locale,
  children,
}: PropsWithChildren<{ locale: Locale }>) {
  const isDesktop = useMediaQuery("(min-width: 1024px)", {
    defaultValue: true,
    initializeWithValue: false,
  });

  if (isDesktop)
    return (
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="justify-start flex shrink-0 xl:w-[250px] p-0"
              hideDefaultTrigger
            >
              {children}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-4 absolute w-auto z-[100]">
              <ul className="grid w-[200px] gap-0.5">
                <li>
                  <NavigationMenuLink
                    className="flex flex-row items-center"
                    asChild
                  >
                    <Link href={docsLinks[locale as Locale]}>
                      <Book /> Docs
                      <Check className="ml-auto" />
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    className="flex flex-row items-center"
                    asChild
                  >
                    <Link href={siteLinks[locale as Locale]}>
                      <House /> Homepage
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  else {
    return children;
  }
}
