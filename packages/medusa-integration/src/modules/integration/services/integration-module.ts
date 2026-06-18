import { MedusaService } from "@medusajs/framework/utils"
import { Logger } from "@medusajs/framework/types"
import Integration from "../models/integration"
import { decryptSecrets, encryptSecrets, isValidKey } from "./crypto"
import IntegrationProviderService from "./integration-provider"
import type { IntegrationDescriptor, TestConnectionResult } from "../descriptor/define"
import { introspectDescriptor, type UiDescriptor } from "../descriptor/introspect"
import { INTEGRATION_OPTIONS_KEY, type IntegrationModuleOptions } from "../types"

type InjectedDependencies = {
  logger?: Logger
  integrationProviderService: IntegrationProviderService
  [INTEGRATION_OPTIONS_KEY]?: IntegrationModuleOptions
}

export type ResolvedSettings = {
  settings: Record<string, unknown>
  meta: { plugin_id: string; instance_id: string | null; is_enabled: boolean, plugin_kind: string | null }
}

const CACHE_TTL_MS = 60_000

export default class IntegrationModuleService extends MedusaService({
  Integration,
}) {
  protected logger_?: Logger
  protected providerService_: IntegrationProviderService
  protected options_: IntegrationModuleOptions
  protected cache_ = new Map<string, { value: ResolvedSettings | null; expiresAt: number }>()

  constructor(deps: InjectedDependencies) {
    super(...arguments)
    this.logger_ = deps.logger
    this.providerService_ = deps.integrationProviderService
    this.options_ = deps[INTEGRATION_OPTIONS_KEY] ?? {}
  }

  // ── descriptors (sourced from registered integration-providers) ──────────────
  getDescriptor(pluginId: string): IntegrationDescriptor | undefined {
    return this.providerService_.listDescriptors().find((d) => d.pluginId === pluginId)
  }

  listUiDescriptors(): UiDescriptor[] {
    return this.providerService_.listRegistrations().map((r) =>
      introspectDescriptor(
        { ...r.provider.getDescriptor(), pluginId: r.pluginId, instanceId: r.instanceId },
        typeof r.provider.testConnection === "function"
      )
    )
  }

  getUiDescriptor(pluginId: string, instanceId?: string | null): UiDescriptor | undefined {
    const r = this.providerService_
      .listRegistrations()
      .find((r) => r.pluginId === pluginId && r.instanceId === (instanceId ?? null))
    if (!r) return undefined
    return introspectDescriptor(
      { ...r.provider.getDescriptor(), pluginId: r.pluginId, instanceId: r.instanceId },
      typeof r.provider.testConnection === "function"
    )
  }

  /** Map a registration key (`int_<id>[_<instance>]`) to its `(pluginId, instanceId)`. */
  getRegistration(key: string): { pluginId: string; instanceId: string | null } | undefined {
    const r = this.providerService_.getRegistration(key)
    return r ? { pluginId: r.pluginId, instanceId: r.instanceId } : undefined
  }

  /** Whether a provider instance is declared for this `(pluginId, instanceId)`. */
  hasRegistration(pluginId: string, instanceId?: string | null): boolean {
    return this.providerService_.hasProvider(pluginId, instanceId)
  }

  /**
   * Admin overview: every declared instance (registration) merged with its current row
   * state. Lets the UI list configurable integrations before any row exists. No secrets.
   */
  async listIntegrationsOverview(): Promise<
    Array<{
      provider_id: string
      plugin_id: string
      instance_id: string | null
      plugin_kind: string
      display_name: { en: string; ru: string }
      supports_multiple_instances: boolean
      has_test_connection: boolean
      is_configured: boolean
      is_enabled: boolean
      last_test_status: string | null
      last_test_at: Date | null
    }>
  > {
    const regs = this.providerService_.listRegistrations()
    const rows = await this.listIntegrations({}, { take: 1000 })
    const rk = (p: string, i: string | null) => `${p}::${i ?? ""}`
    const byKey = new Map(rows.map((r: any) => [rk(r.plugin_id, r.instance_id ?? null), r]))
    return regs.map((r) => {
      const d = r.provider.getDescriptor()
      const row: any = byKey.get(rk(r.pluginId, r.instanceId))
      return {
        provider_id: r.key,
        plugin_id: r.pluginId,
        instance_id: r.instanceId,
        plugin_kind: d.pluginKind,
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
  async runTestConnection(
    pluginId: string,
    instanceId?: string | null
  ): Promise<TestConnectionResult> {
    let provider
    try {
      provider = this.providerService_.retrieveProvider(pluginId, instanceId)
    } catch {
      return {
        status: "fail",
        message: `Unknown integration provider "${IntegrationProviderService.key(pluginId, instanceId)}"`,
      }
    }
    if (!provider.testConnection) {
      return { status: "skipped", message: "No test configured" }
    }
    const resolved = await this.getResolvedSettings(pluginId, instanceId)
    if (!resolved) {
      return { status: "fail", message: "Not configured" }
    }
    try {
      return await provider.testConnection({
        settings: resolved.settings,
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
  protected cacheKey(pluginId: string, instanceId?: string | null): string {
    return `${pluginId}::${instanceId ?? ""}`
  }

  clearSettingsCache(pluginId?: string, instanceId?: string | null): void {
    if (!pluginId) {
      this.cache_.clear()
      return
    }
    this.cache_.delete(this.cacheKey(pluginId, instanceId))
  }

  async getResolvedSettings(
    pluginId: string,
    instanceId?: string | null
  ): Promise<ResolvedSettings | null> {
    const ck = this.cacheKey(pluginId, instanceId)
    const hit = this.cache_.get(ck)
    if (hit && hit.expiresAt > Date.now()) return hit.value

    // The (pluginId, instanceId) must correspond to a declared registration. A miss here
    // is a misconfiguration (forgot to register / wrong id), distinct from "registered but
    // not configured yet" (handled below by returning null).
    if (!this.providerService_.hasProvider(pluginId, instanceId)) {
      throw new Error(
        `No integration provider registered for "${IntegrationProviderService.key(pluginId, instanceId)}". ` +
          `Declare it in medusa-config under the integration plugin's options.providers.`
      )
    }

    const filters: Record<string, unknown> = { plugin_id: pluginId }
    filters.instance_id = instanceId ?? null
    const [record] = await this.listIntegrations(filters, { take: 1 })

    let value: ResolvedSettings | null = null
    if (record && record.is_enabled) {
      value = {
        settings: {
          ...(record.settings as Record<string, unknown>) ?? {},
          ...(this.decryptCredentials(record.credentials_ciphertext, record.credentials_iv) as Record<string, unknown>) ?? {},
        },
        meta: {
          plugin_id: record.plugin_id,
          instance_id: record.instance_id ?? null,
          is_enabled: record.is_enabled,
          plugin_kind: record.plugin_kind ?? null
        },
      }
    }
    this.cache_.set(ck, { value, expiresAt: Date.now() + CACHE_TTL_MS })
    return value
  }
}
