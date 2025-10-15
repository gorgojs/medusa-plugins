import { ArrowRight } from "@medusajs/icons";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/types";


interface HeroProps {
  locale: Locale;
}

export default async function Hero({
  locale
}: HeroProps) {
  const t = await getTranslations("homePage.hero");
  
  return (
    <Section className="px-6 py-8 flex items-center border-transparent">
      <div className="flex flex-col lg:flex-row min-h-[420px] items-center mx-auto w-full lg:py-8 xl:py-16 sm:px-18 gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-medium mb-3">{t("title")}</h1>
          <p className="text-lg max-w-lg mb-8 text-ui-fg-subtle">
            {t("subtitle")}
          </p>
          <Button variant="primary">
            {t("button")} <ArrowRight />
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/illustration.svg"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Section>
  );
}
