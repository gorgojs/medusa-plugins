import { type ClassValue, clsx } from 'clsx';
import type { Locale } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { routing } from '@/i18n/routing';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isLocale(value: any): value is Locale {
  return routing.locales.includes(value);
}

export const getSectionKey = (path?: string | null): string => {
  const segments = path?.split('/').filter(Boolean) ?? [];
  if (segments.length === 0) return '';

  if (isLocale(segments[0])) {
    return segments[1] ?? '';
  }
  return segments[0];
};
