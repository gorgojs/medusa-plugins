import type { Metadata } from "next";
import { headers } from "next/headers";
import Hero from "@/components/landing/hero";
import { PluginsSection } from "@/components/landing/plugins-section";
import { pluginCategories } from "@/data/landing";
import { buildAlternates } from "@/lib/alternates";
import type { Locale } from "@/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // biome-ignore lint/style/noNonNullAssertion: always persists
  const host = (await headers()).get("host")!;
  const { locale } = await params;

  return {
    title: "Medusa Plugins - Documentation",
    description:
      "Explore comprehensive documentation for Medusa plugins. Find all the information needed to understand, install, configure, and use plugins effectively in your projects.",
    keywords: ["medusa", "plugins", "ecommerce", "documentation", locale],
    alternates: buildAlternates("/", locale, host),
  } as Metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <div className="p-4">
      <div className="flex flex-col border rounded-xl shadow-md bg-ui-bg-base">
        <Hero />
        <PluginsSection locale={locale} categories={pluginCategories} />
      </div>
    </div>
  );
}
