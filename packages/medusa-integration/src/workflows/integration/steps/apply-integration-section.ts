import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { MedusaError } from "@medusajs/framework/utils"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"
import { secretFieldNames } from "../../../modules/integration/descriptor/introspect"
import { validateSection } from "../../../modules/integration/descriptor/validate"
import { splitSecrets } from "../../../modules/integration/descriptor/split"

export type ApplyIntegrationSectionStepInput = {
  provider_id: string
  section_id: string
  values: Record<string, unknown>
}

/**
 * Validate ONE edited section against its own options, merge it over the rest of the stored
 * config, and split into options + encrypted credentials. Only the edited section is
 * validated here — the config as a whole may still be a partial draft; full validation
 * happens lazily at resolve time (see IntegrationModuleService.getResolvedOptions).
 */
export const applyIntegrationSectionStep = createStep(
  "apply-integration-section",
  async (input: ApplyIntegrationSectionStepInput, { container }) => {
    const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)

    // Write-time invariant: provider_id must be a declared registration.
    const descriptor = service.getProviderDescriptor(input.provider_id)
    if (!descriptor) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `No integration provider registered for "${input.provider_id}"`
      )
    }
    const section = descriptor.sections.find((s) => s.id === input.section_id)
    if (!section) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, `Unknown section "${input.section_id}"`)
    }

    // Secrets are never sent to the client, so a blank/absent secret means "keep existing".
    const current = await service.getStoredValues(input.provider_id)
    const secretKeys = new Set(secretFieldNames(descriptor))
    const sectionKeys = Object.keys(section.options.shape as Record<string, unknown>)
    const sectionValues: Record<string, unknown> = {}
    for (const k of sectionKeys) {
      let v = input.values[k]
      if (secretKeys.has(k) && (v == null || v === "")) {
        if (k in current) v = current[k]
        else continue
      }
      sectionValues[k] = v
    }

    const validated = validateSection(section, sectionValues)
    if (!validated.success) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        validated.issues.map((i) => `${i.path}: ${i.message}`).join("; ")
      )
    }

    // Merge the (defaulted) section over the rest of the config, then split + encrypt.
    const full = { ...current, ...validated.data }
    const { options, secrets } = splitSecrets(descriptor, full)
    const credentials = service.encryptCredentials(secrets)
    return new StepResponse({
      module: descriptor.module,
      options_version: descriptor.optionsVersion ?? 1,
      options,
      ...credentials,
    })
  }
)
