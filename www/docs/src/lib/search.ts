import fs from "node:fs";
import path from "node:path";
import { mdxToMd } from "mdx-to-md";
import MiniSearch from "minisearch";
import { unstable_cache } from "next/cache";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import stripMarkdown from "strip-markdown";
import { unified } from "unified";
import type { Locale, LocalizedString } from "../types";
import { pluginsSidebar, toolsSidebar } from "./sidebar";
import { getLocalizedString as getLocalizedStringUtil } from "./utils";

interface ContentItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  section: string;
  sectionTitle: string;
  sectionHierarchy: string[];
  content: string;
}

type MiniSearchType = InstanceType<typeof MiniSearch>;

function getAllMdxFiles(
  dirPath: string,
  arrayOfFiles: string[] = []
): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllMdxFiles(path.join(dirPath, file), arrayOfFiles);
    } else if (file.endsWith(".mdx")) {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

async function extractTextFromMdx(content: string): Promise<string> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(stripMarkdown)
    .use(remarkStringify);

  const result = await processor.process(content);
  return String(result);
}

const getSectionHierarchy = (pathParts: string[], locale: Locale): string[] => {
  const allSidebars = [pluginsSidebar, toolsSidebar];

  for (const sidebar of allSidebars) {
    if (pathParts[0] === sidebar.slug) {
      const hierarchy: string[] = [
        getLocalizedStringByDefault(sidebar.title, locale),
      ];

      if (pathParts.length > 1 && sidebar.children) {
        for (const child of sidebar.children) {
          if (pathParts[1] === child.slug) {
            hierarchy.push(getLocalizedStringByDefault(child.title, locale));
            if (pathParts.length > 2 && child.children) {
              for (const subChild of child.children) {
                if (pathParts[2] === subChild.slug) {
                  hierarchy.push(
                    getLocalizedStringByDefault(subChild.title, locale)
                  );
                  break;
                }
              }
            }
            break;
          }
        }
      }

      return hierarchy;
    }
  }

  return pathParts.map((part) => part.replace(/-/g, " "));
};

const getLocalizedStringByDefault = (
  title: LocalizedString | string,
  locale: Locale
): string => {
  if (typeof title === "object" && title) {
    return getLocalizedStringUtil(title as LocalizedString, locale);
  }
  return (title as string) || "";
};

const createSearchIndex = (): MiniSearchType => {
  return new MiniSearch({
    fields: ["title", "content", "description", "section"],
    storeFields: [
      "id",
      "title",
      "description",
      "href",
      "section",
      "sectionTitle",
      "sectionHierarchy",
      "content",
    ],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: { title: 2, content: 1 },
    },
  });
};

const fetchContentItemsForLocale = async (
  locale: Locale
): Promise<ContentItem[]> => {
  const docsPath = path.join(process.cwd(), "src", "app", "[locale]", "(docs)");

  const allMdxFiles = getAllMdxFiles(docsPath);

  const localeSpecificFiles = allMdxFiles.filter(
    (filePath) => path.basename(filePath) === `${locale}.mdx`
  );

  const contentItems: ContentItem[] = [];

  for (const filePath of localeSpecificFiles) {
    const relativePath = path.relative(docsPath, filePath);
    const pathParts = relativePath.split(path.sep);
    const section = pathParts[0] || "general";
    const mainSectionTitle = pathParts[0]
      ? getLocalizedStringByDefault(
          pathParts[0] === pluginsSidebar.slug
            ? pluginsSidebar.title
            : pathParts[0] === toolsSidebar.slug
            ? toolsSidebar.title
            : { en: pathParts[0], ru: pathParts[0] },
          locale
        )
      : "general";
    const sectionTitle = mainSectionTitle; // This matches the original intention
    const sectionHierarchy = getSectionHierarchy(pathParts, locale);

    const href =
      "/" +
      relativePath
        .replace(/\\/g, "/")
        .replace(new RegExp(`/${locale}\\.mdx$`), "");

    const content = await mdxToMd(filePath);

    const h1Match = content.match(/^#\s+(.*)/m);
    const title = h1Match ? h1Match[1] : "Untitled";

    const textContent = await extractTextFromMdx(content);

    contentItems.push({
      id: href,
      title,
      href,
      section,
      sectionTitle,
      sectionHierarchy,
      content: textContent,
    });
  }

  return contentItems;
};

const getCachedSearchIndexJsonForLocale = (locale: Locale) => {
  return unstable_cache(
    async () => {
      "use server";
      const contentItems = await fetchContentItemsForLocale(locale);
      const searchIndex = createSearchIndex();
      searchIndex.addAll(contentItems);
      return JSON.stringify(searchIndex);
    },
    [`search_index_json_${locale}`],
    {
      revalidate: 3600,
      tags: ["search", `search-${locale}`],
    }
  )();
};

const miniSearchOptions = {
  fields: ["title", "content", "description", "section"],
  storeFields: [
    "id",
    "title",
    "description",
    "href",
    "section",
    "sectionTitle",
    "sectionHierarchy",
    "content",
  ],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: { title: 2, content: 1 },
  },
};

export const getCachedSearchIndexForLocale = async (locale: Locale) => {
  "use server";
  const searchIndexJson = await getCachedSearchIndexJsonForLocale(locale);
  return MiniSearch.loadJSON(searchIndexJson, miniSearchOptions);
};

const getContentSnippet = (
  content: string,
  searchTerm: string,
  snippetLength: number = 150
) => {
  if (!searchTerm)
    return (
      content.substring(0, snippetLength) +
      (content.length > snippetLength ? "..." : "")
    );

  const lowerContent = content.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerContent.indexOf(lowerSearchTerm);

  if (index === -1) {
    return (
      content.substring(0, snippetLength) +
      (content.length > snippetLength ? "..." : "")
    );
  }

  let startIndex = Math.max(0, index - Math.floor(snippetLength / 2));
  if (startIndex > 0) {
    const spaceIndex = content.lastIndexOf(" ", startIndex);
    if (spaceIndex > 0 && startIndex - spaceIndex < 20) {
      startIndex = spaceIndex + 1;
    }
  }

  let endIndex = Math.min(content.length, startIndex + snippetLength);
  if (endIndex < content.length) {
    const spaceIndex = content.indexOf(" ", endIndex);
    if (spaceIndex > 0 && spaceIndex - endIndex < 20) {
      endIndex = spaceIndex;
    }
  }

  let snippet = content.substring(startIndex, endIndex);
  if (startIndex > 0) snippet = "..." + snippet;
  if (endIndex < content.length) snippet = snippet + "...";

  return snippet;
};

export const getCachedContentItemsForLocale = (locale: Locale) => {
  return unstable_cache(
    async () => {
      "use server";
      return await fetchContentItemsForLocale(locale);
    },
    [`content_items_${locale}`],
    {
      revalidate: 3600,
      tags: ["content", `content-${locale}`],
    }
  )();
};

export const searchWithSnippets = async (
  locale: Locale,
  query?: string | null
) => {
  "use server";
  const searchIndex = await getCachedSearchIndexForLocale(locale);
  const searchResults = searchIndex.search(query ?? MiniSearch.wildcard);

  return searchResults.map((result) => {
    const snippet = query
      ? getContentSnippet(result.content, query)
      : result.content;

    return {
      id: result.id,
      score: result.score,
      title: result.title,
      description: result.description,
      href: result.href,
      section: result.section,
      sectionTitle: result.sectionTitle,
      sectionHierarchy: result.sectionHierarchy,
      content: snippet,
    };
  });
};
