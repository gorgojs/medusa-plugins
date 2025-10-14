import { TriangleDownMini } from "@medusajs/icons";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { SidebarItemType } from "@/types";

type SidebarItemProps = {
  level?: number;
  slug?: string;
  title: string;
  items?: SidebarItemType[];
  basePath?: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  level = 1,
  slug,
  title,
  items: children,
  basePath = "",
}) => {
  const pathname = usePathname();
  const href = `${basePath}/${slug}`;
  const isActive = pathname === href;

  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Link
          href={href}
          className={cn(
            `text-sm py-2.5 px-4 w-full flex justify-between items-center cursor-pointer group rounded-lg grow border border-transparent`,
            isActive && "bg-ui-bg-base border-ui-border-base"
          )}
          suppressHydrationWarning
        >
          {title}
          {Array.isArray(children) && children.length > 0 && (
            <TriangleDownMini
              className={"group-data-[state=open]:rotate-180"}
            />
          )}
        </Link>
      </CollapsibleTrigger>
      <CollapsibleContent
        style={{
          paddingLeft: `${level * 16}px`,
        }}
      >
        {Array.isArray(children) &&
          children.map((child) => (
            <SidebarItem
              level={level + 1}
              key={child.slug}
              {...child}
              basePath={`${basePath}/${slug}`}
            />
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarItem;
