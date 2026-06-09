import { asValue } from "@medusajs/framework/awilix"
import { LoaderOptions } from "@medusajs/framework/types"
import type { IntegrationDescriptor } from "../descriptor/define"

export type IntegrationModuleOptions = {
  encryptionKey?: string
  allowPlaintextInDev?: boolean
  /** module paths exporting a descriptor as default, e.g. "@gorgo/medusa-payment-tkassa-v2/integration-descriptor" */
  descriptors?: string[]
}

export const INTEGRATION_DESCRIPTORS_KEY = "integrationDescriptors"
export const INTEGRATION_OPTIONS_KEY = "integrationModuleOptions"

export default async ({
  container,
  options,
}: LoaderOptions<IntegrationModuleOptions>): Promise<void> => {
  const refs = options?.descriptors ?? []
  const descriptors: IntegrationDescriptor[] = []
  for (const ref of refs) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mod = require(ref)
    const descriptor: IntegrationDescriptor = mod.default ?? mod
    descriptors.push(descriptor)
  }

  const seen = new Set<string>()
  for (const d of descriptors) {
    if (seen.has(d.pluginId)) {
      throw new Error(`[integration] duplicate descriptor for plugin_id "${d.pluginId}"`)
    }
    seen.add(d.pluginId)
  }

  container.register({
    [INTEGRATION_DESCRIPTORS_KEY]: asValue(descriptors),
    [INTEGRATION_OPTIONS_KEY]: asValue(options ?? {}),
  })
}
