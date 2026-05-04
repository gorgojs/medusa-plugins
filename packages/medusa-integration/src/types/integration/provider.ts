import { MedusaContainer } from "@medusajs/framework"
import { ProductDTO } from "@medusajs/framework/types"
import {IntegrationDTO, IntegrationProductDTO, IntegrationWarehouseType, MedusaOrder} from ".."

export interface IIntegrationProvider {
  getIdentifier(): string

  exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput>

  importProducts(data: ImportProductsInput): Promise<ImportProductsOutput>

  getProducts(data: GetProductsInput): Promise<GetProductsOutput>

  getIntegrationProducts(data: GetIntegrationProductsInput): Promise<GetIntegrationProductsOutput>

  getIntegrationOrderTypes(data: GetIntegrationOrderTypesInput): Promise<GetIntegrationOrderTypesOutput>

  getIntegrationOrders(data: GetIntegrationOrdersInput): Promise<GetIntegrationOrdersOutput>

  getIntegrationWarehouses(data: GetIntegrationWarehousesInput): Promise<GetIntegrationWarehousesOutput>

  mapToMedusaOrders(data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput>

  mapToIntegrationProducts(data: MapToIntegrationProductsInput): Promise<MapToIntegrationProductsOutput>

  mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput>
}

export type IntegrationProviderInput = {
  integration: IntegrationDTO
  container: MedusaContainer
  // data?: unknown  // if additional provider-specific data is required
}

export type ExportProductsInput = IntegrationProviderInput & {
  integrationProducts: unknown
}

export type GetProductsInput = IntegrationProviderInput & {
  ids?: string[]
}

export type GetIntegrationProductsInput = IntegrationProviderInput & {
  ids?: string[]
}

export type ImportProductsInput = IntegrationProviderInput & {
  products: ProductDTO[]
}

export type MapToMedusaOrdersInput = IntegrationProviderInput & {
  integrationOrders: Record<string, unknown>[]
}

export type MapToIntegrationProductsInput = IntegrationProviderInput & {
  products: ProductDTO[]
}

export type MapToMedusaProductsInput = IntegrationProviderInput & {
  integrationProducts: any
}

export type GetIntegrationOrderTypesInput = IntegrationProviderInput

export type GetIntegrationOrdersInput = IntegrationProviderInput & {
  orderType?: string
}

export type GetIntegrationWarehousesInput = IntegrationProviderInput

export type ExportProductsOutput = Record<string, unknown>

export type GetProductsOutput = ProductDTO[]

export type GetIntegrationProductsOutput = IntegrationProductDTO[]

export type ImportProductsOutput = Record<string, unknown>

export type MapToMedusaOrdersOutput = MedusaOrder[]

export type MapToIntegrationProductsOutput = Record<string, unknown>

export type MapToMedusaProductsOutput = ProductDTO[] 

export type GetIntegrationOrderTypesOutput = string[]

export type GetIntegrationOrdersOutput = Record<string, unknown>[]

export type GetIntegrationWarehousesOutput = IntegrationWarehouseType[]
