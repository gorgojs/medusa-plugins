import { TriangleDownMini } from "@medusajs/icons";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "@/i18n/navigation";
import { cn, getLocalizedString } from "@/lib/utils";
import type { LocalizedString, SidebarItemType } from "@/types";

type SidebarItemProps = {
  level?: number;
  slug?: string;
  title: LocalizedString | string;
  items?: SidebarItemType[];
  basePath?: string;
  isOverview?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  level = 1,
  slug,
  title,
  items: children,
  basePath = "",
  isOverview = false,
}) => {
  const pathname = usePathname();
  const locale = useLocale();
  // For overview item, the href is just the base path (e.g. /plugins rather than /plugins/section-slug)
  const href = isOverview ? `${basePath}` : `${basePath}/${slug}`;
  const isActive = pathname === href;

  const displayTitle =
    typeof title === "string" ? title : getLocalizedString(title, locale);

  const hasChildren = Array.isArray(children) && children.length > 0;
  const isLink = !!slug;

  if (isLink && hasChildren) {
    return (
      <>
        <Link
          href={href}
          className={cn(
            `text-sm py-2.5 px-4 w-full flex justify-start items-center cursor-pointer group rounded-lg grow border border-transparent`,
            isActive && "bg-ui-bg-base border-ui-border-base"
          )}
          suppressHydrationWarning
        >
          {displayTitle}
        </Link>
        <div
          style={{
            paddingLeft: `${level * 16}px`,
          }}
        >
          {children.map((child) => (
            <SidebarItem
              level={level + 1}
              key={child.slug}
              {...child}
              basePath={`${basePath}/${slug}`}
            />
          ))}
        </div>
      </>
    );
  }

  if (!isLink) {
    return (
      <Collapsible defaultOpen={true}>
        <CollapsibleTrigger asChild>
          <div
            className={cn(
              `text-sm py-2.5 px-4 w-full flex justify-between items-center cursor-pointer group rounded-lg grow border border-transparent`
            )}
          >
            {displayTitle}
            {hasChildren && (
              <TriangleDownMini
                className={"group-data-[state=open]:rotate-180"}
              />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent
          style={{
            paddingLeft: `${level * 16}px`,
          }}
        >
          {hasChildren &&
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
  }

  return (
    <Collapsible defaultOpen={true}>
      <CollapsibleTrigger asChild>
        <Link
          href={href}
          className={cn(
            `text-sm py-2.5 px-4 w-full flex justify-between items-center cursor-pointer group rounded-lg grow border border-transparent`,
            isActive && "bg-ui-bg-base border-ui-border-base"
          )}
          suppressHydrationWarning
        >
          {displayTitle}
          {hasChildren && (
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
        {hasChildren &&
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
