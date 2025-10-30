import { TriangleDownMini } from "@medusajs/icons";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
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
  const href = isOverview ? `${basePath}` : `${basePath}/${slug}`;
  const isActive = pathname === href;

  const displayTitle =
    typeof title === "string" ? title : getLocalizedString(title, locale);

  const hasChildren = Array.isArray(children) && children.length > 0;
  const isLink = !!slug;

  if (isLink && hasChildren) {
    return (
      <>
        <Button
          className="flex justify-start text-start w-full text-sm"
          variant={isActive ? "secondary" : "transparent"}
          size="large"
          asChild
        >
          <Link href={href} suppressHydrationWarning>
            {displayTitle}
          </Link>
        </Button>
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
          <Button
            className="flex justify-start text-start w-full text-sm"
            variant={isActive ? "secondary" : "transparent"}
            size="large"
          >
            {displayTitle}
            {hasChildren && (
              <TriangleDownMini
                className={"group-data-[state=open]:rotate-180"}
              />
            )}
          </Button>
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
    <Collapsible defaultOpen={true} className="py-px">
      <CollapsibleTrigger asChild>
        <Button
          className="flex justify-start text-start w-full text-sm"
          variant={isActive ? "secondary" : "transparent"}
          size="large"
          asChild
        >
          <Link href={href} suppressHydrationWarning>
            {displayTitle}
            {hasChildren && (
              <TriangleDownMini
                className={"group-data-[state=open]:rotate-180"}
              />
            )}
          </Link>
        </Button>
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
