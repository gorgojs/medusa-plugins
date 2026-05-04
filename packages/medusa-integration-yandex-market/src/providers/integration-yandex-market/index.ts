import { ModuleProvider } from "@medusajs/framework/utils"
import { YandexMarketIntegrationProvider } from "./services/ym-integration"
import { INTEGRATION_MODULE } from "@gorgo/medusa-integration/modules/integration"

export default ModuleProvider(INTEGRATION_MODULE, {
  services: [YandexMarketIntegrationProvider],
})
