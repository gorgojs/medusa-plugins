import { ModuleProvider } from "@medusajs/framework/utils"
import { OzonIntegrationProvider } from "./services/ozon-integration"
import { INTEGRATION_MODULE } from "@gorgo/medusa-integration/modules/integration"

export default ModuleProvider(INTEGRATION_MODULE, {
  services: [OzonIntegrationProvider],
})
