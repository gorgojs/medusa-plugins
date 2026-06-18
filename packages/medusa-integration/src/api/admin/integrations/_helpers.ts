import { MedusaRequest } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"
import { secretFieldNames } from "../../../modules/integration/descriptor/introspect"

export function service(req: MedusaRequest): IntegrationModuleService {
  return req.scope.resolve(INTEGRATION_MODULE)
}

/**
 * Assert that a `:provider_id` URL param (the registration key `int_<id>[_<instance>]`,
 * which is also the stored `provider_id`) is a declared registration. 404 otherwise.
 */
export function requireProvider(svc: IntegrationModuleService, providerId: string): void {
  if (!svc.hasProviderId(providerId)) {
    throw new MedusaError(MedusaError.Types.NOT_FOUND, `Unknown integration "${providerId}"`)
  }
}

/** Build the masked, merged view (settings + masked secret placeholders) for a record. */
export function maskedView(svc: IntegrationModuleService, record: any) {
  const descriptor = svc.getProviderDescriptor(record.provider_id)
  const secrets = descriptor ? secretFieldNames(descriptor) : []
  const masked: Record<string, unknown> = { ...(record.settings ?? {}) }
  const hasSecrets = !!record.credentials_ciphertext
  for (const s of secrets) {
    if (hasSecrets) masked[s] = "••••••"
  }
  return {
    id: record.id,
    provider_id: record.provider_id,
    module: record.module,
    title: record.title ?? null,
    is_enabled: record.is_enabled,
    last_test_at: record.last_test_at ?? null,
    last_test_status: record.last_test_status ?? null,
    last_test_message: record.last_test_message ?? null,
    values: masked,
  }
}
