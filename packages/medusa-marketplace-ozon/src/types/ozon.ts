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
