import { getProductsMarketplaceWorkflow } from "../../workflows/provider"

type GetProductsInput = {
  ids?: string[]
}

export const getProducts = async (input: GetProductsInput) => {
  const { result } = await getProductsMarketplaceWorkflow().run({ input })
  
  return result
}
