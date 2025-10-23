import { SquaresPlusSolid, TriangleRightMini } from "@medusajs/icons";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { getLocalizedString } from "@/lib/utils";
import type { Locale, LocalizedString } from "@/types";
import Section from "../layout/section";
import { Link } from "@/i18n/navigation";

export interface Plugin {
  id: string;
  name: LocalizedString;
  href?: string;
  description: LocalizedString;
  icon: string | React.ReactNode;
  iconBgColor?: string;
}

export interface PluginCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  plugins: Plugin[];
}

interface PluginsLandingSectionProps {
  locale: Locale;
  categories: PluginCategory[];
}

export async function PluginsSection({
  locale,
  categories,
}: PluginsLandingSectionProps) {
  const t = await getTranslations("pluginsSection");

  return (
    <Section className="px-6 py-8 flex items-center flex-col lg:flex-row gap-4">
      <div className="w-full lg:py-8 xl:py-16 sm:px-18">
        <div className="mx-auto w-full">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <SquaresPlusSolid className="h-4 w-4" />
              <span>{t("sectionTitle")}</span>
            </div>
            <h1 className="mb-4 text-4xl font-medium">{t("title")}</h1>
            <p className="max-w-2xl text-lg text-ui-fg-subtle leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category) => (
              <div
                className="grid lg:grid-cols-[400px_1fr] gap-x-16 items-start"
                key={category.id}
              >
                <div className="mb-6">
                  <h2 className="mb-2 font-medium text-ui-fg-subtle text-sm ">
                    {getLocalizedString(category.title, locale)}
                  </h2>
                  <p className="text-lg font-medium">
                    {getLocalizedString(category.description, locale)}
                  </p>
                </div>

                <div className="grid gap-4 xl:grid-cols-2 flex-1">
                  {category.plugins.map((plugin) => (
                    <Card
                      key={plugin.id}
                      className="bg-ui-bg-base group flex flex-row cursor-pointer items-center justify-between p-3 transition-all hover:shadow-sm grow-0 w-full"
                    >
                      <Link
                        href={`/medusa-plugins/${plugin.id}`}
                        className="flex w-full items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="shrink-0 flex size-7 items-center justify-center rounded-md overflow-clip text-sm font-bold"
                            style={
                              plugin.iconBgColor
                                ? { backgroundColor: plugin.iconBgColor }
                                : {}
                            }
                          >
                            {typeof plugin.icon === "string"
                              ? plugin.icon
                              : plugin.icon}
                          </div>

                          <div>
                            <h3 className="font-semibold text-foreground text-sm">
                              {getLocalizedString(plugin.name, locale)}
                            </h3>
                            <p className="text-[10px] text-ui-fg-subtle line-clamp-1">
                              {getLocalizedString(plugin.description, locale)}
                            </p>
                          </div>
                        </div>

                        <TriangleRightMini className="text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
