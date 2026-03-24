import { AwilixResolutionError } from "awilix"
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
  GetWarehousesInput,
  GetWarehousesOutput,
  GetOrderTypesOutput,
  GetOrderTypesInput,
  GetOrdersInput,
  GetOrdersOutput,
  MapToMedusaOrdersInput,
  MapToMedusaOrdersOutput
} from "../../../types"
import { MarketplaceProviderRegistrationPrefix } from "../types"
import { Logger } from "@medusajs/framework/types"

type InjectedDependencies = {
  logger?: Logger
  [key: `${typeof MarketplaceProviderRegistrationPrefix}${string}`]: IMarketplaceProvider
}

export default class MarketplaceProviderService {
  protected dependencies: InjectedDependencies
  #logger: Logger

  constructor(container: InjectedDependencies) {
    this.dependencies = container
    this.#logger = container["logger"]
      ? container.logger
      : (console as unknown as Logger)
  }

  retrieveProvider(providerId: string): IMarketplaceProvider {
    try {
      return this.dependencies[providerId as any] as IMarketplaceProvider
    } catch (err) {
      if (err instanceof AwilixResolutionError) {
        const errMessage = `
Unable to retrieve the marketplace provider with id: ${providerId}
Please make sure that the provider is registered in the container and it is configured correctly in your project configuration file.`

        throw new Error(errMessage)
      }

      const errMessage = `Unable to retrieve the marketplace provider with id: ${providerId}, the following error occurred: ${err instanceof Error ? err.message : String(err)}`
      this.#logger.error(errMessage)

      throw new Error(errMessage)
    }
  }

  getProvidersList(): string[] {
    const prefix = MarketplaceProviderRegistrationPrefix
    return Object.keys(this.dependencies).filter(key => key.startsWith(prefix))
  }

  async exportProducts(
    providerId: string,
    input: ExportProductsInput
  ): Promise<ExportProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.exportProducts(input)
  }

  async getProducts(
    providerId: string,
    input: GetProductsInput
  ): Promise<GetProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getProducts(input)
  }

  async getMarketplaceProducts(
    providerId: string,
    input: GetMarketplaceProductsInput
  ): Promise<GetMarketplaceProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getMarketplaceProducts(input)
  }

  async getOrderTypes(
    providerId: string,
    input: GetOrderTypesInput
  ): Promise<GetOrderTypesOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getOrderTypes(input)
  }

  async getOrders(
    providerId: string,
    input: GetOrdersInput
  ): Promise<GetOrdersOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getOrders(input)
  }

  async getWarehouses(
    providerId: string,
    input: GetWarehousesInput
  ): Promise<GetWarehousesOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getWarehouses(input)
  }

  async importProducts(
    providerId: string,
    input: ImportProductsInput
  ): Promise<ImportProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.importProducts(input)
  }

  async mapToMedusaOrders(
    providerId: string,
    input: MapToMedusaOrdersInput
  ): Promise<MapToMedusaOrdersOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.mapToMedusaOrders(input)
  }

  async mapToMarketplaceProducts(
    providerId: string,
    input: MapToMarketplaceProductsInput
  ): Promise<MapToMarketplaceProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.mapToMarketplaceProducts(input)
  }

  async mapToMedusaProducts(
    providerId: string,
    input: MapToMedusaProductsInput
  ): Promise<MapToMedusaProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.mapToMedusaProducts(input)
  }
}
