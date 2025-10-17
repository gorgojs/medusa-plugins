import { MedusaContainer } from "@medusajs/framework/types"
import { importMarketplaceProductsWorkflow } from "../workflows"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await importMarketplaceProductsWorkflow(container).run({
    input: { ids: [] },
  })
  logger.info(`Ozon import: result=${JSON.stringify(result)}`)

  return result
}

export const config = {
  name: "import-products",
  schedule: "*/30 * * * *"
}
