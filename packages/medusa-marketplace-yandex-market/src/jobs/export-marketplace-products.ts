import { MedusaContainer } from "@medusajs/framework/types"
import { exportMarketplaceProductsWorkflow } from "../workflows"

export default async function exportMarketplaceProducts(container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await exportMarketplaceProductsWorkflow(container).run({
    input: { ids: [] },
  })
  logger.info(`YM export: result=${JSON.stringify(result)}`)

  return result
}

export const config = {
  name: "export-marketplace-products",
  schedule: "* * * * *"
}
