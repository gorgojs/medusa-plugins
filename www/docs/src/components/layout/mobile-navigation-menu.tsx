"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { getCurrentSidebar } from "@/lib/sidebar";
import { cn } from "@/lib/utils";
import { TocToggle } from "../toc-toggle";
import Breadcrumbs from "./breadcrumbs";
import { SidebarToggle } from "./sidebar/sidebar-toggle";

export default function MobileNavigationMenu() {
  const pathname = usePathname();
  const { section, baseSlugs } = getCurrentSidebar(pathname);
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

  if (!section) return null;

  if (pathname === "/") return null;

  return (
    <div
      className={cn(
        "bg-ui-bg-base flex items-center border-b xl:hidden px-2 lgish:border-b-0 transition-all",
        scrolled && "lgish:border-b"
      )}
    >
      <SidebarToggle />
      <Breadcrumbs section={section} baseSlugs={baseSlugs} />
      <TocToggle className="ml-auto lgish:hidden" />
    </div>
  );
}
