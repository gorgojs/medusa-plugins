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
        en: "YooKassa",
        ru: "YooKassa",
      },
      slug: "yookassa",
      isSection: true,
      npmPackage: "medusa-payment-yookassa",
      links: [
        {
          service: "other",
          url: "https://docs.medusajs.com/plugins/payment/yookassa",
        },
        {
          service: "github",
          url: "https://github.com/medusajs/medusa-payment-yookassa",
        },
      ],
      children: [
        {
          title: {
            en: "Welcome",
            ru: "Добро пожаловать",
          },
          slug: "welcome",
          children: [],
        },
        {
          title: {
            en: "Installation",
            ru: "Установка",
          },
          slug: "installation",
          children: [
            {
              title: {
                en: "Docker Installation",
                ru: "Установка с Docker",
              },
              slug: "docker",
              children: [],
            },
          ],
        },
        {
          title: {
            en: "Configuration",
            ru: "Конфигурация",
          },
          slug: "configuration",
          children: [],
        },
        {
          title: {
            en: "API Reference",
            ru: "Справочник API",
          },
          slug: "api",
          children: [],
        },
        {
          title: {
            en: "Advanced Usage",
            ru: "Расширенное использование",
          },
          slug: "advanced-usage",
          children: [],
        },
        {
          title: {
            en: "Customization",
            ru: "Настройка",
          },
          slug: "customization",
          children: [],
        },
        {
          title: {
            en: "Troubleshooting",
            ru: "Устранение неполадок",
          },
          slug: "troubleshooting",
          children: [],
        },
      ],
    },
    {
      title: {
        en: "Moy Sklad",
        ru: "Мой Склад",
      },
      slug: "moysklad",
      isSection: true,
      hasOverview: true,
      children: [
        {
          title: {
            en: "Welcome",
            ru: "Добро пожаловать",
          },
          slug: "welcome",
          children: [],
        },
        {
          title: {
            en: "Installation",
            ru: "Установка",
          },
          slug: "installation",
          children: [
            {
              title: {
                en: "Docker Installation",
                ru: "Установка с Docker",
              },
              slug: "docker",
              children: [],
            },
          ],
        },
        {
          title: {
            en: "Configuration",
            ru: "Конфигурация",
          },
          slug: "configuration",
          children: [],
        },
        {
          title: {
            en: "API Reference",
            ru: "Справочник API",
          },
          slug: "api",
          children: [],
        },
        {
          title: {
            en: "Advanced Usage",
            ru: "Расширенное использование",
          },
          slug: "advanced-usage",
          children: [],
        },
        {
          title: {
            en: "Customization",
            ru: "Настройка",
          },
          slug: "customization",
          children: [],
        },
        {
          title: {
            en: "Troubleshooting",
            ru: "Устранение неполадок",
          },
          slug: "troubleshooting",
          children: [],
        },
      ],
    },
  ],
};
