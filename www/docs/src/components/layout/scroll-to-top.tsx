"use client";

import { ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

export default function ScrollToTop() {
  const t = useTranslations("toc");

  return (
    <Button
      variant="secondary"
      className="self-start flex items-center gap-1 w-full"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronUp className="w-4 h-4" />
      {t("backToTop")}
    </Button>
  );
}
