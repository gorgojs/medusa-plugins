import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  IMarketplaceProvider,
  ImportProductsInput,
  ImportProductsOutput,
  MapProductsInput,
  MapProductsOutput
} from "../types"

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

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    throw Error("importProducts must be overridden by the child class")
  }

  async mapProducts(data: MapProductsInput): Promise<MapProductsOutput> {
    throw Error("mapProducts must be overridden by the child class")
  }
}
