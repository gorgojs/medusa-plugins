"use client";

import { ArrowLongUp } from "@medusajs/icons";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export default function ScrollToTop() {
  const t = useTranslations("toc");

  return (
    <Button
      variant="transparent"
      size="large"
      className="self-start flex items-center gap-1 w-full text-ui-fg-subtle hover:text-ui-fg-base"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {t("backToTop")}
      <ArrowLongUp className="w-4 h-4" />
    </Button>
  );
}
