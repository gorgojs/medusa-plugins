import { getProductsMarketplaceWorkflow } from "../../workflows/provider"

type ExportProductsInput = any

export const exportProducts = async (input: ExportProductsInput) => {
  const products = await getProductsMarketplaceWorkflow().run({ input })
  
  return products
}
