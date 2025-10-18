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
        en: "create-medusa-plugin",
        ru: "create-medusa-plugin",
      },
      hasOverview: true,
      slug: "create-medusa-plugin",
      isSection: true,
      npmPackage: "create-medusa-plugin",
      links: [
        {
          service: "npm",
          url: "https://www.npmjs.com/package/create-medusa-plugin",
        },
        {
          service: "github",
          url: "https://github.com/sergkoudi/create-medusa-plugin",
        },
      ],
      children: [],
    },
  ],
};
