import { MedusaService } from "@medusajs/framework/utils"
import Integration from "../models/integration"
import IntegrationEvent from "../models/integration-event"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  GetIntegrationProductsInput,
  GetIntegrationProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  LogEventInput,
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
  MapToMedusaOrdersOutput,
  MapToMedusaOrdersInput
} from "../../../types"
import IntegrationProviderService from "./integration-provider"
import { joinerConfig } from "../joiner-config"
import { Logger, ModuleJoinerConfig } from "@medusajs/framework/types"
import IntegrationExchangeProfile from "../models/integration-exchange-profile"
import IntegrationOrder from "../models/integration-order"

type InjectedDependencies = {
  logger?: Logger
  integrationProviderService: IntegrationProviderService
}

export default class IntegrationModuleService extends MedusaService({
  Integration, IntegrationEvent, IntegrationExchangeProfile, IntegrationOrder
}) {
  protected integrationProviderService_: IntegrationProviderService

  constructor(
    {
      integrationProviderService
    }: InjectedDependencies
  ) {
    super(...arguments)

    this.integrationProviderService_ = integrationProviderService
  }

  __joinerConfig(): ModuleJoinerConfig {
    return joinerConfig
  }

  async logEvent(input: LogEventInput) {
    const result = await this.createIntegrationEvents({
      integration_id: input.integrationId,
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
    return this.integrationProviderService_.getProvidersList()
  }

  async exportProducts(providerId: string, data: ExportProductsInput): Promise<ExportProductsOutput> {
    return await this.integrationProviderService_.exportProducts(providerId, data)
  }

  async getProducts(providerId: string, data: GetProductsInput): Promise<GetProductsOutput> {
    return await this.integrationProviderService_.getProducts(providerId, data)
  }

  async getIntegrationProducts(providerId: string, data: GetIntegrationProductsInput): Promise<GetIntegrationProductsOutput> {
    return await this.integrationProviderService_.getIntegrationProducts(providerId, data)
  }

  async getIntegrationOrderTypes(providerId: string, data: GetIntegrationOrderTypesInput): Promise<GetIntegrationOrderTypesOutput> {
    return await this.integrationProviderService_.getIntegrationOrderTypes(providerId, data)
  }

  async getIntegrationOrders(providerId: string, data: GetIntegrationOrdersInput): Promise<GetIntegrationOrdersOutput> {
    return await this.integrationProviderService_.getIntegrationOrders(providerId, data)
  }

  async getIntegrationWarehouses(providerId: string, data: GetIntegrationWarehousesInput): Promise<GetIntegrationWarehousesOutput> {
    return await this.integrationProviderService_.getWarehouses(providerId, data)
  }

  async importProducts(providerId: string, data: ImportProductsInput): Promise<ImportProductsOutput> {
    return await this.integrationProviderService_.importProducts(providerId, data)
  }

  async mapToMedusaOrders(providerId: string, data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput> {
    return await this.integrationProviderService_.mapToMedusaOrders(providerId, data)
  }

  async mapToIntegrationProducts(providerId: string, data: MapToIntegrationProductsInput): Promise<MapToIntegrationProductsOutput> {
    return await this.integrationProviderService_.mapToIntegrationProducts(providerId, data)
  }

  async mapToMedusaProducts(providerId: string, data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    return await this.integrationProviderService_.mapToMedusaProducts(providerId, data)
  }
}
