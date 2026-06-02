"use client";

import ApishipIcon from "@/svg/icons/apiship-icon.svg";
import OneCIcon from "@/svg/icons/1c-icon.svg";
import RobokassaIcon from "@/svg/icons/robokassa-icon.svg";
import TbankIcon from "@/svg/icons/tbank-icon.svg";
import YandexIcon from "@/svg/icons/yandex-ru-icon.svg";
import YookassaIcon from "@/svg/icons/yookassa-icon.svg";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import allActivity from "@/generated/activity.json";

type I18nString = { en: string; ru: string };

type ActivityItem = {
  id: string;
  title: I18nString;
  subtitle: I18nString;
  date: string;
  packageSlug?: string;
  url?: string;
  path?: string;
  isActive?: boolean;
};

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  tkassa: TbankIcon,
  robokassa: RobokassaIcon,
  apiship: ApishipIcon,
  yandex: YandexIcon,
  "1c": OneCIcon,
  yookassa: YookassaIcon,
};

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}.${month}.${year}`;
}

function AnnouncementCard({
  item,
  locale,
  showIcon = true,
  showDate = true,
}: {
  item: ActivityItem;
  locale: string;
  showIcon?: boolean;
  showDate?: boolean;
}) {
  const lang = locale === "ru" ? "ru" : "en";
  const Icon = showIcon && item.packageSlug ? iconMap[item.packageSlug] : undefined;

  const card = (
    <div className="flex flex-row items-center gap-4 py-2 px-3 rounded-docs_DEFAULT bg-ui-bg-component shadow-elevation-card-rest hover:shadow-elevation-card-hover cursor-pointer">
      {Icon && (
        <div className="shrink-0 w-8.5 h-8.5">
          <Icon className="h-full w-full rounded-md object-cover" />
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-start justify-between gap-1">
          <span className="text-compact-x-small-plus text-ui-fg-base truncate">
            {item.title[lang]}
          </span>
          {showDate && (
            <span className="text-compact-x-small-plus text-ui-fg-subtle shrink-0">
              {formatDate(item.date)}
            </span>
          )}
        </div>
        <span className="text-compact-x-small text-ui-fg-subtle truncate">
          {item.subtitle[lang]}
        </span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 relative rounded-full shrink-0 mt-[3px] bg-ui-bg-base border border-ui-border-base">
          <div className="w-2 h-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ui-tag-neutral-icon" />
        </div>
        <div className="flex-1 w-px bg-ui-border-base mt-1" />
      </div>
      <div className="flex-1 min-w-0 pb-3">
        {item.path ? (
          <Link href={item.path} className="block">
            {card}
          </Link>
        ) : item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
            {card}
          </a>
        ) : (
          card
        )}
      </div>
    </div>
  );
}

type AnnouncementProps = {
  count?: number;
  showIcons?: boolean;
  showDates?: boolean;
  showFade?: boolean;
};

export function Announcement({ count = 5, showIcons = true, showDates = true, showFade = true }: AnnouncementProps) {
  const locale = useLocale();
  const items = (allActivity as ActivityItem[])
    .filter((item) => item.isActive !== false)
    .slice(0, count);

  return (
    <div className="w-full max-w-[400px]">
      <div className="relative">
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <AnnouncementCard key={item.id} item={item} locale={locale} showIcon={showIcons} showDate={showDates} />
          ))}
        </div>
        {showFade && (
          <div className="absolute bottom-0 left-0 right-0 h-[19%] bg-gradient-to-b from-transparent to-ui-bg-base pointer-events-none" />
        )}
      </div>
    </div>
  );
}
