import { ModuleProvider } from "@medusajs/framework/utils"
import { WildberriesIntegrationProvider } from "./services/wb-integration"
import { INTEGRATION_MODULE } from "@gorgo/medusa-integration/modules/integration"

export default ModuleProvider(INTEGRATION_MODULE, {
  services: [WildberriesIntegrationProvider],
})
