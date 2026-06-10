import { IntegrationProviderRegistrationPrefix } from "../types"
import type { AbstractIntegrationProvider } from "../utils/abstract-integration-provider"
import type { IntegrationDescriptor } from "../descriptor/define"

type InjectedDependencies = {
  [key: `${typeof IntegrationProviderRegistrationPrefix}${string}`]: AbstractIntegrationProvider
}

/**
 * Thin registry over the integration-providers registered into the module container
 * by `loadProviders`. Each provider lives under `int_<identifier>[_<instanceId>]`.
 *
 * Intentionally minimal: it locates providers; callers invoke provider methods
 * directly (e.g. `registry.retrieveProvider(id).testConnection?.(ctx)`), so new
 * provider methods never require changes here.
 */
export default class IntegrationProviderService {
  protected dependencies_: InjectedDependencies

  constructor(container: InjectedDependencies) {
    this.dependencies_ = container
  }

  protected registrationKey(identifier: string, instanceId?: string | null): string {
    return `${IntegrationProviderRegistrationPrefix}${identifier}${instanceId ? `_${instanceId}` : ""}`
  }

  /** All registered provider instances. */
  listProviders(): AbstractIntegrationProvider[] {
    return Object.keys(this.dependencies_)
      .filter((k) => k.startsWith(IntegrationProviderRegistrationPrefix))
      .map((k) => this.dependencies_[k as keyof InjectedDependencies])
  }

  retrieveProvider(identifier: string, instanceId?: string | null): AbstractIntegrationProvider {
    const key = this.registrationKey(identifier, instanceId)
    const provider = this.dependencies_[key as keyof InjectedDependencies] as
      | AbstractIntegrationProvider
      | undefined
    if (!provider) {
      throw new Error(
        `Unable to retrieve integration provider "${key}". Make sure it is registered in medusa-config under the integration plugin's \`options.providers\`.`
      )
    }
    return provider
  }

  /**
   * Descriptors of every registered provider — feeds the introspection/UI pipeline.
   * `pluginId` is stamped from each provider's `getIdentifier()`, so authors never
   * repeat it in the descriptor.
   */
  listDescriptors(): IntegrationDescriptor[] {
    return this.listProviders().map((p) => ({
      ...p.getDescriptor(),
      pluginId: p.getIdentifier(),
    }))
  }
}
