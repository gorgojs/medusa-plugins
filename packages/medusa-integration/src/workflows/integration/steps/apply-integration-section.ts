import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { MedusaError } from "@medusajs/framework/utils"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"
import { secretFieldNames } from "../../../modules/integration/descriptor/introspect"
import { validateOptions } from "../../../modules/integration/descriptor/validate"

export type ApplyIntegrationSectionStepInput = {
  provider_id: string
  /** Optional: a built-in section scopes writable ids to that section. A widget omits it. */
  section_id?: string | null
  values: Record<string, unknown>
}

/**
 * Resolve which option ids this request may write, merge them over the stored config, run
 * per-option validation, and encrypt secret options inline.
 *
 * - With `section_id`: writable ids = exactly that section's options (unknown section → 400).
 * - Without `section_id` (widget): writable ids = the submitted keys that are DECLARED
 *   options — undeclared keys are dropped (never written to the `options` JSON column).
 *
 * Only the submitted ids are validated here; the config as a whole may still be a partial
 * draft. Full validation happens lazily at resolve (IntegrationModuleService.getResolvedOptions).
 */
export const applyIntegrationSectionStep = createStep(
  "apply-integration-section",
  async (input: ApplyIntegrationSectionStepInput, { container }) => {
    const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)

    const descriptor = service.getProviderDescriptor(input.provider_id)
    if (!descriptor) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `No integration provider registered for "${input.provider_id}"`
      )
    }

    // Resolve the set of option ids this request is allowed to write.
    let allowed: string[]
    if (input.section_id != null) {
      const section = descriptor.sections.find((s) => s.id === input.section_id)
      if (!section) {
        throw new MedusaError(MedusaError.Types.INVALID_DATA, `Unknown section "${input.section_id}"`)
      }
      allowed = [...section.options]
    } else {
      allowed = Object.keys(input.values).filter((k) => Object.prototype.hasOwnProperty.call(descriptor.options, k))
    }
    // readonly options are author-fixed constants — never written from a client request
    // (their value always comes from the descriptor `readonlyValue` at resolve).
    allowed = allowed.filter((id) => descriptor.options[id]?.readonlyValue === undefined)

    // Secrets are never sent to the client, so a blank/absent secret means "keep existing".
    const current = await service.getStoredValues(input.provider_id)
    const secretKeys = new Set(secretFieldNames(descriptor))
    const submitted: Record<string, unknown> = {}
    for (const id of allowed) {
      let v = input.values[id]
      if (secretKeys.has(id) && (v == null || v === "")) {
        if (id in current) v = current[id]
        else continue
      }
      submitted[id] = v
    }

    // Validate submitted ids against the merged config (per-option cross-field rules see siblings).
    const merged = { ...current, ...submitted }
    const validated = validateOptions(descriptor, allowed, merged)
    if (!validated.success) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        validated.issues.map((i) => `${i.path}: ${i.message}`).join("; ")
      )
    }

    // Merge the (defaulted) validated values over the rest of the config, then encrypt secrets inline.
    const full = { ...current, ...validated.data }
    const options = service.encryptForStorage(descriptor, full)
    return new StepResponse({
      module: descriptor.module,
      options_version: descriptor.optionsVersion ?? 1,
      options,
    })
  }
)
