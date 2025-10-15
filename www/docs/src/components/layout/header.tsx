"use client";

import { Book, CloudSolid } from "@medusajs/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import CmdK from "@/components/layout/cmdk";
import { MainNavigationMenu } from "@/components/layout/main-navigation-menu";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import GorgoWordmark from "@/svg/icons/gorgo-wordmark.svg";
import MobileNavigationMenu from "./mobile-navigation-menu";
import { useLocale } from "next-intl";

export default function Header() {
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <header
        className={cn(
          "bg-ui-bg-component flex items-center justify-center h-14 duration-300 mx-auto border-b xl:border-transparent",
          scrolled && pathname === "/" && "xl:border-ui-border-base"
        )}
      >
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="pl-4 justify-start flex shrink-0">
                <Link href="/" className="flex items-start">
                  <GorgoWordmark className="h-5 text-ui-fg-base" />
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[224px] gap-0.5">
                  <li>
                    <NavigationMenuLink
                      className="flex flex-row items-center"
                      asChild
                    >
                      <Link href={`#`}>
                        <Book /> Docs
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className="flex flex-row items-center"
                      asChild
                    >
                      <Link
                        href={
                          locale === "ru"
                            ? "https://gorgojs.ru"
                            : "https://gorgojs.com"
                        }
                      >
                        <CloudSolid /> Gorgo
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div
          className={cn(
            "w-full flex justify-end lg:justify-between h-full max-w-full transition-all xl:container xl:mx-0 border-r border-l border-transparent max-w-content",
            scrolled && pathname !== "/" && "xl:bg-ui-bg-base"
          )}
        >
          <MainNavigationMenu className="hidden lg:flex" />
          <div className="flex items-center pr-2">
            <CmdK />
          </div>
        </div>
        <div className="flex shrink-0 xl:w-[250px] justify-end pr-4 gap-1">
          <ThemeToggle className="hidden md:flex" />
          <LocaleSwitcher className="hidden md:flex" />
        </div>
      </header>
      <MobileNavigationMenu />
    </div>
  );
}
