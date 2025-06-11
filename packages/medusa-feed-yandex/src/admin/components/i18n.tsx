import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import en from "../i18n/translations/en.json"
import ru from "../i18n/translations/ru.json"

if (!i18n.isInitialized) {
  i18n
    .use(new LanguageDetector())
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ru: { translation: ru },
      },
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "cookie", "navigator"],
        lookupLocalStorage: "lng",
        lookupCookie: "lng",
        caches: ["localStorage"],
      },
    })
}

export const I18n = () => null
export { i18n }