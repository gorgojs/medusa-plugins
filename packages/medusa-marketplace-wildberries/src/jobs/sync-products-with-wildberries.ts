import { MedusaContainer } from "@medusajs/framework/types"
import syncProductsWildberriesWorkflow from "../workflows/sync-products-wildberries"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  logger.info('Syncing products with wildberries...')

  const { result } = await syncProductsWildberriesWorkflow(container).run()

  logger.info(`Exported products to wildberries: ${JSON.stringify(result)}`)
}

export const config = {
  name: "sync-products-with-wildberries",
  schedule: "0 0 * * *", // change to * * * * * for debugging
}
