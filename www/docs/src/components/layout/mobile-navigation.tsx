"use client";

import { BarsThree, ChevronDown, XMark } from "@medusajs/icons";
import { Button } from "@medusajs/ui";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "@/i18n/navigation";
import { getHeaderSections } from "@/lib/sidebar";
import { cn } from "@/lib/utils";
import { LocaleSwitcher } from "../locale-switcher";
import { ThemeToggle } from "../theme-toggle";

export default function MobileNavigation() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const headerSections = getHeaderSections();

  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);

  const isDesktop = useMediaQuery("(min-width: 900px)", {
    defaultValue: true,
    initializeWithValue: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("useEffect");
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  return (
    <>
      <motion.div
        animate={{ y: scrollDir === "down" ? 100 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed left-1/2 -translate-x-1/2 bottom-10 z-[100]"
      >
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          size="xlarge"
          variant="primary"
          className={cn(
            "pointer-events-auto rounded-full lg:hidden cursor-pointer bg-ui-button-inverted backdrop-blur supports-[backdrop-filter]:bg-ui-button-inverted/60 shadow-buttons-neutral"
          )}
        >
          {isOpen ? (
            <>
              <XMark />
              {t("mobile.close", { defaultValue: "Close" })}
            </>
          ) : (
            <>
              <BarsThree />
              {t("mobile.menu", { defaultValue: "Menu" })}
            </>
          )}
        </Button>
      </motion.div>
      <Dialog open={isOpen}>
        <DialogContent
          className="[&>div]:border-b-0 [&>div]:border-t-0 h-screen sm:max-w-full max-w-full w-full rounded-[0] p-10 flex flex-col"
          showCloseButton={false}
        >
          <DialogHeader className="!border-b-0 text-start flex-row justify-between items-center h-8">
            <DialogTitle className="text-ui-fg-subtle">
              {t("mobile.menu", { defaultValue: "Menu" })}
            </DialogTitle>
            <div className="flex gap-2">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </DialogHeader>
          <div className="flex-1 h-full flex items-center">
            <ul className="flex flex-col items-start gap-4 w-full">
              {headerSections.map((link) => (
                <li key={link.slug} className="w-full">
                  {link.children &&
                  link.children.some(
                    (child) => "isSection" in child && child.isSection
                  ) ? (
                    <Collapsible>
                      <CollapsibleTrigger
                        className={cn(
                          "flex justify-between items-center w-full text-2xl px-0 text-ui-fg-base hover:opacity-80 transition-opacity font-medium"
                        )}
                      >
                        <span>{link.title}</span>
                        <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden">
                        <ul className="flex flex-col mt-2 border-ui-border-base">
                          {link.children
                            .filter(
                              (child) => "isSection" in child && child.isSection
                            )
                            .map((child) => (
                              <li key={child.slug} className="py-1">
                                <Link
                                  href={`/${link.slug}/${child.slug}`}
                                  className="block text-lg py-2 hover:opacity-80 transition-opacity"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      href={`/${link.slug}`}
                      className="text-2xl px-0 text-ui-fg-base hover:opacity-80 transition-opacity font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <DialogFooter className="h-8" />
        </DialogContent>
      </Dialog>
    </>
  );
}
