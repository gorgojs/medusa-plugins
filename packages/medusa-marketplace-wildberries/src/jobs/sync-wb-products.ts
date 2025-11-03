import { MedusaContainer } from "@medusajs/framework/types"
import { syncWbProductsWorkflow } from "../workflows/product"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await syncWbProductsWorkflow(container).run()
  logger.info(`Exported products to Wildberries: ${JSON.stringify(result)}`)
}

export const config = {
  name: "sync-wb-products",
  schedule: "0 0 * * *", // change to * * * * * for debugging
}
