import { defineJoinerConfig } from "@medusajs/framework/utils"
import Integration from "./models/integration"
import IntegrationEvent from "./models/integration-event"
import IntegrationExchangeProfile from "./models/integration-exchange-profile"
import IntegrationOrder from "./models/integration-order"

export const joinerConfig = defineJoinerConfig("integration", {
  models: [Integration, IntegrationEvent, IntegrationExchangeProfile, IntegrationOrder],
  // alias: [
  //   {
  //     name: ["integration", "integrations"],
  //     args: { entity: "Integration" },
  //   },
  //   {
  //     name: ["integration_event", "integration_events"],
  //     args: { entity: "IntegrationEvent" },
  //   },
  //   {
  //     name: ["integration_exchange_profile", "integration_exchange_profiles"],
  //     args: { entity: "IntegrationExchangeProfile" },
  //   },
  // ],
})
