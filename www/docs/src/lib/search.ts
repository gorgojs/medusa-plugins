import fs from "node:fs";
import path from "node:path";
import MiniSearch from "minisearch";
import { unstable_cache } from "next/cache";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import stripMarkdown from "strip-markdown";
import { unified } from "unified";

interface ContentItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  section: string;
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

// Extract text content from MDX (no changes)
async function extractTextFromMdx(content: string): Promise<string> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(stripMarkdown)
    .use(remarkStringify);

  const result = await processor.process(content);
  return String(result);
}

// Create and configure MiniSearch instance (no changes)
const createSearchIndex = (): MiniSearchType => {
  return new MiniSearch({
    fields: ["title", "content", "description", "section"],
    storeFields: ["id", "title", "description", "href", "section", "content"],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: { title: 2, content: 1 },
    },
  });
};

const fetchContentItemsForLocale = async (
  locale: string
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

    const href =
      "/" +
      relativePath
        .replace(/\\/g, "/")
        .replace(new RegExp(`/${locale}\\.mdx$`), "");

    const content = fs.readFileSync(filePath, "utf8");

    const h1Match = content.match(/^#\s+(.*)/m);
    const title = h1Match ? h1Match[1] : "Untitled";

    const textContent = await extractTextFromMdx(content);

    contentItems.push({
      id: href, // The clean, unique URL path is a perfect ID.
      title,
      href,
      section,
      content: textContent,
    });
  }

  return contentItems;
};

// MODIFIED: Wrap cache function to accept a locale and create a unique cache key
const getCachedSearchIndexJsonForLocale = (locale: string) => {
  return unstable_cache(
    async () => {
      "use server";
      const contentItems = await fetchContentItemsForLocale(locale);
      const searchIndex = createSearchIndex();
      searchIndex.addAll(contentItems);
      return JSON.stringify(searchIndex);
    },
    [`search_index_json_${locale}`], // Unique cache key per locale
    {
      revalidate: 3600,
      tags: ["search", `search-${locale}`],
    }
  )();
};

// Define search options for MiniSearch constructor
const miniSearchOptions = {
  fields: ["title", "content", "description", "section"],
  storeFields: ["id", "title", "description", "href", "section", "content"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: { title: 2, content: 1 },
  },
};

// MODIFIED: Get search index for a specific locale
export const getCachedSearchIndexForLocale = async (locale: string) => {
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

export const getCachedContentItemsForLocale = (locale: string) => {
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
  locale: string,
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
      content: snippet,
    };
  });
};
