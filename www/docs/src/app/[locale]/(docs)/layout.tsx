'use client';

import Breadcrumbs from '@/components/layout/breadcrumbs';
import PaginationCards from '@/components/layout/pagination-cards';
import Sidebar from '@/components/layout/sidebar';
import TableOfContents from '@/components/layout/toc';

export default function DocsPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <nav className="sticky top-0 h-screen">
        <Sidebar />
      </nav>
      <div className="flex-1 bg-ui-bg-base py-24 lg:rounded-lg lg:border">
        <div className="max-w-[600px] px-8 xl:px-0 xl:max-w-[700px] mx-auto">
          <Breadcrumbs className="hidden lg:flex lg:mb-3" />
          <div className="prose" suppressHydrationWarning={true}>
            {children}
          </div>
          <PaginationCards />
        </div>
      </div>
      <nav className="sticky top-0 h-screen">
        <TableOfContents />
      </nav>
    </div>
  );
}
