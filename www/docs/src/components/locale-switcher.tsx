'use client';

import { Select } from '@medusajs/ui';
import { ChevronDown, Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export function LocaleSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = useLocale();

  const switchLocale = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <div className="flex gap-2">
      <Select value={currentLocale} onValueChange={switchLocale}>
        <Select.Trigger
          className={cn(
            'bg-transparent shadow-none gap-1 [&_svg]:!text-ui-fg-base cursor-pointer [&_svg]:hidden',
            className
          )}
        >
          <Globe className="!block size-4" />
          <ChevronDown className="!block size-4" />
        </Select.Trigger>
        <Select.Content className="z-[50]">
          {routing.locales.map((locale) => (
            <Select.Item key={locale} value={locale}>
              {locale.toUpperCase()}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    </div>
  );
}
