export type SidebarItemType = {
  title: LocalizedString;
  slug: string;
  children?: SidebarItemType[];
};

export type SidebarType = {
  title: LocalizedString;
  icon?: string;
  description?: LocalizedString;
  slug: string;
  isSection?: boolean;
  npmPackage?: string;
  links?: PluginLink[];
  children: (SidebarItemType | SidebarType)[];
  hasOverview?: boolean;
};

export type HeaderItemType = {
  title: string;
  slug: string;
};

export type FlattenedItem = {
  title: LocalizedString;
  slug: string;
  path: string[];
};

export type PluginLink = {
  service: PluginLinkService;
  url: string;
};

export type PluginLinkService =
  | "github"
  | "npm"
  | "telegram"
  | "discord"
  | "other";

export const locales = ["en", "ru"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedString = Record<Locale, string>;
