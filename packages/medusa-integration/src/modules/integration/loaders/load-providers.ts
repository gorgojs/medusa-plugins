import { asFunction, asValue, Lifetime } from "@medusajs/framework/awilix"
import { moduleProviderLoader } from "@medusajs/framework/modules-sdk"
import {
  LoaderOptions,
  ModuleProvider,
  ModulesSdkTypes,
} from "@medusajs/framework/types"
import {
  INTEGRATION_OPTIONS_KEY,
  IntegrationProviderRegistrationKey,
  IntegrationProviderRegistrationPrefix,
} from "../types"

/**
 * Registers each integration-provider class into the module container under
 * `int_<identifier>[_<id>]`, mirroring how the payment/fulfillment modules load
 * their providers. Providers come from the integration plugin's `options.providers`,
 * each entry being `{ resolve, id?, options? }`. Also exposes the resolved module
 * options (encryptionKey, …) under INTEGRATION_OPTIONS_KEY for the module service.
 */
const registrationFn = async (
  klass: any,
  container: any,
  pluginOptions: { id?: string; options?: Record<string, unknown> }
) => {
  const key = `${IntegrationProviderRegistrationPrefix}${klass.identifier}${
    pluginOptions.id ? `_${pluginOptions.id}` : ""
  }`

  container.register({
    [key]: asFunction((cradle: any) => new klass(cradle, pluginOptions.options), {
      lifetime: klass.LIFE_TIME || Lifetime.SINGLETON,
    }),
  })

  container.registerAdd(IntegrationProviderRegistrationKey, asValue(key))
}

export default async ({
  container,
  options,
}: LoaderOptions<
  (
    | ModulesSdkTypes.ModuleServiceInitializeOptions
    | ModulesSdkTypes.ModuleServiceInitializeCustomDataLayerOptions
  ) & { providers?: ModuleProvider[] }
>): Promise<void> => {
  container.register({
    [INTEGRATION_OPTIONS_KEY]: asValue(options ?? {}),
  })

  await moduleProviderLoader({
    container,
    providers: options?.providers || [],
    registerServiceFn: registrationFn,
  })
}
