import type { Metadata } from "next";
import Hero from "@/components/landing/hero";
import { PluginsSection } from "@/components/landing/plugins-section";
import { pluginCategories } from "@/data/landing";
import { getSeoMetadata } from "@/lib/seo";
import type { Locale } from "@/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const defaultMetadata = {
    title: "Medusa Plugins - Documentation",
    description:
      "Explore comprehensive documentation for Medusa plugins. Find all the information needed to understand, install, configure, and use plugins effectively in your projects.",
    keywords: ["medusa", "plugins", "ecommerce", "documentation", locale],
  };

  const pathname = "/";
  const seoMetadata = await getSeoMetadata(pathname, locale);

  return {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    keywords: defaultMetadata.keywords,
    ...seoMetadata,
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
      <div className="flex flex-col border rounded-xl shadow-md bg-ui-bg-component">
        <Hero locale={locale} />
        {/*<ContactSection />*/}
        <PluginsSection locale={locale} categories={pluginCategories} />
      </div>
    </div>
  );
}
