import { MedusaRequest } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"
import { secretFieldNames } from "../../../modules/integration/descriptor/introspect"

export function service(req: MedusaRequest): IntegrationModuleService {
  return req.scope.resolve(INTEGRATION_MODULE)
}

/**
 * Resolve a `:provider_id` URL param (the registration key `int_<id>[_<instance>]`) to
 * its `(plugin_id, instance_id)`. 404 if it isn't a declared registration.
 */
export function resolveRegistration(
  svc: IntegrationModuleService,
  providerId: string
): { plugin_id: string; instance_id: string | null } {
  const reg = svc.getRegistration(providerId)
  if (!reg) {
    throw new MedusaError(MedusaError.Types.NOT_FOUND, `Unknown integration "${providerId}"`)
  }
  return { plugin_id: reg.pluginId, instance_id: reg.instanceId }
}

/** Build the masked, merged view (settings + masked secret placeholders) for a record. */
export function maskedView(svc: IntegrationModuleService, record: any) {
  const descriptor = svc.getDescriptor(record.plugin_id)
  const secrets = descriptor ? secretFieldNames(descriptor) : []
  const masked: Record<string, unknown> = { ...(record.settings ?? {}) }
  const hasSecrets = !!record.credentials_ciphertext
  for (const s of secrets) {
    if (hasSecrets) masked[s] = "••••••"
  }
  return {
    id: record.id,
    plugin_kind: record.plugin_kind,
    plugin_id: record.plugin_id,
    instance_id: record.instance_id ?? null,
    title: record.title ?? null,
    is_enabled: record.is_enabled,
    last_test_at: record.last_test_at ?? null,
    last_test_status: record.last_test_status ?? null,
    last_test_message: record.last_test_message ?? null,
    values: masked,
  }
}
