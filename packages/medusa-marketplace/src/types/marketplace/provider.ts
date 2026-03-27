import { MedusaContainer } from "@medusajs/framework"
import { ProductDTO } from "@medusajs/framework/types"
import {MarketplaceDTO, MarketplaceProductDTO, MarketplaceWarehouseType, MedusaOrder} from "../../types"

export interface IMarketplaceProvider {
  getIdentifier(): string

  exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput>

  importProducts(data: ImportProductsInput): Promise<ImportProductsOutput>

  getProducts(data: GetProductsInput): Promise<GetProductsOutput>

  getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarketplaceProductsOutput>

  getOrderTypes(data: GetOrderTypesInput): Promise<GetOrderTypesOutput>

  getOrders(data: GetOrdersInput): Promise<GetOrdersOutput>

  getWarehouses(data: GetWarehousesInput): Promise<GetWarehousesOutput>

  mapToMedusaOrders(data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput>

  mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput>

  mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput>
}

export type MarketplaceProviderInput = {
  marketplace: MarketplaceDTO
  container: MedusaContainer
  // data?: unknown  // if additional provider-specific data is required
}

export type ExportProductsInput = MarketplaceProviderInput & {
  marketplaceProducts: unknown
}

export type GetProductsInput = MarketplaceProviderInput & {
  ids?: string[]
}

export type GetMarketplaceProductsInput = MarketplaceProviderInput & {
  ids?: string[]
}

export type ImportProductsInput = MarketplaceProviderInput & {
  products: ProductDTO[]
}

export type MapToMedusaOrdersInput = MarketplaceProviderInput & {
  marketplaceOrders: Record<string, unknown>[]
}

export type MapToMarketplaceProductsInput = MarketplaceProviderInput & {
  products: ProductDTO[]
}

export type MapToMedusaProductsInput = MarketplaceProviderInput & {
  marketplaceProducts: any
}

export type GetOrderTypesInput = MarketplaceProviderInput

export type GetOrdersInput = MarketplaceProviderInput & {
  orderType?: string
}

export type GetWarehousesInput = MarketplaceProviderInput

export type ExportProductsOutput = Record<string, unknown>

export type GetProductsOutput = ProductDTO[]

export type GetMarketplaceProductsOutput = MarketplaceProductDTO[]

export type ImportProductsOutput = Record<string, unknown>

export type MapToMedusaOrdersOutput = MedusaOrder[]

export type MapToMarketplaceProductsOutput = Record<string, unknown>

export type MapToMedusaProductsOutput = ProductDTO[] 

export type GetOrderTypesOutput = string[]

export type GetOrdersOutput = Record<string, unknown>[]

export type GetWarehousesOutput = MarketplaceWarehouseType[]
