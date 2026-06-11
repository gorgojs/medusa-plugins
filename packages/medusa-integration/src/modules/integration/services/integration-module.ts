import { MedusaService } from "@medusajs/framework/utils"
import { Logger } from "@medusajs/framework/types"
import Integration from "../models/integration"
import { decryptSecrets, encryptSecrets, isValidKey } from "./crypto"
import type IntegrationProviderService from "./integration-provider"
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
    return this.providerService_.listProviders().map((p) =>
      introspectDescriptor(
        { ...p.getDescriptor(), pluginId: p.getIdentifier() },
        typeof p.testConnection === "function"
      )
    )
  }

  getUiDescriptor(pluginId: string): UiDescriptor | undefined {
    const p = this.providerService_.listProviders().find((p) => p.getIdentifier() === pluginId)
    if (!p) return undefined
    return introspectDescriptor(
      { ...p.getDescriptor(), pluginId: p.getIdentifier() },
      typeof p.testConnection === "function"
    )
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
      provider = this.providerService_.retrieveProvider(pluginId)
    } catch {
      return { status: "fail", message: `Unknown integration provider "${pluginId}"` }
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

    // TODO:instanceId is required when supportsMultipleInstances is true

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
