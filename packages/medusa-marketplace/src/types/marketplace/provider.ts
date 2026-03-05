import { MedusaContainer } from "@medusajs/framework"
import { ProductDTO } from "@medusajs/framework/types"
import {MarketplaceDTO, MarketplaceProductDTO} from "../../types"

export interface IMarketplaceProvider {
  getIdentifier(): string

  exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput>

  getProducts(data: GetProductsInput): Promise<GetProductsOutput>

  importProducts(data: ImportProductsInput): Promise<ImportProductsOutput>

  getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarketplaceProductsOutput>

  mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput>

  mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput>

  getWarehouses(data: GetWarehousesInput): Promise<GetWarehousesOutput>
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

export type MapToMarketplaceProductsInput = MarketplaceProviderInput & {
  products: ProductDTO[]
}

export type MapToMedusaProductsInput = MarketplaceProviderInput & {
  marketplaceProducts: any
}

export type GetWarehousesInput = MarketplaceProviderInput

export type ExportProductsOutput = Record<string, unknown>

export type GetProductsOutput = ProductDTO[]

export type GetMarketplaceProductsOutput = MarketplaceProductDTO[]

export type ImportProductsOutput = Record<string, unknown>

export type MapToMarketplaceProductsOutput = Record<string, unknown>

export type MapToMedusaProductsOutput = ProductDTO[] 

export type GetWarehousesOutput = unknown[]
