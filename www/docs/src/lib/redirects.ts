import type { Redirect } from 'next/dist/lib/load-custom-routes';
import { sidebars } from './sidebar';

export const redirects = async () =>
  sidebars.map((sidebar) => ({
    source: `${sidebar.href}`,
    destination: sidebar.children[0].href,
    permanent: true,
  })) as Redirect[];
