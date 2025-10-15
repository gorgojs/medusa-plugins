import { Book, Check, House } from "@medusajs/icons";
import Link from "next/link";
import { getLocale } from "next-intl/server";
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
import { cn } from "@/lib/utils";
import GorgoWordmark from "@/svg/icons/gorgo-wordmark.svg";
import MobileNavigationMenu from "./mobile-navigation-menu";

export default async function Header() {
  const locale = await getLocale();

  return (
    <div className="sticky top-0 z-50">
      <header
        className={cn(
          "flex items-center justify-center h-14 duration-300 mx-auto backdrop-blur-lg bg-ui-bg-component/60"
        )}
      >
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="pl-4 justify-start flex shrink-0 xl:w-[250px]">
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
                        <Check className="ml-auto" />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
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
                        <House /> Homepage
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
            "w-full flex justify-end lg:justify-between h-full max-w-full transition-all xl:container xl:mx-0 max-w-content"
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
