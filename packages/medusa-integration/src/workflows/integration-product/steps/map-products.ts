import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { MapToIntegrationProductsInput, MapToMedusaProductsInput } from "../../../types"

export type MapToIntegrationProductsStepInput = {
  providerId: string
} & Omit<MapToIntegrationProductsInput, "container">

export const mapToIntegrationProductsStep = createStep(
  "map-to-integration-products",
  async (input: MapToIntegrationProductsStepInput, { container }) => {
    const integrationService: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const { providerId, ...data } = input

    const integrationProducts = await integrationService.mapToIntegrationProducts(providerId, {
      container,
      ...data
    })

    return new StepResponse(integrationProducts)
  }
)

export type MapToMedusaProductsStepInput = {
  providerId: string
} & Omit<MapToMedusaProductsInput, "container">

export const mapToMedusaProductsStep = createStep(
  "map-to-medusa-products",
  async (input: MapToMedusaProductsStepInput, { container }) => {
    const integrationService: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const { providerId, ...data } = input

    const products = await integrationService.mapToMedusaProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(products)
  }
)
