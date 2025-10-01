import type { SidebarType } from '@/types';

export const toolsSidebar: SidebarType = {
  title: 'Tools',
  section: 'tools',
  href: '/tools',
  children: [
    {
      title: 'Installation',
      href: '/tools/installation',
    },
    {
      title: 'Configuration',
      href: '/tools/configuration',
    },
    {
      title: 'Usage',
      href: '/tools/usage',
    },
    {
      title: 'Security',
      href: '/tools/security',
    },
    {
      title: 'Integration',
      href: '/tools/integration',
    },
    {
      title: 'Troubleshooting',
      href: '/tools/troubleshooting',
    },
  ],
};
