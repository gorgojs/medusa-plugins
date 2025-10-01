export type SidebarType = {
  title: string;
  section: string;
  href: string;
  children: SidebarItemType[];
};

export type SidebarItemType =
  | {
      title: string;
      href: string;
      children?: SidebarItemType[];
    }
  | {
      title: string;
      children: SidebarItemType[];
      href?: never;
    };

export type HeaderItemType = {
  title: string;
  href: string;
};
