export const OZON_BASE_URL = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru"
export const HEADERS = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  "Accept": "application/json",
  "Content-Type": "application/json",
}

export type OzonExportRecord = {
  id: string
  task_id: string
  ozon_task_status?: string | null
  total?: number | null
  items?: any[] | null
  raw_result?: any | null
  error_message?: string | null
  last_checked_at?: Date | null
}

export type Input = {
  batchSize?: number
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

export type OzonAttributeValue = {
  dictionary_value_id?: number
  value: string
}

export type OzonAttribute = {
  complex_id: number
  id: number
  values: OzonAttributeValue[]
}

export type OzonProduct = {
  offer_id: string
  price: string
  quantity: number
  description_category_id: number
  type_id: number
  name: string
  attributes: OzonAttribute[]
  images: string[]
  weight: number
  weight_unit: string
  dimensions: {
    length: number
    width: number
    height: number
    depth: number
  }
  vat: string
}

export type OzonProductImport = {
  items: OzonProduct[],
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


export type OzonAttributeValueCompat = { value: string; dictionary_value_id?: number }
export type OzonAttributeCompat = { complex_id: number; id: number; values: OzonAttributeValueCompat[] }
export type OzonAttr = { id: number; name: string }
export type OzonAttrsResponse = { result?: { attributes?: OzonAttr[] } }
export type ExportInput = { items: any[] }