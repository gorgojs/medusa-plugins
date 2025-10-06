export type SidebarItemType = {
  title: string;
  slug: string;
  children?: SidebarItemType[];
};

export type SidebarType = {
  title: string;
  slug?: string;
  isSection?: boolean;
  children: (SidebarItemType | SidebarType)[];
};

export type HeaderItemType = {
  title: string;
  slug: string;
};
