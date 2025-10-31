import { MedusaContainer } from "@medusajs/framework"
import { importProductsMarketplaceWorkflow } from "../../workflows/provider"

export const importProducts = async (container?: MedusaContainer) => {
  const { result } = await importProductsMarketplaceWorkflow(container).run()

  return result
}
