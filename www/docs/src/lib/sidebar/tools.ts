import type { SidebarType } from "@/types";

export const toolsSidebar: SidebarType = {
  title: {
    en: "Tools",
    ru: "Инструменты",
  },
  slug: "tools",
  isSection: true,
  children: [
    {
      title: {
        en: "Installation",
        ru: "Установка",
      },
      slug: "installation",
      children: [],
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
        en: "Usage",
        ru: "Использование",
      },
      slug: "usage",
      children: [],
    },
    {
      title: {
        en: "Security",
        ru: "Безопасность",
      },
      slug: "security",
      children: [],
    },
    {
      title: {
        en: "Integration",
        ru: "Интеграция",
      },
      slug: "integration",
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
};
