import { AwilixResolutionError } from "awilix"
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
  GetIntegrationOrderTypesOutput,
  GetIntegrationOrderTypesInput,
  GetIntegrationOrdersInput,
  GetIntegrationOrdersOutput,
  MapToMedusaOrdersInput,
  MapToMedusaOrdersOutput
} from "../../../types"
import { IntegrationProviderRegistrationPrefix } from "../types"
import { Logger } from "@medusajs/framework/types"

type InjectedDependencies = {
  logger?: Logger
  [key: `${typeof IntegrationProviderRegistrationPrefix}${string}`]: IIntegrationProvider
}

export default class IntegrationProviderService {
  protected dependencies: InjectedDependencies
  #logger: Logger

  constructor(container: InjectedDependencies) {
    this.dependencies = container
    this.#logger = container["logger"]
      ? container.logger
      : (console as unknown as Logger)
  }

  retrieveProvider(providerId: string): IIntegrationProvider {
    try {
      return this.dependencies[providerId as any] as IIntegrationProvider
    } catch (err) {
      if (err instanceof AwilixResolutionError) {
        const errMessage = `
Unable to retrieve the integration provider with id: ${providerId}
Please make sure that the provider is registered in the container and it is configured correctly in your project configuration file.`

        throw new Error(errMessage)
      }

      const errMessage = `Unable to retrieve the integration provider with id: ${providerId}, the following error occurred: ${err instanceof Error ? err.message : String(err)}`
      this.#logger.error(errMessage)

      throw new Error(errMessage)
    }
  }

  getProvidersList(): string[] {
    const prefix = IntegrationProviderRegistrationPrefix
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

  async getIntegrationProducts(
    providerId: string,
    input: GetIntegrationProductsInput
  ): Promise<GetIntegrationProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getIntegrationProducts(input)
  }

  async getIntegrationOrderTypes(
    providerId: string,
    input: GetIntegrationOrderTypesInput
  ): Promise<GetIntegrationOrderTypesOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getIntegrationOrderTypes(input)
  }

  async getIntegrationOrders(
    providerId: string,
    input: GetIntegrationOrdersInput
  ): Promise<GetIntegrationOrdersOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getIntegrationOrders(input)
  }

  async getWarehouses(
    providerId: string,
    input: GetIntegrationWarehousesInput
  ): Promise<GetIntegrationWarehousesOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.getIntegrationWarehouses(input)
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

  async mapToIntegrationProducts(
    providerId: string,
    input: MapToIntegrationProductsInput
  ): Promise<MapToIntegrationProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.mapToIntegrationProducts(input)
  }

  async mapToMedusaProducts(
    providerId: string,
    input: MapToMedusaProductsInput
  ): Promise<MapToMedusaProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.mapToMedusaProducts(input)
  }
}
