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
