import {
  Classifier,
  ClassifierGroup,
  ClassifierProperty,
  Offer,
  OffersPackage,
  Product,
  Warehouse,
} from "./commerceml"

export type ParseFileStepInput = string[]

export type ImportOutput = {
  classifier?: Classifier
  properties: ClassifierProperty[]
  classifierGroups: ClassifierGroup[]
  products: Product[]
}

export type OffersOutput = {
  classifier?: Classifier
  properties: ClassifierProperty[]
  offersPackage: OffersPackage
  offers: Offer[]
  warehouses?: Warehouse[]
}
