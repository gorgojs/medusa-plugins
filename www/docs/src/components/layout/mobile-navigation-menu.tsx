"use client";

import { usePathname } from "@/i18n/navigation";
import { TocToggle } from "../toc-toggle";
import Breadcrumbs from "./breadcrumbs";
import { SidebarToggle } from "./sidebar/sidebar-toggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function MobileNavigationMenu() {
  const pathname = usePathname();
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

  if (pathname === "/") return null;

  return (
    <div
      className={cn(
        "bg-ui-bg-component flex items-center border-b xl:hidden px-2 lgish:border-b-0 transition-all",
        scrolled && "lgish:border-b"
      )}
    >
      <SidebarToggle />
      <Breadcrumbs />
      <TocToggle className="ml-auto lgish:hidden" />
    </div>
  );
}
