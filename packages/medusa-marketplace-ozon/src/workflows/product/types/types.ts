import { OzonProduct } from "../../../types/ozon"

export const OZON_BASE_URL = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru"
export const HEADERS = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  "Accept": "application/json",
  "Content-Type": "application/json",
}

export type Input = {
  concurrency?: number
  onlyWithoutStatus?: boolean
}

export type Output = {
  ok: boolean
  status: number
  data: any
  task_id?: string
}

export type FetchResult =
  | {
    id: string
    task_id: string
    ok: true
    result: { items?: any[]; total?: number; status?: string }
  }
  | {
    id: string
    task_id: string
    ok: false
    error: string
}

export type Price = { amount: number; currency_code: string }

export type Variant = {
  id: string
  sku?: string | null
  barcode?: string | null
  options?: Record<string, string>
  prices?: Price[]
}

export type Image = { url: string }

export type ProductRow = {
  id: string
  title: string
  description?: string | null
  subtitle?: string | null
  handle?: string | null
  images?: Image[]
  categories?: { id: string; name: string }[]
  metadata?: Record<string, any> | null
  weight?: number | null
  length?: number | null
  height?: number | null
  width?: number | null
  origin_country?: string | null
  hs_code?: string | null
  variants?: Variant[]
}

export type RunInput = {
  items?: OzonProduct[]
  medusaItems?: ProductRow[]
  medusaCategoryName?: string
  statusFilter?: string
}

export type runExportStepInput = RunInput

export type ExportInput = { items: any[] }