export type SidebarItemType = {
  title: string;
  slug: string;
  children?: SidebarItemType[];
};

export type SidebarType = {
  title: string;
  slug: string;
  isSection?: boolean;
  npmPackage?: string;
  children: (SidebarItemType | SidebarType)[];
};

export type HeaderItemType = {
  title: string;
  slug: string;
};

export type FlattenedItem = {
  title: string;
  slug: string;
  path: string[];
};
