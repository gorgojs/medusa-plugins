import fs from "node:fs";
import path from "node:path";
import { convert } from "html-to-text";
import MiniSearch from "minisearch";
import { renderToString } from "react-dom/server";
import { createElement, type ReactElement } from "react";
import { pluginsSidebar, toolsSidebar } from "../src/lib/sidebar";
import {
  type ContentItem,
  type Locale,
  type LocalizedString,
  locales,
} from "../src/types";

type SearchIndexType = {
  name: string;
  type: string;
  optional?: boolean;
  defaultValue?: string;
  example?: string;
  description?: string;
  children?: SearchIndexType[];
};

type SearchIndexTypeListProps = {
  types: SearchIndexType[];
  sectionTitle?: string;
};

function renderTypeItem(
  typeItem: SearchIndexType,
  key: string,
): ReactElement {
  const details = [
    typeItem.description && createElement("p", { key: `${key}-description` }, typeItem.description),
    typeItem.defaultValue &&
      createElement("p", { key: `${key}-default` }, `Default: ${typeItem.defaultValue}`),
    typeItem.example &&
      createElement("p", { key: `${key}-example` }, `Example: ${typeItem.example}`),
    (typeItem.children?.length ?? 0) > 0 &&
      createElement(
        "ul",
        { key: `${key}-children` },
        typeItem.children?.map((child, index) =>
          renderTypeItem(child, `${key}-child-${index}`),
        ),
      ),
  ].filter(Boolean);

  return createElement(
    "li",
    { key },
    createElement(
      "p",
      null,
      `${typeItem.name} (${typeItem.type})${typeItem.optional ? " optional" : ""}`,
    ),
    ...details,
  );
}

function SearchIndexTypeList({
  types,
  sectionTitle,
}: SearchIndexTypeListProps): ReactElement {
  return createElement(
    "section",
    null,
    sectionTitle ? createElement("h3", null, sectionTitle) : null,
    createElement(
      "ul",
      null,
      types.map((typeItem, index) => renderTypeItem(typeItem, `type-${index}`)),
    ),
  );
}

const miniSearchOptions = {
  fields: ["title", "content", "section", "sectionHierarchy"],
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
    boost: { title: 4, content: 2, sectionHierarchy: 3 },
  },
};

const getLocalizedString = (
  title: LocalizedString | string,
  locale: Locale,
): string => {
  if (typeof title === "object" && title) {
    return title[locale] || title.en; // Fallback to 'en' if locale not found
  }
  return (title as string) || "";
};

function getAllMdxFiles(
  dirPath: string,
  arrayOfFiles: string[] = [],
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

async function mdxToPlainText(
  mdxContent: string,
): Promise<{ title: string; description: string; content: string }> {
  const { compileMDX } = await import("next-mdx-remote/rsc");

  const { content, frontmatter } = await compileMDX<{
    title: string;
    description: string;
  }>({
    source: mdxContent,
    components: {
      TypeList: SearchIndexTypeList,
    },
    options: {
      parseFrontmatter: true,
    },
  });

  const html = renderToString(content);

  const text = convert(html, {
    preserveNewlines: true,
    selectors: [{ selector: "h1", format: "skip" }],
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    content: text.trim(),
  };
}

const getSectionHierarchy = (pathParts: string[], locale: Locale): string[] => {
  const allSidebars = [pluginsSidebar, toolsSidebar];

  for (const sidebar of allSidebars) {
    if (pathParts[0] === sidebar.slug) {
      const hierarchy: string[] = [getLocalizedString(sidebar.title, locale)];
      if (pathParts.length > 1 && sidebar.children) {
        for (const child of sidebar.children) {
          if (pathParts[1] === child.slug) {
            hierarchy.push(getLocalizedString(child.title, locale));
            if (pathParts.length > 2 && child.children) {
              for (const subChild of child.children) {
                if (pathParts[2] === subChild.slug) {
                  hierarchy.push(getLocalizedString(subChild.title, locale));
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

async function fetchContentItemsForLocale(
  locale: Locale,
): Promise<ContentItem[]> {
  const docsPath = path.join(process.cwd(), "src", "app", "[locale]", "(docs)");
  const allMdxFiles = getAllMdxFiles(docsPath);
  const localeSpecificFiles = allMdxFiles.filter(
    (filePath) => path.basename(filePath) === `${locale}.mdx`,
  );

  const contentItems: ContentItem[] = [];
  for (const filePath of localeSpecificFiles) {
    const relativePath = path.relative(docsPath, filePath);
    const pathParts = relativePath.split(path.sep);

    const href =
      "/" +
      relativePath
        .replace(/\\/g, "/")
        .replace(new RegExp(`/${locale}\\.mdx$`), "");
    const mdxContent = fs.readFileSync(filePath, "utf8");
    const { title, content } = await mdxToPlainText(mdxContent);

    const sectionHierarchy = getSectionHierarchy(pathParts, locale);

    contentItems.push({
      id: href + `-${locale}`,
      title,
      content,
      href,
      section: pathParts[0] || "general",
      sectionTitle: sectionHierarchy[0] || "General",
      sectionHierarchy,
    });
  }
  return contentItems;
}

async function buildSearchIndex() {
  console.log("Starting to build search indexes...");
  const publicDir = path.join(process.cwd(), "public");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  console.log(`Building search index...`);
  const searchIndex = new MiniSearch<ContentItem>(miniSearchOptions);
  for (const locale of locales) {
    const contentItems = await fetchContentItemsForLocale(locale);
    searchIndex.addAll(contentItems);
  }
  const json = JSON.stringify(searchIndex.toJSON());
  fs.writeFileSync(path.join(publicDir, `search-index.json`), json);
  console.log(`Search index for locale built successfully.`);
}

buildSearchIndex().catch((err) => {
  console.error("Failed to build search index:", err);
  process.exit(1);
});
