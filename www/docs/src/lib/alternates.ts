import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

type Alternates = NonNullable<Metadata["alternates"]>;

function getLocalePrefix(locale: string, domainDefaultLocale: string) {
  const localePrefix = routing.localePrefix;
  let mode: "always" | "never" | "as-needed" = "as-needed";
  let prefixes: Record<string, string> = {};

  if (typeof localePrefix === "string") {
    mode = localePrefix;
  } else if (localePrefix) {
    mode = localePrefix.mode;
    if ("prefixes" in localePrefix && localePrefix.prefixes) {
      prefixes = localePrefix.prefixes;
    }
  }
  const prefix = prefixes[locale] ?? `/${locale}`;

  if (mode === "never") return "";
  if (mode === "as-needed" && locale === domainDefaultLocale) return "";

  return prefix;
}

function buildCanonical(
  cleanPath: string,
  locale: string,
  currentDomain: string,
): string {
  const normalizedPath = cleanPath === "/" ? "" : cleanPath;

  const domainConfig = routing.domains?.find((d) => d.domain === currentDomain);

  if (!domainConfig) {
    return `https://${currentDomain}${normalizedPath}`;
  }

  const prefix = getLocalePrefix(locale, domainConfig.defaultLocale);

  return `https://${domainConfig.domain}${prefix}${normalizedPath}`;
}

export function buildAlternates(
  cleanPath: string,
  locale: string,
  currentDomain: string,
): Alternates {
  const normalizedPath = cleanPath === "/" ? "" : cleanPath;
  const domains = routing.domains ?? [];

  const languages: Record<string, string> = {};

  for (const domain of domains) {
    const region =
      domain.defaultLocale === routing.defaultLocale
        ? null
        : domain.defaultLocale.toUpperCase();

    for (const loc of domain.locales) {
      const prefix = getLocalePrefix(loc, domain.defaultLocale);
      const url = `https://${domain.domain}${prefix}${normalizedPath}`;

      const hreflang = region ? `${loc}-${region}` : loc;
      languages[hreflang] = url;
    }
  }

  const currentDomainConfig = domains.find((d) => d.domain === currentDomain);

  if (!currentDomainConfig) {
    return {
      canonical: `https://${currentDomain}${normalizedPath}`,
      languages,
    };
  }

  const defaultPrefix = getLocalePrefix(
    currentDomainConfig.defaultLocale,
    currentDomainConfig.defaultLocale,
  );

  return {
    canonical: buildCanonical(cleanPath, locale, currentDomain),
    languages: {
      ...languages,
      "x-default": `https://${currentDomainConfig.domain}${defaultPrefix}${normalizedPath}`,
    },
  };
}
