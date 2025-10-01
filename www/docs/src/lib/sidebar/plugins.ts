import type { SidebarType } from '@/types';

export const pluginsSidebar: SidebarType = {
  title: 'Plugins',
  section: 'plugins',
  href: '/plugins',
  children: [
    {
      title: 'Welcome',
      href: '/plugins/welcome',
    },
    {
      title: 'Installation',
      children: [
        {
          title: 'Docker Installation',
          href: '/plugins/installation/docker',
        },
      ],
    },
    {
      title: 'Configuration',
      href: '/plugins/configuration',
    },
    {
      title: 'API Reference',
      href: '/plugins/api',
    },
    {
      title: 'Advanced Usage',
      href: '/plugins/advanced-usage',
    },
    {
      title: 'Customization',
      href: '/plugins/customization',
    },
    {
      title: 'Troubleshooting',
      href: '/plugins/troubleshooting',
    },
  ],
};
