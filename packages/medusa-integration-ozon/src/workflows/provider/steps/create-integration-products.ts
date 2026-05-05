import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { batchProductsWorkflow, batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"
import { productApi, withAuth } from "../../../lib/ozon-client"
import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api"
import { IntegrationOzonCredentialsType } from "../../../providers/integration-ozon/types"

export type CreateIntegrationProductsStepInput = {
  products: V3ImportProductsRequestItem[]
  credentials: IntegrationOzonCredentialsType
}

export const createIntegrationProductsStep = createStep(
  "create-ozon-products",
  async (input: CreateIntegrationProductsStepInput, { container }) => {
    const rawProducts: any = input.products
    const products: V3ImportProductsRequestItem[] = Array.isArray(rawProducts?.create) ? rawProducts.create : rawProducts
    const createdProducts = await productApi.productAPIImportProductsV3(
      withAuth(input!.credentials as IntegrationOzonCredentialsType,{
        v3ImportProductsRequest: {
          items: products
        }
      })
    )
    return new StepResponse(createdProducts.data)
  }
)
