import { MedusaContainer } from "@medusajs/framework"

declare const MARKETPLACE_INJECTION_ZONES: readonly ["settings.marketplaces.list.before", "settings.marketplaces.list.after"]

export type MarketplaceInjectionZone = (typeof MARKETPLACE_INJECTION_ZONES)[number]

export type WidgetConfig = {
  Component: () => JSX.Element;
  zone: MarketplaceInjectionZone[];
}

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
