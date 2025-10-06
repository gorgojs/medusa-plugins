"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CmdK from "@/components/layout/cmdk";
import { MainNavigationMenu } from "@/components/layout/main-navigation-menu";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import GorgoWordmark from "@/svg/icons/gorgo-wordmark.svg";
import MobileNavigationMenu from "./mobile-navigation-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
          "flex items-center justify-center h-14 duration-300 mx-auto",
          scrolled
            ? "bg-ui-bg-base border-ui-border-base border-b xl:bg-transparent xl:border-none"
            : "bg-ui-bg-base border-b lg:bg-transparent lg:border-none"
        )}
      >
        <div
          className="pl-4 flex shrink-0 xl:w-[250px]"
          suppressHydrationWarning
        >
          <Link href="/" className="flex items-start">
            <GorgoWordmark className="h-5 text-ui-fg-base" />
          </Link>
        </div>
        <div
          className={cn(
            "w-full flex justify-end lg:justify-between h-full transition-all border-t border-x border-transparent container mx-0",
            scrolled
              ? "xl:bg-ui-bg-base xl:border-ui-border-base"
              : "bg-transparent"
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
