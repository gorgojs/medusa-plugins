import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework"
import { INTEGRATION_MODULE } from "../modules/integration"
import type IntegrationModuleService from "../modules/integration/services/integration-module"

export default async function invalidateSettingsCache({
  event,
  container,
}: SubscriberArgs<{ plugin_id: string; instance_id?: string | null }>) {
  const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
  service.clearSettingsCache(event.data.plugin_id, event.data.instance_id ?? null)
}

export const config: SubscriberConfig = {
  event: "integration.updated",
}
