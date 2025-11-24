import { createStep, StepResponse } from "@medusajs/workflows-sdk"
import { exportProducts } from "../../../providers/marketplace"
import { UpdateOfferMappingDTO } from "../../../lib/yandex-market-client/api"


type exportProductsStepInput = UpdateOfferMappingDTO[]

export const exportProductsStep = createStep(
  "export-products",
  async (input: exportProductsStepInput) => {

    const products = exportProducts(input)

    return new StepResponse(products)
  }
)
