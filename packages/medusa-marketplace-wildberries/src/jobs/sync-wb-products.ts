import { MedusaContainer } from "@medusajs/framework/types"
import { syncProductsMarketplaceWorkflow } from "../workflows/product"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await syncProductsMarketplaceWorkflow(container).run({
    input: {},
  })
  logger.info(`Exported products to Wildberries: ${JSON.stringify(result, null, 2)}`)
}

export const config = {
  name: "sync-wb-products",
  schedule: "0 0 * * *", // change to * * * * * for debugging
}
