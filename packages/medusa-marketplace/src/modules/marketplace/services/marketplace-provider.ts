import { Logger } from "@medusajs/medusa"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  IMarketplaceProvider,
  ImportProductsInput,
  ImportProductsOutput,
  MapProductsInput,
  MapProductsOutput,
  MarketplaceProviderRegistrationPrefix
} from "../types"

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
      return this.dependencies[providerId] as IMarketplaceProvider
    } catch (err) {
      if (err.name === "AwilixResolutionError") {
        const errMessage = `
Unable to retrieve the marketplace provider with id: ${providerId}
Please make sure that the provider is registered in the container and it is configured correctly in your project configuration file.`

        throw new Error(errMessage)
      }

      const errMessage = `Unable to retrieve the marketplace provider with id: ${providerId}, the following error occurred: ${err.message}`
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

  async importProducts(
    providerId: string,
    input: ImportProductsInput
  ): Promise<ImportProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.importProducts(input)
  }

  async mapProducts(
    providerId: string,
    input: MapProductsInput
  ): Promise<MapProductsOutput> {
    const provider = this.retrieveProvider(providerId)

    return provider.mapProducts(input)
  }
}
