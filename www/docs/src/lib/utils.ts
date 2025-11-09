import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LocalizedString } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalizedString(
  localizedString: LocalizedString,
  locale: string
): string {
  // Return the value for the current locale, with fallback to 'en' if not available
  return (
    localizedString[locale as keyof LocalizedString] || localizedString.en || ""
  );
}

export function getGorgoHomeLink(hostname: string): string {
  const parts = hostname.split('.') || []
  let baseDomain
  if (parts.length <= 2)
    baseDomain = 'com' // localhost or similar
  else
    baseDomain = parts.slice(-1).join('.')

  return `https://gorgojs.${baseDomain}`
}

