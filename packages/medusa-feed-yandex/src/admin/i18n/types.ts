export type Translations = {
  [key: string]: string | Translations
}

export interface LanguageConfig {
  defaultLanguage: string
  supportedLanguages: string[]
  translationPath: string
}
