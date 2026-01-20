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

declare const MARKETPLACE_INJECTION_ZONES: readonly ["settings.marketplaces.list.before", "settings.marketplaces.list.after"]

export type MarketplaceInjectionZone = (typeof MARKETPLACE_INJECTION_ZONES)[number]

export type WidgetConfig = {
  component: () => JSX.Element;
  zone: MarketplaceInjectionZone;
}

export interface IMarketplaceProvider {
  getIdentifier(): string

  getWidgets(): WidgetConfig[]

  exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput>

  getProducts(data: GetProductsInput): Promise<GetProductsOutput>

  importProducts(data: ImportProductsInput): Promise<ImportProductsOutput>

  mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput>

  mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMarketplaceProductsOutput>

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

export interface MapToMarketplaceProductsInput extends MarketplaceProviderInput {
  [key: string]: any
}

export interface MapToMarketplaceProductsOutput {
  [key: string]: any
}

export interface MapToMedusaProductsInput extends MarketplaceProviderInput {
  [key: string]: any
}

export interface MapToMedusaProductsOutput {
  [key: string]: any
}
