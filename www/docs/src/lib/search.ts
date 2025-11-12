"use server";

import fs from "node:fs/promises";
import path from "node:path";
import MiniSearch from "minisearch";

import type { ContentItem, Locale } from "../types";

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

const getCachedSearchIndexForLocale = async (locale: Locale) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    `search-index-${locale}.json`,
  );
  try {
    const json = await fs.readFile(filePath, "utf-8");
    return MiniSearch.loadJSON<ContentItem>(json, miniSearchOptions);
  } catch (error) {
    console.error(`Error reading search index for locale ${locale}:`, error);
    return new MiniSearch<ContentItem>(miniSearchOptions);
  }
};

const getContentSnippet = (
  content: string,
  searchTerm: string,
  snippetLength: number = 150,
): string => {
  if (!searchTerm) {
    return content.length > snippetLength
      ? content.substring(0, snippetLength) + "..."
      : content;
  }
  const lowerContent = content.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerContent.indexOf(lowerSearchTerm);

  if (index === -1) {
    return content.length > snippetLength
      ? content.substring(0, snippetLength) + "..."
      : content;
  }

  let startIndex = Math.max(0, index - Math.floor(snippetLength / 2));
  if (startIndex > 0) {
    const spaceIndex = content.lastIndexOf(" ", startIndex);
    if (spaceIndex > -1) startIndex = spaceIndex + 1;
  }

  const endIndex = Math.min(content.length, startIndex + snippetLength);
  let snippet = content.substring(startIndex, endIndex);

  if (startIndex > 0) snippet = "..." + snippet;
  if (endIndex < content.length) snippet = snippet + "...";
  return snippet;
};

export const search = async (locale: Locale, query?: string | null) => {
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
