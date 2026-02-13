import { MedusaContainer } from "@medusajs/framework"
import { ProductDTO } from "@medusajs/types"
import { MarketplaceDTO, MarketplaceProductDTO } from "../../types"

const MARKETPLACE_INJECTION_ZONES = [
  "marketplace.list.before",
  "marketplace.list.after",
  "marketplace.list.before",
  "marketplace.list.after",
  "marketplace.details.side.before",
  "marketplace.details.side.after"
]

export type MarketplaceInjectionZone = (typeof MARKETPLACE_INJECTION_ZONES)[number]

/**
 * Validates that the provided zone is a valid injection zone for a widget.
 */
export function isValidInjectionZone(zone: string) {
  return MARKETPLACE_INJECTION_ZONES.includes(zone)
}

export type WidgetConfig = {
  Component: () => JSX.Element;
  zone: MarketplaceInjectionZone[];
}

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
