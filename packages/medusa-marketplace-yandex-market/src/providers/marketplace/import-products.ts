import { MedusaContainer } from "@medusajs/framework"
import { importYmMarketplaceProductsWorkflow } from "../../workflows/provider"

export const importProducts = async (input, container?: MedusaContainer) => {
  const { result } = await importYmMarketplaceProductsWorkflow(container).run()

  return result
}
