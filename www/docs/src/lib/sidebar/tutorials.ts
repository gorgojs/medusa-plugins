import type { SidebarType } from '@/types';

export const tutorialsSidebar: SidebarType = {
  title: 'Tutorials',
  section: 'tutorials',
  href: '/tutorials',
  children: [
    {
      title: 'Getting Started',
      href: '/tutorials/getting-started',
    },
    {
      title: 'Basic Usage',
      href: '/tutorials/basic-usage',
    },
    {
      title: 'Advanced Features',
      href: '/tutorials/advanced-features',
    },
    {
      title: 'Security Best Practices',
      href: '/tutorials/security',
    },
    {
      title: 'Performance Optimization',
      href: '/tutorials/performance',
    },
  ],
};
