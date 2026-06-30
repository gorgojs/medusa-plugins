import {
  Classifier,
  ClassifierGroup,
  ClassifierProperty,
  Offer,
  OffersPackage,
  Product,
  Warehouse,
} from "./commerceml";

export type OnecExchangeWorkflowInput = {
  import: string[];
  offers: string[];
};

export type ParseFileStepInput = string[];

export type ImportOutput = {
  classifier?: Classifier;
  properties: ClassifierProperty[];
  classifierGroups: ClassifierGroup[];
  products: Product[];
  settings: any;
};

export type OffersOutput = {
  classifier?: Classifier;
  properties: ClassifierProperty[];
  offersPackage: OffersPackage;
  offers: Offer[];
  warehouses?: Warehouse[];
};

export type OnecDocumentProduct = {
  id: string;
  name: string;
  article?: string;
  quantity: number;
  pricePerUnit: number;
  sum: number;
};

export type OnecCounterparty = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  address?: string;
};

export type OnecDocument = {
  id: string;
  number: string;
  date: string;
  operation: string;
  currency: string;
  sum?: number;
  comment?: string;
  counterparties: OnecCounterparty[];
  products: OnecDocumentProduct[];
  requisiteValues?: { name: string; value: string }[];
};

export type OrdersOutput = {
  documents: OnecDocument[];
};
