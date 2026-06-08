import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  GetIntegrationProductsInput,
  GetIntegrationProductsOutput,
  IIntegrationProvider,
  ImportProductsInput,
  ImportProductsOutput,
  MapToIntegrationProductsInput,
  MapToIntegrationProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
  GetIntegrationWarehousesInput,
  GetIntegrationWarehousesOutput,
  GetIntegrationOrderTypesInput,
  GetIntegrationOrderTypesOutput,
  GetIntegrationOrdersInput,
  GetIntegrationOrdersOutput,
  MapToMedusaOrdersInput,
  MapToMedusaOrdersOutput
} from "../../../types"

export class AbstractIntegrationProvider implements IIntegrationProvider {
  static identifier: string
  static validateOptions(options: Record<any, any>): void | never { }

  getIdentifier() {
    return (this.constructor as any).identifier
  }

  async getIntegrationOrderTypes(data: GetIntegrationOrderTypesInput): Promise<GetIntegrationOrderTypesOutput> {
    throw Error("getOrderTypes must be overridden by the child class")
  }

  async getIntegrationOrders(data: GetIntegrationOrdersInput): Promise<GetIntegrationOrdersOutput> {
    throw Error("getOrders must be overridden by the child class")
  }

  async getIntegrationWarehouses(data: GetIntegrationWarehousesInput): Promise<GetIntegrationWarehousesOutput> {
    throw Error("getWarehouses must be overridden by the child class")
  }

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    throw Error("exportProducts must be overridden by the child class")
  }

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    throw Error("getProducts must be overridden by the child class")
  }

  async getIntegrationProducts(data: GetIntegrationProductsInput): Promise<GetIntegrationProductsOutput> {
    throw Error("getIntegrationProducts must be overridden by the child class")
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    throw Error("importProducts must be overridden by the child class")
  }

  async mapToMedusaOrders(data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput> {
    throw Error("mapToMedusaOrders must be overridden by the child class")
  }

  async mapToIntegrationProducts(data: MapToIntegrationProductsInput): Promise<MapToIntegrationProductsOutput> {
    throw Error("mapToIntegrationProducts must be overridden by the child class")
  }

  async mapToMedusaProducts(data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    throw Error("mapToMedusaProducts must be overridden by the child class")
  }
}
