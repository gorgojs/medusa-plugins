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
  MapToMedusaProductsOutput,
  GetMarketplaceWarehousesInput,
  GetMarketplaceWarehousesOutput,
  GetMarketplaceOrderTypesInput,
  GetMarketplaceOrderTypesOutput,
  GetMarketplaceOrdersInput,
  GetMarketplaceOrdersOutput,
  MapToMedusaOrdersInput,
  MapToMedusaOrdersOutput
} from "../../../types"

export class AbstractMarketplaceProvider implements IMarketplaceProvider {
  static identifier: string
  static validateOptions(options: Record<any, any>): void | never { }

  getIdentifier() {
    return (this.constructor as any).identifier
  }

  async getMarketplaceOrderTypes(data: GetMarketplaceOrderTypesInput): Promise<GetMarketplaceOrderTypesOutput> {
    throw Error("getOrderTypes must be overridden by the child class")
  }

  async getMarketplaceOrders(data: GetMarketplaceOrdersInput): Promise<GetMarketplaceOrdersOutput> {
    throw Error("getOrders must be overridden by the child class")
  }

  async getMarketplaceWarehouses(data: GetMarketplaceWarehousesInput): Promise<GetMarketplaceWarehousesOutput> {
    throw Error("getWarehouses must be overridden by the child class")
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

  async mapToMedusaOrders(data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput> {
    throw Error("mapToMedusaOrders must be overridden by the child class")
  }

  async mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    throw Error("mapToMarketplaceProducts must be overridden by the child class")
  }

  async mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    throw Error("mapToMedusaProducts must be overridden by the child class")
  }
}
