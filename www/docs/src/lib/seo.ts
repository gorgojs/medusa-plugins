import { headers } from "next/headers";
import { routing } from "@/i18n/routing";

interface SeoMetadata {
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
}

export async function getSeoMetadata(
  pathname: string,
  locale: string
): Promise<SeoMetadata> {
  const cleanPathname = pathname.replace(/^\/(en|ru)/, "");

  const headersList = await headers();
  const host = headersList.get("host") || "";

  let canonicalUrl: string;
  const alternates: Record<string, string> = {};

  const domainConfig = routing.domains?.find(
    (domain) => domain.domain === host || domain.domain === `www.${host}`
  );

  if (domainConfig) {
    const protocol =
      process.env.NODE_ENV === "production" ? "https://" : "http://";
    canonicalUrl = `${protocol}${domainConfig.domain}${cleanPathname}`;
    domainConfig.locales.forEach((altLocale: string) => {
      alternates[
        altLocale
      ] = `${protocol}${domainConfig.domain}${cleanPathname}`;
    });
  } else {
    canonicalUrl =
      locale === routing.defaultLocale
        ? `${process.env.NEXT_PUBLIC_SITE_URL || ""}${cleanPathname}`
        : `${process.env.NEXT_PUBLIC_SITE_URL || ""}/${locale}${cleanPathname}`;

    routing.locales.forEach((altLocale) => {
      alternates[altLocale] =
        altLocale === routing.defaultLocale
          ? `${process.env.NEXT_PUBLIC_SITE_URL || ""}${cleanPathname}`
          : `${
              process.env.NEXT_PUBLIC_SITE_URL || ""
            }/${altLocale}${cleanPathname}`;
    });
  }

  alternates["x-default"] = routing.locales.includes(routing.defaultLocale)
    ? routing.defaultLocale === locale
      ? canonicalUrl
      : alternates[routing.defaultLocale]
    : canonicalUrl;

  return {
    alternates: {
      canonical: canonicalUrl,
      languages: alternates,
    },
  };
}
