import type { SidebarType } from "@/types";

export const tutorialsSidebar: SidebarType = {
  title: {
    en: "Tutorials",
    ru: "Руководства",
  },
  slug: "tutorials",
  isSection: true,
  hasOverview: true,
  children: [
    {
      title: {
        en: "Getting Started",
        ru: "Начало работы",
      },
      slug: "getting-started",
      children: [],
    },
    {
      title: {
        en: "Basic Usage",
        ru: "Базовое использование",
      },
      slug: "basic-usage",
      children: [],
    },
    {
      title: {
        en: "Advanced Features",
        ru: "Расширенные возможности",
      },
      slug: "advanced-features",
      children: [],
    },
    {
      title: {
        en: "Security Best Practices",
        ru: "Рекомендации по безопасности",
      },
      slug: "security",
      children: [],
    },
    {
      title: {
        en: "Performance Optimization",
        ru: "Оптимизация производительности",
      },
      slug: "performance",
      children: [],
    },
  ],
};
