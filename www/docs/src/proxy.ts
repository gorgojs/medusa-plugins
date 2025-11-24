import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing"; // Adjust path to your config

const handleI18n = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const response = handleI18n(request);

  const { pathname } = request.nextUrl;
  let cleanPath = pathname;

  for (const locale of routing.locales) {
    if (cleanPath.startsWith(`/${locale}/`) || cleanPath === `/${locale}`) {
      cleanPath = cleanPath.replace(`/${locale}`, "");
      if (cleanPath === "") cleanPath = "/";
      break;
    }
  }

  const linkHeaderParts: string[] = [];

  routing.domains?.forEach((domainConfig) => {
    domainConfig.locales.forEach((locale) => {
      let url = `https://${domainConfig.domain}`;

      if (locale === domainConfig.defaultLocale) {
        url += cleanPath === "/" ? "" : cleanPath;
      } else {
        // @ts-expect-error: Dynamic access to strict types
        const prefix = routing.localePrefix?.prefixes?.[locale] || `/${locale}`;
        url += `${prefix}${cleanPath === "/" ? "" : cleanPath}`;
      }

      let hreflang: string = locale;

      if (locale !== domainConfig.defaultLocale) {
        hreflang = `${locale}-${domainConfig.defaultLocale}`;
      }

      linkHeaderParts.push(`<${url}>; rel="alternate"; hreflang="${hreflang}"`);

      // Optional: Add x-default pointing to your main domain/locale
      if (domainConfig.domain === "docs.gorgojs.com" && locale === "en") {
        linkHeaderParts.push(`<${url}>; rel="alternate"; hreflang="x-default"`);
      }
    });
  });

  // 5. Set the header
  if (linkHeaderParts.length > 0) {
    response.headers.set("Link", linkHeaderParts.join(", "));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
