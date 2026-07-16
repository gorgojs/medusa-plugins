import type { MedusaContainer, Logger } from "@medusajs/framework/types"
import { INTEGRATION_MODULE } from "../modules/integration"
import type IntegrationModuleService from "../modules/integration/services/integration-module"
import { testIntegrationConnectionWorkflow } from "../workflows/integration"

/**
 * Daily health check: run the connection test for every configured & enabled integration
 * that exposes one. Each test runs through `testIntegrationConnectionWorkflow`, which
 * persists `last_test_*` on the record and emits `integration.tested`.
 *
 * Disabled or not-yet-configured registrations are skipped (their settings don't resolve,
 * so a test would report a misleading "Not configured" failure), as are providers without
 * a `testConnection`. Failures are isolated per provider and nothing is thrown at the top
 * level, so one bad integration never aborts the rest and the job retries next schedule.
 */
export default async function testIntegrationConnectionsJob(container: MedusaContainer) {
  const logger = container.resolve<Logger>("logger")
  const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)

  const overview = await service.listIntegrationsOverview()
  const targets = overview.filter(
    (i) => i.is_configured && i.is_enabled && i.has_test_connection
  )

  if (targets.length === 0) {
    logger.info("[integration] connection-test job: no configured integrations to test")
    return
  }

  logger.info(`[integration] connection-test job: testing ${targets.length} integration(s)`)

  const counts = { ok: 0, fail: 0, skipped: 0, errored: 0 }

  for (const target of targets) {
    try {
      const { result } = await testIntegrationConnectionWorkflow(container).run({
        input: { provider_id: target.provider_id },
      })
      counts[result.status]++
      const line = `[integration] ${target.provider_id} → ${result.status}${
        result.message ? `: ${result.message}` : ""
      }`
      if (result.status === "failed") logger.warn(line)
      else logger.info(line)
    } catch (e: any) {
      counts.errored++
      logger.error(`[integration] ${target.provider_id} test errored: ${e?.message ?? e}`)
    }
  }

  logger.info(
    `[integration] connection-test job done — ok: ${counts.ok}, fail: ${counts.fail}, ` +
      `skipped: ${counts.skipped}, errored: ${counts.errored}`
  )
}

export const config = {
  name: "test-integration-connections-daily",
  // Once a day, off-peak (03:00). Cron: minute hour day-of-month month day-of-week.
  schedule: "0 3 * * *",
}
