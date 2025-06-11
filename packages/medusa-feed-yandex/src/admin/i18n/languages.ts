import en from "./translations/en.json"
import ru from "./translations/ru.json"

export const translations = {
  en,
  ru,
}

export type Language = keyof typeof translations