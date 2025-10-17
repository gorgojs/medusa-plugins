import type { SidebarType } from "@/types";

export const pluginsSidebar: SidebarType = {
  title: {
    en: "Medusa Plugins",
    ru: "Плагины Medusa",
  },
  slug: "medusa-plugins",
  isSection: true,
  children: [
    {
      title: {
        en: "T-Kassa",
        ru: "Т-Касса",
      },
      slug: "t-kassa",
      isSection: true,
      hasOverview: true,
      npmPackage: "@gorgo/medusa-payment-tkassa",
      links: [
        {
          service: "npm",
          url: "https://www.npmjs.com/package/@gorgo/medusa-payment-tkassa",
        },
        {
          service: "github",
          url: "https://github.com/gorgojs/medusa-plugins/packages/medusa-payment-tkassa",
        },
        {
          service: "telegram",
          url: "https://t.me/medusajs_tkassa",
        },
      ],
      children: [
        {
          title: {
            en: "Getting Started",
            ru: "Быстрый старт",
          },
          slug: "getting-started",
          children: [],
        },
        {
          title: {
            en: "Storefront Integration",
            ru: "Интеграция с Storefront",
          },
          slug: "storefront-integration",
          children: [],
        },
      ],
    },
    {
      title: {
        en: "1C:Enterprise",
        ru: "1C:Предприятие",
      },
      slug: "1c-erp",
      isSection: true,
      hasOverview: true,
      npmPackage: "@gorgo/medusa-1c",
      links: [
        {
          service: "npm",
          url: "https://www.npmjs.com/package/@gorgo/medusa-1c",
        },
        {
          service: "github",
          url: "https://github.com/gorgojs/medusa-plugins",
        },
      ],
      children: [
        {
          title: {
            en: "Getting Started",
            ru: "Быстрый старт",
          },
          slug: "getting-started",
          children: [],
        },
      ],
    },
    {
      title: {
        en: "Robokassa",
        ru: "Robokassa",
      },
      slug: "robokassa",
      isSection: true,
      hasOverview: true,
      npmPackage: "@gorgo/medusa-payment-robokassa",
      links: [
        {
          service: "npm",
          url: "https://www.npmjs.com/package/@gorgo/medusa-payment-robokassa",
        },
        {
          service: "github",
          url: "https://github.com/gorgojs/medusa-plugins",
        },
      ],
      children: [
        {
          title: {
            en: "Getting Started",
            ru: "Быстрый старт",
          },
          slug: "getting-started",
          children: [],
        },
        {
          title: {
            en: "Storefront Integration",
            ru: "Интеграция с Storefront",
          },
          slug: "storefront-integration",
          children: [],
        },
      ],
    },
    {
      title: {
        en: "YooKassa",
        ru: "YooKassa",
      },
      slug: "yookassa",
      isSection: true,
      hasOverview: true,
      npmPackage: "medusa-payment-yookassa",
      links: [
        {
          service: "npm",
          url: "https://www.npmjs.com/package/medusa-payment-yookassa",
        },
        {
          service: "github",
          url: "https://github.com/medusajs/medusa-payment-yookassa",
        },
      ],
      children: [
        {
          title: {
            en: "Getting Started",
            ru: "Быстрый старт",
          },
          slug: "getting-started",
          children: [],
        },
        {
          title: {
            en: "Storefront Integration",
            ru: "Интеграция с Storefront",
          },
          slug: "storefront-integration",
          children: [],
        },
      ],
    },
    {
      title: {
        en: "Yandex Feed",
        ru: "Yandex Feed",
      },
      slug: "yandex-feed",
      isSection: true,
      hasOverview: true,
      npmPackage: "@gorgo/medusa-feed-yandex",
      links: [
        {
          service: "npm",
          url: "https://www.npmjs.com/package/@gorgo/medusa-feed-yandex",
        },
        {
          service: "github",
          url: "https://github.com/gorgojs/medusa-plugins",
        },
      ],
      children: [
        {
          title: {
            en: "Getting Started",
            ru: "Быстрый старт",
          },
          slug: "getting-started",
          children: [],
        },
        {
          title: {
            en: "Admin UI Extension",
            ru: "Расширение Admin UI",
          },
          slug: "admin-ui-extension",
          children: [],
        },
      ],
    },
  ],
};
