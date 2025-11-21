import { MedusaContainer } from "@medusajs/framework/types"
import { exportProductsMarketplaceWorkflow } from "../workflows"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await exportProductsMarketplaceWorkflow(container).run({
    input: { ids: [] },
  })
  logger.info(`Ozon export: result=${JSON.stringify(result)}`)

  return result
}

export const config = {
  name: "export-products",
  schedule: "*/30 * * * *"
}
