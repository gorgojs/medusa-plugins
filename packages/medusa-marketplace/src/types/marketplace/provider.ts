import { MedusaContainer } from "@medusajs/framework"
import { ProductDTO } from "@medusajs/types"
import {MarketplaceDTO, MarketplaceProductDTO} from "../../types"

const MARKETPLACE_INJECTION_ZONES = ["marketplaces.list.before", "marketplaces.list.after"]

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

export type ExportProductsOutput = Record<string, unknown>

export type GetProductsOutput = ProductDTO[]

export type GetMarketplaceProductsOutput = MarketplaceProductDTO[]

export type ImportProductsOutput = Record<string, unknown>

export type MapToMarketplaceProductsOutput = Record<string, unknown>

export type MapToMedusaProductsOutput = ProductDTO[] 
