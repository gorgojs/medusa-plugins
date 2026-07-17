import type {
  IntegrationDescriptorInput,
  TestConnectionContext,
  TestConnectionResult,
} from "../descriptor/define"

/**
 * Base class AND contract for integration-providers. A plugin ships a subclass and
 * registers it via `ModuleProvider(INTEGRATION_MODULE, { services: [MyProvider] })`.
 *
 *   export class TkassaIntegrationProvider extends AbstractIntegrationProvider {
 *     static identifier = "tkassa"
 *     get descriptor() { return tkassaDescriptor }
 *     async testConnection({ credentials }) { ... }
 *   }
 *
 * This class is the single source of truth for the provider contract — code that
 * consumes providers (the registry) types against it, so adding a method here is the
 * only place to touch (besides implementing it in concrete providers).
 *
 * `static identifier` becomes the descriptor's `identifier` (settings are stored/resolved
 * under it); authors don't repeat it in the descriptor.
 *
 * Each registration in `options.providers` is one *instance*: its `id` (if any) is
 * injected by the loader and exposed via `getInstanceId()`. A provider registered
 * without an `id` is the single (default) instance — `getInstanceId()` returns null.
 * The container key `int_<identifier>[_<id>]` is the instance's stable identity.
 */
export abstract class AbstractIntegrationProvider {
  static identifier: string

  /** The registration `id` (from `options.providers[].id`), injected by the loader. */
  protected readonly instanceId_: string | null

  constructor(_container?: unknown, _options?: unknown, instanceId?: string | null) {
    this.instanceId_ = instanceId ?? null
  }

  /** Optional fail-fast validation of the provider's `options` at load time. */
  static validateOptions(_options: Record<string, unknown>): void | never {}

  getIdentifier(): string {
    return (this.constructor as typeof AbstractIntegrationProvider).identifier
  }

  /** This instance's id (the registration `id`), or null for the single/default instance. */
  getInstanceId(): string | null {
    return this.instanceId_
  }

  /** Return this plugin's settings descriptor (zod schema + UI metadata + sections). */
  abstract get descriptor(): IntegrationDescriptorInput

  /** Optional connection check; omit if the plugin can't quickly verify credentials. */
  testConnection?(ctx: TestConnectionContext): Promise<TestConnectionResult>
}

export default AbstractIntegrationProvider
