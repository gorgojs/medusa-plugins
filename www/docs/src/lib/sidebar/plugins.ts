import type { SidebarType } from "@/types";

export const pluginsSidebar: SidebarType = {
  title: "Plugins",
  slug: "plugins",
  isSection: true,
  children: [
    {
      title: "YooKassa",
      slug: "yookassa",
      isSection: true,
      npmPackage: "medusa-payment-yookassa",
      children: [
        {
          title: "Welcome",
          slug: "welcome",
          children: [],
        },
        {
          title: "Installation",
          slug: "installation",
          children: [
            {
              title: "Docker Installation",
              slug: "docker",
              children: [],
            },
          ],
        },
        {
          title: "Configuration",
          slug: "configuration",
          children: [],
        },
        {
          title: "API Reference",
          slug: "api",
          children: [],
        },
        {
          title: "Advanced Usage",
          slug: "advanced-usage",
          children: [],
        },
        {
          title: "Customization",
          slug: "customization",
          children: [],
        },
        {
          title: "Troubleshooting",
          slug: "troubleshooting",
          children: [],
        },
      ],
    },
    {
      title: "Moy Sklad",
      slug: "moysklad",
      isSection: true,
      children: [
        {
          title: "Welcome",
          slug: "welcome",
          children: [],
        },
        {
          title: "Installation",
          slug: "installation",
          children: [
            {
              title: "Docker Installation",
              slug: "docker",
              children: [],
            },
          ],
        },
        {
          title: "Configuration",
          slug: "configuration",
          children: [],
        },
        {
          title: "API Reference",
          slug: "api",
          children: [],
        },
        {
          title: "Advanced Usage",
          slug: "advanced-usage",
          children: [],
        },
        {
          title: "Customization",
          slug: "customization",
          children: [],
        },
        {
          title: "Troubleshooting",
          slug: "troubleshooting",
          children: [],
        },
      ],
    },
  ],
};
