import { MedusaService } from "@medusajs/framework/utils"
import Marketplace from "../models/marketplace"
import MarketplaceEvent from "../models/marketplace-event"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  LogEventInput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput
} from "../../../types"
import { Logger } from "@medusajs/medusa"
import MarketplaceProviderService from "./marketplace-provider"
import { joinerConfig } from "../joiner-config"
import { ModuleJoinerConfig } from "@medusajs/framework/types"

type InjectedDependencies = {
  logger?: Logger
  marketplaceProviderService: MarketplaceProviderService
}

export default class MarketplaceModuleService extends MedusaService({
  Marketplace, MarketplaceEvent
}) {
  protected marketplaceProviderService_: MarketplaceProviderService

  constructor(
    {
      marketplaceProviderService
    }: InjectedDependencies
  ) {
    super(...arguments)

    this.marketplaceProviderService_ = marketplaceProviderService
  }

  __joinerConfig(): ModuleJoinerConfig {
    return joinerConfig
  }

  async logEvent(input: LogEventInput) {
    const result = await this.createMarketplaceEvents({
      marketplace_id: input.marketplaceId,
      correlation_id: input.correlationId,
      direction: input.direction,
      entity_type: input.entityType,
      action: input.action,
      started_at: input.startedAt,
      finished_at: input.finishedAt,
      request_data: input.requestData,
      response_data: input.responseData
    })
    return result.id
  }

  getProvidersList(): string[] {
    return this.marketplaceProviderService_.getProvidersList()
  }

  async exportProducts(providerId, data: ExportProductsInput): Promise<ExportProductsOutput> {
    return await this.marketplaceProviderService_.exportProducts(providerId, data)
  }

  async getProducts(providerId, data: GetProductsInput): Promise<GetProductsOutput> {
    return await this.marketplaceProviderService_.getProducts(providerId, data)
  }

  async importProducts(providerId, data: ImportProductsInput): Promise<ImportProductsOutput> {
    return await this.marketplaceProviderService_.importProducts(providerId, data)
  }

  async mapToMarketplaceProducts(providerId, data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    return await this.marketplaceProviderService_.mapToMarketplaceProducts(providerId, data)
  }

  async mapToMedusaProducts(providerId, data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    return await this.marketplaceProviderService_.mapToMedusaProducts(providerId, data)
  }
}
