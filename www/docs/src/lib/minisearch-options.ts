import type { Options } from "minisearch";
import type { ContentItem } from "../types";

export const miniSearchOptions: Options<ContentItem> = {
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
