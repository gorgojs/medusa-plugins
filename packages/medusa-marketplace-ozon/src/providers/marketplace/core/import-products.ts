import { MedusaContainer } from "@medusajs/framework"
import { importOzonMarketplaceProductsWorkflow } from "../../../workflows/provider"

export const importProducts = async (input, container?: MedusaContainer) => {
  const { result } = await importOzonMarketplaceProductsWorkflow(container).run()

  return result
}