import { MedusaRequest } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"

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
 * Build the client-facing view of a record. Secrets are NEVER sent back (they live only
 * in `credentials_ciphertext`); `has_secrets` tells the UI a secret is stored so it can
 * render a "leave blank to keep" hint. `values` therefore contains non-secret settings.
 */
export function maskedView(record: any) {
  return {
    id: record.id,
    provider_id: record.provider_id,
    module: record.module,
    title: record.title ?? null,
    is_enabled: record.is_enabled,
    has_secrets: !!record.credentials_ciphertext,
    last_test_at: record.last_test_at ?? null,
    last_test_status: record.last_test_status ?? null,
    last_test_message: record.last_test_message ?? null,
    values: { ...(record.options ?? {}) },
  }
}
