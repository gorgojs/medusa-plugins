"use client";

import { BarsThree, Book, ChevronDown, House, XMark } from "@medusajs/icons";
import { Button } from "@medusajs/ui";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
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
import useGorgoHomeLink from "@/hooks/useGorgoHomeLink";
import { Link } from "@/i18n/navigation";
import { getHeaderSections } from "@/lib/sidebar";
import { cn, getLocalizedString } from "@/lib/utils";
import { LocaleSwitcher } from "../locale-switcher";
import { ThemeToggle } from "../theme-toggle";

export default function MobileNavigation() {
  const t = useTranslations();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const headerSections = getHeaderSections();

  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);

  const isDesktop = useMediaQuery("(min-width: 900px)", {
    defaultValue: true,
    initializeWithValue: false,
  });

  const gorgoHomeLink = useGorgoHomeLink();

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
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  return (
    <>
      <motion.div
        animate={{ y: scrollDir === "down" ? 100 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed left-1/2 -translate-x-1/2 bottom-4 z-[100]"
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
                        <span>
                          {typeof link.title === "string"
                            ? link.title
                            : getLocalizedString(link.title, locale)}
                        </span>
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
                                  {typeof child.title === "string"
                                    ? child.title
                                    : getLocalizedString(child.title, locale)}
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
                      {typeof link.title === "string"
                        ? link.title
                        : getLocalizedString(link.title, locale)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <DialogFooter className="flex flex-row mb-12">
            <Button variant="secondary" className="flex-1" asChild>
              <Link href="/">
                <Book /> Docs
              </Link>
            </Button>
            <Button variant="secondary" className="flex-1" asChild>
              <Link href={gorgoHomeLink}>
                <House /> Homepage
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
