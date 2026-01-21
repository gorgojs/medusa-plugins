import { MedusaContainer } from "@medusajs/framework"

export interface IMarketplaceProvider {
  getIdentifier(): string

  exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput>

  getProducts(data: GetProductsInput): Promise<GetProductsOutput>

  importProducts(data: ImportProductsInput): Promise<ImportProductsOutput>

  mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput>

  mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMarketplaceProductsOutput>

}

export type MarketplaceProviderInput = {
  container?: MedusaContainer
}

export type ExportProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type ExportProductsOutput = Record<string, unknown>

export type GetProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type GetProductsOutput = Record<string, unknown>

export type ImportProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type ImportProductsOutput = Record<string, unknown>

export type MapToMarketplaceProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type MapToMarketplaceProductsOutput = Record<string, unknown>

export type MapToMedusaProductsInput = MarketplaceProviderInput & Record<string, unknown>

export type MapToMedusaProductsOutput = Record<string, unknown>
