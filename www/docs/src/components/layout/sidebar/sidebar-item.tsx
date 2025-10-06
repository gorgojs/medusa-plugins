import { TriangleDownMini } from "@medusajs/icons";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { SidebarItemType, SidebarType } from "@/types";

// Type guard to check if item is SidebarType
const isSidebarType = (
  item: SidebarItemType | SidebarType
): item is SidebarType => {
  return "isSection" in item;
};

type SidebarItemProps = {
  slug?: string;
  title: string;
  children?: (SidebarItemType | SidebarType)[];
  basePath?: string; // The path to this item's parent section
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  slug,
  title,
  children,
  basePath = "",
}) => {
  // Determine if this is a section (top-level) or regular item
  const isSection = isSidebarType({ slug, title, children } as any);

  // For sections, we construct the href as /{slug}
  // For regular items, we construct the href using basePath + slug
  const href = isSection ? `/${slug}` : `${basePath}/${slug}`;

  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        {slug ? (
          <Link
            href={href}
            className="text-sm py-2 w-full flex justify-between items-center cursor-pointer group"
            suppressHydrationWarning
          >
            {title}
            {Array.isArray(children) && children.length > 0 && (
              <TriangleDownMini
                className={"group-data-[state=open]:rotate-180"}
              />
            )}
          </Link>
        ) : (
          <div className="text-sm py-2 w-full flex justify-between items-center cursor-pointer group">
            {title}
            {Array.isArray(children) && children.length > 0 && (
              <TriangleDownMini
                className={"group-data-[state=open]:rotate-180"}
              />
            )}
          </div>
        )}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {Array.isArray(children) &&
          children.map((child) => (
            <SidebarItem
              key={child.slug}
              {...child}
              basePath={isSection ? `/${slug}` : basePath}
            />
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarItem;
