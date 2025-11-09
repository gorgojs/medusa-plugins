"use client";

import { Book, Check, House } from "@medusajs/icons";
import { useMediaQuery } from "usehooks-ts";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import useGorgoHomeLink from "@/hooks/useGorgoHomeLink";
import { Link } from "@/i18n/navigation";
import Triangle from "@/svg/icons/wordmark-triangle.svg";
import TriangleDark from "@/svg/icons/wordmark-triangle-dark.svg";

export default function HeaderLogoWrapper({
  children,
}: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)", {
    defaultValue: true,
    initializeWithValue: false,
  });
  const GorgoHomeLink = useGorgoHomeLink();

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
              <div className="-mt-1">
                <Triangle
                  className="dark:hidden block transition duration-300 group-data-[state=open]:rotate-180 size-[15px]"
                  aria-hidden="true"
                />
                <TriangleDark
                  className="hidden dark:block transition duration-300 group-data-[state=open]:rotate-180 size-[15px]"
                  aria-hidden="true"
                />
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-4 absolute w-auto z-[100]">
              <ul className="grid w-[200px] gap-0.5">
                <li>
                  <NavigationMenuLink
                    className="flex flex-row items-center"
                    asChild
                  >
                    <Link href="/">
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
                    <Link href={GorgoHomeLink}>
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
