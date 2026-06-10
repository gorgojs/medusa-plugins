import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { MedusaError } from "@medusajs/framework/utils"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import type IntegrationModuleService from "../../../modules/integration/services/integration-module"
import { validateAndSplit } from "../../../modules/integration/descriptor/split"

export type ValidateAndEncryptStepInput = {
  plugin_id: string
  payload: Record<string, unknown>
}

export const validateAndEncryptStep = createStep(
  "validate-and-encrypt",
  async (input: ValidateAndEncryptStepInput, { container }) => {
    const service: IntegrationModuleService = container.resolve(INTEGRATION_MODULE)
    const descriptor = service.getDescriptor(input.plugin_id)
    if (!descriptor) {
      throw new MedusaError(MedusaError.Types.NOT_FOUND, `Unknown plugin_id "${input.plugin_id}"`)
    }
    const { settings, secrets } = validateAndSplit(descriptor, input.payload)
    const credentials = service.encryptCredentials(secrets)
    return new StepResponse({
      plugin_kind: descriptor.pluginKind,
      schema_version: descriptor.schemaVersion ?? 1,
      settings,
      ...credentials,
    })
  }
)
