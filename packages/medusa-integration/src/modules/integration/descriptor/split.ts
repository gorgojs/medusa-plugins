import type { IntegrationDescriptor } from "./define"
import { secretFieldNames } from "./introspect"

/**
 * Partition a config into non-secret `options` and `secrets` by field metadata.
 * Validation lives elsewhere (per-section on write, full on resolve) — this only splits.
 */
export function splitSecrets(
  descriptor: IntegrationDescriptor,
  values: Record<string, unknown>
): { options: Record<string, unknown>; secrets: Record<string, unknown> } {
  const secretKeys = new Set(secretFieldNames(descriptor))
  const options: Record<string, unknown> = {}
  const secrets: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(values)) {
    if (secretKeys.has(k)) secrets[k] = v
    else options[k] = v
  }
  return { options, secrets }
}
