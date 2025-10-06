import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getAllSidebarPaths } from "@/lib/sidebar";

type PageProps = {
  params: {
    locale: string;
    slug?: string[];
  };
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

  let Post: React.ComponentType;
  try {
    const { default: ImportedPost } = await import(`../${path}/${locale}.mdx`);
    Post = ImportedPost;
  } catch (e) {
    console.error(e);
    return notFound();
  }

  return <Post />;
}
