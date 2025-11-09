import { ArrowRight } from "@medusajs/icons";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { getGorgoHomeLink } from "@/lib/utils";
import { headers } from 'next/headers';

export default async function Hero() {
  const t = await getTranslations("homePage.hero");
  const gorgoHomeLink = getGorgoHomeLink((await headers()).get('host') || 'localhost');

  return (
    <Section
      className="px-6 py-8 flex items-center border-transparent"
      containerClassName="border-t-0"
    >
      <div className="flex flex-col lg:flex-row min-h-[420px] items-center mx-auto w-full lg:py-8 xl:py-16 sm:px-18 gap-8">
        <div className="flex-1">
          <h1 className="text-h1 mb-3">{t("title")}</h1>
          <p className="txt-small-plus text-ui-fg-subtle max-w-lg mb-8">
            {t("subtitle")}
          </p>
          <Button variant="primary" size="large" asChild>
            <Link href={gorgoHomeLink}>
              {t("button")} <ArrowRight />
            </Link>
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
