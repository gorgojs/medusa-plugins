import { MedusaContainer } from "@medusajs/framework"
import { ModuleProviderExports, ModuleServiceInitializeOptions } from "@medusajs/framework/types"

export const MarketplaceProviderRegistrationKey = "marketplace_providers"

export const MarketplaceProviderRegistrationPrefix = "mp_"

export type MarketplaceModuleOptions = Partial<ModuleServiceInitializeOptions> & {
  provider?: {
    resolve: string | ModuleProviderExports
    id: string
    options?: Record<string, unknown>
  }
}

export interface IMarketplaceProvider {
  getIdentifier(): string

  exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput>

  getProducts(data: GetProductsInput): Promise<GetProductsOutput>

  importProducts(data: ImportProductsInput): Promise<ImportProductsOutput>

  mapProducts(data: MapProductsInput): Promise<MapProductsOutput>

}

export interface MarketplaceProviderInput {
  container?: MedusaContainer
}

export interface ExportProductsInput extends MarketplaceProviderInput {
  [key: string]: any
}

export interface ExportProductsOutput {
  [key: string]: any
}

export interface GetProductsInput extends MarketplaceProviderInput {
  [key: string]: any
}

export interface GetProductsOutput {
  [key: string]: any
}

export interface ImportProductsInput extends MarketplaceProviderInput {
  [key: string]: any
}

export interface ImportProductsOutput {
  [key: string]: any
}

export interface MapProductsInput extends MarketplaceProviderInput {
  [key: string]: any
}

export interface MapProductsOutput {
  [key: string]: any
}
