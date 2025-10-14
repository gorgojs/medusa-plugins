import type { SidebarType } from "@/types";

export const pluginsSidebar: SidebarType = {
  title: {
    en: "Plugins",
    ru: "Плагины",
  },
  slug: "plugins",
  isSection: true,
  children: [
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
