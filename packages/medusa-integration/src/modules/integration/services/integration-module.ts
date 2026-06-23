import { MedusaService } from "@medusajs/framework/utils"
import { Logger } from "@medusajs/framework/types"
import Integration from "../models/integration"
import { decryptSecrets, encryptSecrets, isValidKey } from "./crypto"
import IntegrationProviderService from "./integration-provider"
import type { IntegrationDescriptor, TestConnectionResult } from "../descriptor/define"
import { introspectDescriptor, secretFieldNames, type UiDescriptor } from "../descriptor/introspect"
import { INTEGRATION_OPTIONS_KEY, type IntegrationModuleOptions } from "../types"
import type { IntegrationOverviewItem } from "../../../types"

type InjectedDependencies = {
  logger?: Logger
  integrationProviderService: IntegrationProviderService
  [INTEGRATION_OPTIONS_KEY]?: IntegrationModuleOptions
}

export type ResolvedOptions = {
  options: Record<string, unknown>
  meta: { provider_id: string; module: string | null; is_enabled: boolean }
}

const CACHE_TTL_MS = 60_000

export default class IntegrationModuleService extends MedusaService({
  Integration,
}) {
  protected logger_?: Logger
  protected providerService_: IntegrationProviderService
  protected options_: IntegrationModuleOptions
  protected cache_ = new Map<string, { value: ResolvedOptions | null; expiresAt: number }>()

  constructor(deps: InjectedDependencies) {
    super(...arguments)
    this.logger_ = deps.logger
    this.providerService_ = deps.integrationProviderService
    this.options_ = deps[INTEGRATION_OPTIONS_KEY] ?? {}
  }

  // ── descriptors (sourced from registered integration-providers) ──────────────
  /** UI descriptors for every registration (one per instance). */
  listUiDescriptors(): UiDescriptor[] {
    return this.providerService_.listRegistrations().map((r) =>
      introspectDescriptor(
        { ...r.provider.getDescriptor(), pluginId: r.pluginId, instanceId: r.instanceId },
        typeof r.provider.testConnection === "function"
      )
    )
  }

  /** Stamped descriptor (schema + pluginId/instanceId) for one `provider_id`. */
  getProviderDescriptor(providerId: string): IntegrationDescriptor | undefined {
    const r = this.providerService_.getRegistration(providerId)
    if (!r) return undefined
    return { ...r.provider.getDescriptor(), pluginId: r.pluginId, instanceId: r.instanceId }
  }

  /** UI descriptor for one `provider_id` (container key). */
  getProviderUiDescriptor(providerId: string): UiDescriptor | undefined {
    const r = this.providerService_.getRegistration(providerId)
    if (!r) return undefined
    return introspectDescriptor(
      { ...r.provider.getDescriptor(), pluginId: r.pluginId, instanceId: r.instanceId },
      typeof r.provider.testConnection === "function"
    )
  }

  /** Whether a provider is registered under this `provider_id` (container key). */
  hasProviderId(providerId: string): boolean {
    return !!this.providerService_.getRegistration(providerId)
  }

  /**
   * Keep stored secrets that the form left blank: secrets are never sent to the client, so
   * an empty/absent secret field on save means "keep the existing value". Blank secrets
   * with no stored value are dropped so validation flags them as required (new config).
   */
  async mergeSecrets(
    providerId: string,
    payload: Record<string, unknown>
  ): Promise<Record<string, unknown>> {
    const descriptor = this.getProviderDescriptor(providerId)
    if (!descriptor) return payload
    const blank = secretFieldNames(descriptor).filter(
      (k) => payload[k] == null || payload[k] === ""
    )
    if (blank.length === 0) return payload

    const [record] = await this.listIntegrations({ provider_id: providerId }, { take: 1 })
    const existing = record
      ? this.decryptCredentials(record.credentials_ciphertext, record.credentials_iv)
      : {}

    const merged: Record<string, unknown> = { ...payload }
    for (const k of blank) {
      if (k in existing) merged[k] = existing[k]
      else delete merged[k]
    }
    return merged
  }

  /**
   * Admin overview: every declared instance (registration) merged with its current row
   * state. Lets the UI list configurable integrations before any row exists. No secrets.
   */
  async listIntegrationsOverview(): Promise<IntegrationOverviewItem[]> {
    const regs = this.providerService_.listRegistrations()
    const rows = await this.listIntegrations({}, { take: 1000 })
    const byId = new Map(rows.map((r: any) => [r.provider_id, r]))
    return regs.map((r) => {
      const d = r.provider.getDescriptor()
      const row: any = byId.get(r.key)
      return {
        provider_id: r.key,
        plugin_id: r.pluginId,
        instance_id: r.instanceId,
        module: d.module,
        display_name: d.displayName,
        supports_multiple_instances: d.supportsMultipleInstances ?? false,
        has_test_connection: typeof r.provider.testConnection === "function",
        is_configured: !!row,
        is_enabled: row?.is_enabled ?? false,
        last_test_status: row?.last_test_status ?? null,
        last_test_at: row?.last_test_at ?? null,
      }
    })
  }

  /**
   * Run the provider's connection test against the currently-resolved settings.
   * Delegates to the integration-provider's `testConnection` (if it has one).
   */
  async runTestConnection(providerId: string): Promise<TestConnectionResult> {
    let provider
    try {
      provider = this.providerService_.retrieveByKey(providerId)
    } catch {
      return { status: "fail", message: `Unknown integration provider "${providerId}"` }
    }
    if (!provider.testConnection) {
      return { status: "skipped", message: "No test configured" }
    }
    const resolved = await this.getResolvedOptions(provider.getIdentifier(), provider.getInstanceId())
    if (!resolved) {
      return { status: "fail", message: "Not configured" }
    }
    try {
      return await provider.testConnection({
        options: resolved.options,
      })
    } catch (e: any) {
      return { status: "fail", message: e?.message ?? "Test failed" }
    }
  }

  // ── encryption ───────────────────────────────────────────────────────────────
  protected resolveKey(): string | null {
    const key = this.options_.encryptionKey
    if (isValidKey(key)) return key!
    const isProd = process.env.NODE_ENV === "production"
    if (isProd) {
      throw new Error(
        "[integration] encryptionKey is required in production (32-byte base64). Set GORGO_INTEGRATION_ENCRYPTION_KEY."
      )
    }
    if (this.options_.allowPlaintextInDev) {
      this.logger_?.warn(
        "[integration] no valid encryptionKey; storing secrets as PLAINTEXT (dev only, allowPlaintextInDev=true)"
      )
      return null
    }
    throw new Error(
      "[integration] missing/invalid encryptionKey. Set GORGO_INTEGRATION_ENCRYPTION_KEY or allowPlaintextInDev=true in dev."
    )
  }

  encryptCredentials(secrets: Record<string, unknown>): {
    credentials_ciphertext: string | null
    credentials_iv: string | null
  } {
    if (!secrets || Object.keys(secrets).length === 0) {
      return { credentials_ciphertext: null, credentials_iv: null }
    }
    const key = this.resolveKey()
    if (key === null) {
      return {
        credentials_ciphertext: Buffer.from(JSON.stringify(secrets), "utf8").toString("base64"),
        credentials_iv: "",
      }
    }
    const { ciphertext, iv } = encryptSecrets(secrets, key)
    return { credentials_ciphertext: ciphertext, credentials_iv: iv }
  }

  protected decryptCredentials(ciphertext: string | null, iv: string | null): Record<string, unknown> {
    if (!ciphertext) return {}
    if (iv === "" || iv === null) {
      return JSON.parse(Buffer.from(ciphertext, "base64").toString("utf8"))
    }
    const key = this.resolveKey()
    if (key === null) return {}
    return decryptSecrets(ciphertext, iv, key)
  }

  // ── resolver (runtime read, cached) ──────────────────────────────────────────
  /** Clear the resolved-options cache for one `provider_id`, or all when omitted. */
  clearOptionsCache(providerId?: string): void {
    if (!providerId) {
      this.cache_.clear()
      return
    }
    this.cache_.delete(providerId)
  }

  /**
   * Resolve decrypted options for a `(pluginId, instanceId)` pair (the consumer-facing
   * shape) — mapped internally to the `provider_id` key `int_<pluginId>[_<instanceId>]`.
   */
  async getResolvedOptions(
    pluginId: string,
    instanceId?: string | null
  ): Promise<ResolvedOptions | null> {
    const providerId = IntegrationProviderService.key(pluginId, instanceId)
    const hit = this.cache_.get(providerId)
    if (hit && hit.expiresAt > Date.now()) return hit.value

    // The provider_id must correspond to a declared registration. A miss here is a
    // misconfiguration (forgot to register / wrong id), distinct from "registered but
    // not configured yet" (handled below by returning null).
    if (!this.hasProviderId(providerId)) {
      throw new Error(
        `No integration provider registered for "${providerId}". ` +
          `Declare it in medusa-config under the integration plugin's options.providers.`
      )
    }

    const [record] = await this.listIntegrations({ provider_id: providerId }, { take: 1 })

    let value: ResolvedOptions | null = null
    if (record && record.is_enabled) {
      value = {
        options: {
          ...(record.options as Record<string, unknown>) ?? {},
          ...(this.decryptCredentials(record.credentials_ciphertext, record.credentials_iv) as Record<string, unknown>) ?? {},
        },
        meta: {
          provider_id: record.provider_id,
          module: record.module ?? null,
          is_enabled: record.is_enabled,
        },
      }
    }
    this.cache_.set(providerId, { value, expiresAt: Date.now() + CACHE_TTL_MS })
    return value
  }
}
