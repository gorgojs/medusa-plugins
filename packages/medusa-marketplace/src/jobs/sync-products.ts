import { MedusaContainer } from "@medusajs/framework/types"
import { syncMarketplaceProductsWorkflow } from "../workflows/marketplace-product"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await syncMarketplaceProductsWorkflow(container).run({
    input: { providerId: "mp_system_default" },
  })
  logger.info(`Exported products to marketplace: ${JSON.stringify(result, null, 2)}`)
}

export const config = {
  name: "sync-marketplace-products",
  schedule: "0 0 * * *", // change to * * * * * for debugging
}
