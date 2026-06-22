import type { IntegrationDescriptor } from "./define"
import { secretFieldNames } from "./introspect"

export function validateAndSplit(
  descriptor: IntegrationDescriptor,
  payload: Record<string, unknown>
): { options: Record<string, unknown>; secrets: Record<string, unknown> } {
  const parsed = descriptor.schema.parse(payload) as Record<string, unknown>
  const secretKeys = new Set(secretFieldNames(descriptor))
  const options: Record<string, unknown> = {}
  const secrets: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(parsed)) {
    if (secretKeys.has(k)) secrets[k] = v
    else options[k] = v
  }
  return { options, secrets }
}
