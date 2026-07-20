import crypto from "node:crypto"
import path from "node:path"
import { asFunction, asValue, Lifetime } from "@medusajs/framework/awilix"
import { moduleProviderLoader } from "@medusajs/framework/modules-sdk"
import {
  LoaderOptions,
  ModuleProvider,
  ModulesSdkTypes,
} from "@medusajs/framework/types"
import { createTelemetryClient, findPackageJson, getMachineId } from "@gorgo/telemetry"
import {
  INTEGRATION_OPTIONS_KEY,
  IntegrationProviderRegistrationKey,
  IntegrationProviderRegistrationPrefix,
} from "../types"
import IntegrationProviderService from "../services/integration-provider"

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
  const instanceId = pluginOptions.id ?? null
  const key = `${IntegrationProviderRegistrationPrefix}${klass.identifier}${
    instanceId ? `_${instanceId}` : ""
  }`

  container.register({
    // Pass `instanceId` as the 3rd ctor arg so the provider knows which instance it is
    // (see AbstractIntegrationProvider.getInstanceId). The container key encodes the same.
    [key]: asFunction((cradle: any) => new klass(cradle, pluginOptions.options, instanceId), {
      lifetime: klass.LIFE_TIME || Lifetime.SINGLETON,
    }),
  })

  container.registerAdd(IntegrationProviderRegistrationKey, asValue(key))
}

type ProviderTelemetry = {
  category: string
  id: string
  package_name: string | null
  package_version: string | null
}

const trackStarted = async (container: any, providers: ModuleProvider[]): Promise<void> => {
  try {
    const telemetry = createTelemetryClient({ packageDir: __dirname })

    // Map each provider's static identifier → its npm package (name/version), resolved from the
    // `resolve` specifier. identifier↔package is 1:1, so this keys the lookup below no matter
    // how many instances share the same class.
    const pkgByIdentifier = new Map<string, { name: string; version: string }>()
    for (const entry of providers) {
      const spec = (entry as { resolve?: string }).resolve
      if (!spec) continue
      try {
        const pkg = await findPackageJson(path.dirname(require.resolve(spec)))
        if (!pkg) continue
        const mod = require(spec)
        const services: Array<{ identifier?: string }> = (mod?.default ?? mod)?.services ?? []
        for (const svc of services) {
          if (svc?.identifier) pkgByIdentifier.set(svc.identifier, pkg)
        }
      } catch {
        // a single unresolvable provider must not sink the whole event
      }
    }

    let machineId = ""
    try {
      machineId = getMachineId()
    } catch {
      // hash without a salt rather than dropping the event
    }

    const providerService = new IntegrationProviderService(container.cradle)
    const list: ProviderTelemetry[] = providerService.listRegistrations().map((r) => {
      const pkg = pkgByIdentifier.get(r.identifier)
      return {
        category: r.provider.descriptor.category,
        id: r.identifier,
        package_name: pkg?.name ?? null,
        package_version: pkg?.version ?? null,
      }
    })

    telemetry.track("plugin.started", { providers: list, provider_count: list.length })
  } catch {
    // never throw from telemetry
  }
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

  // Providers are now registered — announce them (guarded; never throws).
  await trackStarted(container, options?.providers ?? [])
}
