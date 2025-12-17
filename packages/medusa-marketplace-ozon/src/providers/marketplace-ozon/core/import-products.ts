import { MedusaContainer } from "@medusajs/framework"
import { importMarketplaceProductsWorkflow } from "../../../workflows/provider"

export const importProducts = async (input, container?: MedusaContainer) => {
  const { result } = await importMarketplaceProductsWorkflow(container).run()

  return result
}