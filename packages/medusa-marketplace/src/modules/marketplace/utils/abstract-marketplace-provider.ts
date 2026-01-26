import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  GetMarketplaceProductsInput,
  GetMarketplaceProductsOutput,
  IMarketplaceProvider,
  ImportProductsInput,
  ImportProductsOutput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput
} from "../../../types"

export class AbstractMarketplaceProvider implements IMarketplaceProvider {
  static identifier: string
  static validateOptions(options: Record<any, any>): void | never { }

  getIdentifier() {
    return (this.constructor as any).identifier
  }

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    throw Error("exportProducts must be overridden by the child class")
  }

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    throw Error("getProducts must be overridden by the child class")
  }

  async getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarketplaceProductsOutput> {
    throw Error("getMarketplaceProducts must be overridden by the child class")
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    throw Error("importProducts must be overridden by the child class")
  }

  async mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    throw Error("mapToMarketplaceProducts must be overridden by the child class")
  }

  async mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    throw Error("mapToMedusaProducts must be overridden by the child class")
  }
}
