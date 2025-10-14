import { SiTelegram } from "@icons-pack/react-simple-icons";
import { MagnifyingGlass } from "@medusajs/icons";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default async function ContactSection() {
  const t = await getTranslations("contactSection");

  return (
    <Section className="px-6 py-8 flex items-center flex-col lg:flex-row gap-4 bg-pattern animate-slide-bg bg-size-[2000px]">
      <h2 className="xl:text-4xl text-2xl text-center lg:text-left pb-2 lg:py-8 xl:py-16 sm:px-18 z-1 text-ui-fg-base">
        {t("title")}
      </h2>
      <div className="flex-none flex flex-col items-center md:flex-row justify-center gap-3 w-full md:w-auto md:min-w-lg">
        <Button size="large" className="w-full md:w-fit max-w-lg" asChild>
          <Link href="/medusa-plugins">
            <MagnifyingGlass className="opacity-88" />
            <span className="opacity-88">{t("browsePlugins")}</span>
          </Link>
        </Button>
        <Button
          size="large"
          className="w-full md:w-fit max-w-lg"
          asChild
          variant="accent"
        >
          <Link href="https://t.me/medusajs" target="_blank">
            <SiTelegram className="opacity-88" />
            <span className="">{t("getInTouch")}</span>
          </Link>
        </Button>
      </div>
    </Section>
  );
}
