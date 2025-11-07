export const YM_BASE = process.env.YM_BASE_URL ?? "https://api.partner.market.yandex.ru"
export const YM_API_KEY = process.env.YM_API_KEY
export const YM_BUSINESS_ID = process.env.YM_BUSINESS_ID
export const YM_PHONE_CATEGORY_ID = 91491
export const YM_DEFAULT_VENDOR = "Medusa"
export const YM_FETCH_TIMEOUT_MS = Number(process.env.YM_FETCH_TIMEOUT_MS ?? 15000)
export const MAX_OFFERS_PER_REQUEST = 100 as const
