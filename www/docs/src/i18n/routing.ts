import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  domains: [
    {
      domain: 'gorgojs.com',
      defaultLocale: 'en',
      locales: ['en', 'ru'],
    },
    {
      domain: 'gorgojs.ru',
      defaultLocale: 'ru',
      locales: ['ru', 'en'],
    },
  ],
  localePrefix: {
    mode: 'as-needed',
    prefixes: {
      ru: '/ru',
      en: '/en',
    },
  },
});
