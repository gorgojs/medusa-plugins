import { MedusaContainer } from "@medusajs/framework/types"
import { syncMarketplaceProductsWorkflow } from "../workflows/marketplace-product"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")

  const { result } = await syncMarketplaceProductsWorkflow(container).run({
    input: { 
      marketplace: {
        id: "",
        provider_id: "mp_system_default",
        credentials: {
          api_token: ""
        },
        settings: {},
        is_active: true
      }
    }
  })
  logger.info(`Exported products to marketplace: ${JSON.stringify(result, null, 2)}`)
}

export const config = {
  name: "sync-marketplace-products",
  schedule: "0 0 * * *", // change to * * * * * for debugging
}
