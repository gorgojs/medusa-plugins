import { MedusaService } from "@medusajs/framework/utils"
import Marketplace from "../models/marketplace"
import MarketplaceEvent from "../models/marketplace-event"
import { ExportProductsInput, ExportProductsOutput, LogEventInput } from "../types"
import { Logger } from "@medusajs/medusa"
import MarketplaceProviderService from "./marketplace-provider"

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

  async logEvent(input: LogEventInput) {
    const result = await this.createMarketplaceEvents({
      marketplace_id: process.env.DEFAULT_MARKETPLACE_ID as string,
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

  async exportProducts(providerId, data: ExportProductsInput): Promise<ExportProductsOutput> {
    return await this.marketplaceProviderService_.exportProducts(providerId, data)
  }
}
