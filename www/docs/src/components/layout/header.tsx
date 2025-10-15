"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CmdK from "@/components/layout/cmdk";
import { MainNavigationMenu } from "@/components/layout/main-navigation-menu";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import GorgoWordmark from "@/svg/icons/gorgo-wordmark.svg";
import MobileNavigationMenu from "./mobile-navigation-menu";
import { usePathname } from "@/i18n/navigation";

export default function Header() {
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
        <div
          className="pl-4 flex shrink-0 xl:w-[250px]"
          suppressHydrationWarning
        >
          <Link href="/" className="flex items-start">
            <GorgoWordmark className="h-5 text-ui-fg-base -mb-1" />
          </Link>
        </div>
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
