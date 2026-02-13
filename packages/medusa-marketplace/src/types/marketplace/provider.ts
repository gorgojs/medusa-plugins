import { MedusaContainer } from "@medusajs/framework"
import { ProductDTO } from "@medusajs/types"
import { MarketplaceProductDTO } from "../../types"

export interface IMarketplaceProvider {
  getIdentifier(): string

  exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput>

  getProducts(data: GetProductsInput): Promise<GetProductsOutput>

  importProducts(data: ImportProductsInput): Promise<ImportProductsOutput>

  getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarketplaceProductsOutput>

  mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput>

  mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput>

}

export type MarketplaceProviderInput = {
  container?: MedusaContainer
}

export type ExportProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type ExportProductsOutput = Record<string, unknown>

export type GetProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type GetProductsOutput = ProductDTO[]

export type GetMarketplaceProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type GetMarketplaceProductsOutput = MarketplaceProductDTO[]

export type ImportProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type ImportProductsOutput = Record<string, unknown>

export type MapToMarketplaceProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type MapToMarketplaceProductsOutput = Record<string, unknown>

export type MapToMedusaProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type MapToMedusaProductsOutput = ProductDTO[] 
