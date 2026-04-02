import { MedusaContainer } from "@medusajs/framework/types"
import { MARKETPLACE_MODULE } from "../modules/marketplace"
import { MarketplaceModuleService } from "../modules/marketplace/services"
import { importMarketplaceOrdersWorkflow } from "../workflows/marketplace-orders"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")
  const marketplaceService = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)

  const marketplaces = await marketplaceService.listMarketplaces({ is_enabled: true })

  for (const marketplace of marketplaces) {
    try {
      const { result } = await importMarketplaceOrdersWorkflow(container).run({
        input: { 
          marketplace,
          orderType: marketplace.exchange_profiles[0]?.order_type
        }
      })
      logger.info(`Imported orders from marketplace ${marketplace.id}: ${JSON.stringify(result, null, 2)}`)
    } catch (e) {
      logger.error(`Failed to import orders from marketplace ${marketplace.id}: ${e.message}`)
    }
  }
}

export const config = {
  name: "sync-marketplace-orders",
  schedule: "0 0 * * *", // change to desired schedule
}
