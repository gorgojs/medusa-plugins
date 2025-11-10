type OzonAttributeValue = {
  dictionary_value_id?: number
  value: string
}

type OzonAttribute = {
  complex_id: number
  id: number
  values: OzonAttributeValue[]
}

export type OzonProduct = {
  offer_id: string
  price: string
  old_price: string
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

export type OzonAttributeValueCompat = { value: string; dictionary_value_id?: number }

export type OzonAttributeCompat = { complex_id: number; id: number; values: OzonAttributeValueCompat[] }

export type OzonAttr = { id: number; name: string }

export type OzonAttrsResponse = { result?: { attributes?: OzonAttr[] } }