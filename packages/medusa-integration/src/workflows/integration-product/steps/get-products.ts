import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { GetIntegrationProductsInput, GetProductsInput } from "../../../types"

export type GetProductsStepInput = {
  providerId: string
} & Omit<GetProductsInput, "container">

export const getProductsStep = createStep(
  "get-products",
  async (input: GetProductsStepInput, { container }) => {
    const integrationService: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const { providerId, ...data } = input

    const products = await integrationService.getProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(products)
  }
)

export type GetIntegrationProductsStepInput = {
  providerId: string
} & Omit<GetIntegrationProductsInput, "container">

export const getIntegrationProductsStep = createStep(
  "get-integration-products",
  async (input: GetIntegrationProductsStepInput, { container }) => {
    const integrationService: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const { providerId, ...data } = input

    const products = await integrationService.getIntegrationProducts(providerId, {
      container,
      ...data
    })
    
    return new StepResponse(products)
  }
)
