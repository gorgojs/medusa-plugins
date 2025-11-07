import Link from "next/link";
import { getLocale } from "next-intl/server";
import CmdK from "@/components/layout/cmdk";
import { MainNavigationMenu } from "@/components/layout/main-navigation-menu";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import GorgoWordmark from "@/svg/icons/gorgo-wordmark.svg";
import GorgoWordmarkDark from "@/svg/icons/gorgo-wordmark-dark.svg";
import type { Locale } from "@/types";
import HeaderLogoWrapper from "./header-logo-wrapper";
import MobileNavigationMenu from "./mobile-navigation-menu";

export default async function Header() {
  const locale = await getLocale();

  return (
    <div className="sticky top-0 z-50">
      <header
        className={cn(
          "flex items-center justify-center h-14 duration-300 w-full backdrop-blur-lg bg-ui-bg-subtle/60 px-4 xl:px-0 border-b xl:border-b-0"
        )}
      >
        <HeaderLogoWrapper locale={locale as Locale}>
          <Link href="/" className="flex items-center xl:pl-4">
            <GorgoWordmark className="h-5 dark:hidden block" />
            <GorgoWordmarkDark className="h-5 hidden dark:block" />
          </Link>
        </HeaderLogoWrapper>
        <div
          className={cn(
            "w-full flex justify-end lg:justify-between h-full max-w-full transition-all xl:container xl:mx-0 max-w-content"
          )}
        >
          <MainNavigationMenu className="hidden lg:flex" />
          <div className="flex items-center">
            <CmdK />
          </div>
        </div>
        <div className="hidden md:flex shrink-0 xl:w-[250px] justify-end gap-1 pl-2 xl:pr-4">
          <ThemeToggle className="hidden md:flex" />
          <LocaleSwitcher className="hidden md:flex" />
        </div>
      </header>
      <MobileNavigationMenu />
    </div>
  );
}
