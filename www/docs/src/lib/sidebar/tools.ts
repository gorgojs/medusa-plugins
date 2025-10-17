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
        en: "Create Medusa Plugin",
        ru: "Create Medusa Plugin",
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
          url: "github.com/sergkoudi/create-medusa-plugin",
        },
      ],
      children: [],
    },
  ],
};
