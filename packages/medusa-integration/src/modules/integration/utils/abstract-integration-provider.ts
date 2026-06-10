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
 *     getDescriptor() { return tkassaDescriptor }
 *     async testConnection({ credentials }) { ... }
 *   }
 *
 * This class is the single source of truth for the provider contract — code that
 * consumes providers (the registry) types against it, so adding a method here is the
 * only place to touch (besides implementing it in concrete providers).
 *
 * `static identifier` becomes the descriptor's `pluginId` (settings are stored/resolved
 * under it); authors don't repeat it in the descriptor.
 */
export abstract class AbstractIntegrationProvider {
  static identifier: string

  /** Optional fail-fast validation of the provider's `options` at load time. */
  static validateOptions(_options: Record<string, unknown>): void | never {}

  getIdentifier(): string {
    return (this.constructor as typeof AbstractIntegrationProvider).identifier
  }

  /** Return this plugin's settings descriptor (zod schema + UI metadata + sections). */
  abstract getDescriptor(): IntegrationDescriptorInput

  /** Optional connection check; omit if the plugin can't quickly verify credentials. */
  testConnection?(ctx: TestConnectionContext): Promise<TestConnectionResult>
}

export default AbstractIntegrationProvider
