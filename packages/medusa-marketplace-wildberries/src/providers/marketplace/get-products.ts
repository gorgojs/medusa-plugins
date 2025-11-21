import { MedusaContainer } from "@medusajs/framework"
import { getProductsMarketplaceWorkflow } from "../../workflows/provider"

type GetProductsInput = {
  ids?: string[]
}

export const getProducts = async (input: GetProductsInput, container?: MedusaContainer) => {
  const { result } = await getProductsMarketplaceWorkflow(container).run({ input })
  
  return result
}
