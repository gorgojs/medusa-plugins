import type { Toc } from "@stefanprobst/rehype-extract-toc";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import PaginationCards from "@/components/layout/pagination-cards";
import PluginLinks from "@/components/layout/plugin-links";
import PluginStats from "@/components/layout/plugin-stats";
import RightSidebar from "@/components/layout/right-sidebar";
import Sidebar from "@/components/layout/sidebar";
import TableOfContents from "@/components/layout/toc";
import { routing } from "@/i18n/routing";
import { getAllSidebarPaths, getCurrentSidebar } from "@/lib/sidebar";

type PageProps = {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const allPaths = getAllSidebarPaths();

  const allLocales = routing.locales;

  const params = allLocales.flatMap((locale) =>
    allPaths
      .filter((page) => page !== "/")
      .map((href) => {
        let slug: string[];

        if (href === "/") {
          slug = [];
        } else {
          slug = href.substring(1).split("/");
        }

        return { locale, slug };
      })
  );

  return params;
}

export default async function DynamicDocsPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const path = slug?.join("/") || "index";
  const { section, baseSlugs } = getCurrentSidebar(path);

  let Post: React.ComponentType;
  let toc: Toc;
  try {
    const { default: ImportedPost, toc: ImportedToc } = await import(
      `../${path}/${locale}.mdx`
    );
    Post = ImportedPost;
    toc = ImportedToc;
  } catch (e) {
    console.error(e);
    return notFound();
  }

  if (!section) {
    return notFound();
  }

  return (
    <>
      <nav className="sticky top-14 h-full">
        <Sidebar section={section} baseSlugs={baseSlugs} />
      </nav>
      <div className="container bg-ui-bg-base py-24 lgish:rounded-lg lgish:border grow-0 mx-0 max-w-content">
        <div className="max-w-[600px] px-8 xl:px-0 xl:max-w-[700px] mx-auto grow-0">
          <Breadcrumbs
            section={section}
            baseSlugs={baseSlugs}
            className="hidden lg:flex lg:mb-3"
          />
          <div className="prose text-sm" suppressHydrationWarning={true}>
            <Post />
          </div>
          <PaginationCards section={section} baseSlugs={baseSlugs} />
        </div>
      </div>
      <nav className="h-full realtive sticky top-14">
        <RightSidebar>
          <div className="space-y-3">
            {section?.npmPackage && (
              <PluginStats className="px-2" packageName={section.npmPackage} />
            )}
            {section?.links && section.links.length > 0 && (
              <PluginLinks links={section.links} />
            )}
          </div>
          <TableOfContents toc={toc as Toc} />
        </RightSidebar>
      </nav>
    </>
  );
}
