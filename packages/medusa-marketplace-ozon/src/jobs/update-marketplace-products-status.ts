import { MedusaContainer } from "@medusajs/framework/types"
import { updateMarketplaceProductsStatusWorkflow } from "../workflows"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await updateMarketplaceProductsStatusWorkflow(container).run({
    input: { ids: [] },
  })
  logger.info(`Ozon products statuses: result=${JSON.stringify(result)}`)

  return result
}

export const config = {
  name: "update-products-statuses",
  schedule: "*/30 * * * *"
}
