import { MedusaContainer } from "@medusajs/framework"
import { exportProductsMarketplaceWorkflow } from "../../workflows/provider"

type ExportProductsInput = any

export const exportProducts = async (input: ExportProductsInput, container?: MedusaContainer) => {
  const { result } = await exportProductsMarketplaceWorkflow(container).run({ input })
  
  return result
}
