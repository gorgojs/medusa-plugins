import { MedusaRequest } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"
import type { MaskedIntegration } from "../../../types"

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

/**
 * Build the client-facing view of a record. Secret options live encrypted inside `options`;
 * they are stripped here so ciphertext never reaches the browser. `has_secrets` tells the UI
 * a secret is stored (so it can render a "leave blank to keep" hint). `values` holds only
 * the non-secret options.
 */
export function maskedView(record: any, secretKeys: string[]): MaskedIntegration {
  const secret = new Set(secretKeys)
  const stored = (record.options ?? {}) as Record<string, unknown>
  const values: Record<string, unknown> = {}
  let has_secrets = false
  for (const [k, v] of Object.entries(stored)) {
    if (secret.has(k)) {
      if (v != null && v !== "") has_secrets = true
      continue
    }
    values[k] = v
  }
  return {
    id: record.id,
    provider_id: record.provider_id,
    category: record.category,
    title: record.title ?? null,
    is_enabled: record.is_enabled,
    has_secrets,
    last_test_status: record.last_test_status ?? null,
    values,
  }
}
