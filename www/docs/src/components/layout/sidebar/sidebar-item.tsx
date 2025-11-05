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
import { getLocalizedString } from "@/lib/utils";
import type { LocalizedString, SidebarItemType, SidebarType } from "@/types";
import { overviewTitle } from ".";
import SidebarIcon from "./sidebar-icon";

type SidebarItemProps = {
  level?: number;
  slug?: string;
  icon?: string;
  title: LocalizedString | string;
  items?: (SidebarItemType | SidebarType)[];
  basePath?: string;
  isOverview?: boolean;
  hasOverview?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  level = 1,
  slug,
  icon,
  title,
  items: children = [],
  basePath = "",
  hasOverview = false,
}) => {
  const pathname = usePathname();
  const locale = useLocale();
  const href = `${basePath}/${slug}`;
  const isActive = pathname === href;

  const displayTitle =
    typeof title === "string" ? title : getLocalizedString(title, locale);

  const hasChildren = Array.isArray(children) && children.length > 0;
  const isLink = !!slug;

  if (hasOverview) {
    return (
      <Collapsible
        defaultOpen={pathname.startsWith(href)}
        className="border-b border-dashed last:border-b-0"
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-start text-start w-full txt-compact-small-plus text-ui-fg-subtle h-[28px] my-3 group">
            <div className="h-full aspect-square flex items-center justify-center">
              <SidebarIcon name={icon} className="mr-2" />
            </div>
            {displayTitle}
            {hasChildren && (
              <TriangleDownMini
                className={"ml-auto group-data-[state=open]:rotate-180"}
              />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent
          className="my-3 space-y-0.5"
          style={{
            paddingLeft: `${level * 16}px`,
          }}
        >
          {hasOverview && (
            <SidebarItem
              key={`overview-${slug}`}
              slug={slug}
              title={overviewTitle}
              basePath={basePath}
            />
          )}
          {children.map((child) => {
            return (
              <SidebarItem
                level={
                  "isSection" in child
                    ? child.isSection === true
                      ? level
                      : level + 1
                    : level + 1
                }
                key={child.slug}
                basePath={`${basePath}/${slug}`}
                hasOverview={"hasOverview" in child && child.hasOverview}
                {...child}
              />
            );
          })}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  if (isLink && hasChildren) {
    return (
      <>
        <Button
          className="flex justify-start text-start w-full text-sm"
          variant={isActive ? "secondary" : "transparent"}
          size="small"
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
          {children.map((child) => {
            return (
              <SidebarItem
                level={
                  "isSection" in child
                    ? child.isSection === true
                      ? level
                      : level + 1
                    : level + 1
                }
                key={child.slug}
                basePath={`${basePath}/${slug}`}
                hasOverview={"hasOverview" in child && child.hasOverview}
                {...child}
              />
            );
          })}
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
            size="small"
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
            children.map((child) => {
              return (
                <SidebarItem
                  level={
                    "isSection" in child
                      ? child.isSection
                        ? level
                        : level + 1
                      : level + 1
                  }
                  key={child.slug}
                  {...child}
                  basePath={`${basePath}/${slug}`}
                />
              );
            })}
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
          size="small"
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
          children.map((child) => {
            return (
              <SidebarItem
                level={
                  "isSection" in child
                    ? child.isSection
                      ? level
                      : level + 1
                    : level + 1
                }
                key={child.slug}
                {...child}
                basePath={`${basePath}/${slug}`}
              />
            );
          })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarItem;
