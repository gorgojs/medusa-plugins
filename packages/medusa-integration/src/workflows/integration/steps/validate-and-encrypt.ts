import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { MedusaError } from "@medusajs/framework/utils"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"
import { validateAndSplit } from "../../../modules/integration/descriptor/split"

export type ValidateAndEncryptStepInput = {
  provider_id: string
  payload: Record<string, unknown>
}

export const validateAndEncryptStep = createStep(
  "validate-and-encrypt",
  async (input: ValidateAndEncryptStepInput, { container }) => {
    const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)

    // Write-time invariant: provider_id must be a declared registration (instances live
    // in medusa-config, not created at runtime). getProviderDescriptor returns undefined
    // for unknown keys.
    const descriptor = service.getProviderDescriptor(input.provider_id)
    if (!descriptor) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `No integration provider registered for "${input.provider_id}"`
      )
    }

    const { options, secrets } = validateAndSplit(descriptor, input.payload)
    const credentials = service.encryptCredentials(secrets)
    return new StepResponse({
      module: descriptor.module,
      schema_version: descriptor.schemaVersion ?? 1,
      options,
      ...credentials,
    })
  }
)
