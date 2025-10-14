import { defineRouting } from "next-intl/routing";
import { locales } from "@/types";

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "en",
  domains: [
    {
      domain: "gorgojs.com",
      defaultLocale: "en",
      locales: [...locales],
    },
    {
      domain: "gorgojs.ru",
      defaultLocale: "ru",
      locales: [...locales],
    },
  ],
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      ru: "/ru",
      en: "/en",
    },
  },
});
