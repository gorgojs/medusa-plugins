import { MedusaContainer } from "@medusajs/framework/types"
import { INTEGRATION_MODULE } from "../modules/integration"
import { IntegrationModuleService } from "../modules/integration/services"
import { importIntegrationOrdersWorkflow } from "../workflows/integration-orders"

export default async function (container: MedusaContainer) {
  const logger = container.resolve("logger")
  const integrationService = container.resolve<IntegrationModuleService>(INTEGRATION_MODULE)

  const integrations = await integrationService.listIntegrations({ is_enabled: true })

  for (const integration of integrations) {
    try {
      const { result } = await importIntegrationOrdersWorkflow(container).run({
        input: { 
          integration,
          orderType: integration.exchange_profiles[0]?.order_type
        }
      })
      logger.info(`Imported orders from integration ${integration.id}: ${JSON.stringify(result, null, 2)}`)
    } catch (e) {
      logger.error(`Failed to import orders from integration ${integration.id}: ${e.message}`)
    }
  }
}

export const config = {
  name: "sync-integration-orders",
  schedule: "0 0 * * *", // change to desired schedule
}
