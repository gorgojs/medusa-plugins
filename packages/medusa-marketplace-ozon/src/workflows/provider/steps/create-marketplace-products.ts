import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { batchProductsWorkflow, batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"
import { productApi, withAuth } from "../../../lib/ozon-client"
import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api"
import { MarketplaceOzonCredentialsType } from "../../../providers/marketplace-ozon/types"

export type CreateMarketplaceProductsStepInput = {
  products: V3ImportProductsRequestItem[]
  credentials: MarketplaceOzonCredentialsType
}

export const createMarketplaceProductsStep = createStep(
  "create-ozon-products",
  async (input: CreateMarketplaceProductsStepInput, { container }) => {
    const createdProducts = await productApi.productAPIImportProductsV3(
      withAuth(input!.credentials,{
        v3ImportProductsRequest: {
          items: input.products
        }
      })
    )
    return new StepResponse(createdProducts.data)
  }
)
