import { asFunction, asValue, Lifetime } from "@medusajs/framework/awilix"
import { moduleProviderLoader } from "@medusajs/framework/modules-sdk"
import {
  LoaderOptions,
  ModuleProvider,
  ModulesSdkTypes,
} from "@medusajs/framework/types"
import {
  MarketplaceProviderRegistrationKey,
  MarketplaceProviderRegistrationPrefix
} from "../types"

import * as providers from "../providers"

const registrationFn = async (klass, container, pluginOptions) => {
  const key = `${MarketplaceProviderRegistrationPrefix}${klass.identifier}${
    pluginOptions.id ? `_${pluginOptions.id}` : ""
  }`

  container.register({
    [key]: asFunction((cradle) => new klass(cradle, pluginOptions.options), {
      lifetime: klass.LIFE_TIME || Lifetime.SINGLETON,
    }),
  })

  container.registerAdd(MarketplaceProviderRegistrationKey, asValue(key))
}

export default async ({
  container,
  options,
}: LoaderOptions<
  (
    | ModulesSdkTypes.ModuleServiceInitializeOptions
    | ModulesSdkTypes.ModuleServiceInitializeCustomDataLayerOptions
  ) & { providers: ModuleProvider[] }
>): Promise<void> => {
  await registrationFn(providers.SystemMarketplaceProvider, container, {
    id: "default",
  })

  await moduleProviderLoader({
    container,
    providers: options?.providers || [],
    registerServiceFn: registrationFn,
  })
}
