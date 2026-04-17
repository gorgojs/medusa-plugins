import fs from "node:fs"
import os from "node:os"
import crypto from "node:crypto"
import { getMachineId, isTelemetryEnabled, setTelemetryEnabled } from "./config-store.js"
import type { TelemetryEvent, TelemetryClientOptions, PluginInfo, OsInfo } from "./types.js"

const TELEMETRY_ENDPOINT = "https://telemetry.gorgojs.com"
const VERBOSE = process.env.GORGO_TELEMETRY_VERBOSE === "1" || process.env.GORGO_TELEMETRY_VERBOSE === "true"

export class TelemetryClient {
  private readonly pluginInfo: PluginInfo
  private readonly endpoint: string
  private readonly flushAt: number
  private readonly flushInterval: number

  private queue: TelemetryEvent[] = []
  private timer?: ReturnType<typeof setTimeout>

  // Cached values collected once per process lifetime
  private osInfoCache?: OsInfo
  private medusaVersionCache?: string

  constructor(options: TelemetryClientOptions) {
    if (typeof options.plugin === "string") {
      this.pluginInfo = {
        name: options.plugin,
        version: options.version ?? "0.0.0",
        feature: options.feature,
      }
    } else {
      this.pluginInfo = {
        ...options.plugin,
        feature: options.feature ?? options.plugin.feature,
      }
    }

    this.endpoint = options.endpoint ?? TELEMETRY_ENDPOINT
    this.flushAt = Math.max(options.flushAt ?? 20, 1)
    this.flushInterval = options.flushInterval ?? 30_000

    // Register process exit handler to flush remaining events
    process.once("beforeExit", () => {
      void this.flush()
    })
  }

  // ------------------------------------------------------------------
  // System info collectors
  // ------------------------------------------------------------------

  private getOsInfo(): OsInfo {
    if (this.osInfoCache) return this.osInfoCache
    this.osInfoCache = {
      node_version: process.version,
      platform: os.platform(),
      release: os.release(),
      arch: os.arch(),
      is_ci: Boolean(process.env.CI),
    }
    return this.osInfoCache
  }

  private getMedusaVersion(): string {
    if (this.medusaVersionCache) return this.medusaVersionCache
    try {
      // require.resolve is safe here — Node.js server context
      const pkgPath = require.resolve("@medusajs/medusa/package.json")
      const raw = fs.readFileSync(pkgPath, "utf-8")
      const { version } = JSON.parse(raw) as { version: string }
      this.medusaVersionCache = version
    } catch {
      this.medusaVersionCache = "0.0.0"
    }
    return this.medusaVersionCache
  }

  // ------------------------------------------------------------------
  // Public API
  // ------------------------------------------------------------------

  /**
   * Track a server-side event.
   *
   * @param eventType  Dot-separated event name, e.g. "sync.completed"
   * @param properties Arbitrary extra data attached to the event
   * @param pluginOverride Override plugin name/version/feature for this event only
   */
  track(
    eventType: string,
    properties: Record<string, unknown> = {},
    pluginOverride?: Partial<PluginInfo>
  ): void {
    if (!isTelemetryEnabled()) return

    const event: TelemetryEvent = {
      id: `te_${crypto.randomUUID()}`,
      type: eventType,
      timestamp: new Date().toISOString(),
      machine_id: getMachineId(),
      os_info: this.getOsInfo(),
      medusa_version: this.getMedusaVersion(),
      plugin: pluginOverride ? { ...this.pluginInfo, ...pluginOverride } : this.pluginInfo,
      properties,
    }

    this.queue.push(event)
    if (VERBOSE) {
      console.log("[gorgo/telemetry] queued:", eventType, `(queue: ${this.queue.length})`)
    }

    if (this.queue.length >= this.flushAt) {
      void this.flush()
    } else if (!this.timer) {
      this.timer = setTimeout(() => void this.flush(), this.flushInterval)
    }
  }

  /**
   * Send all queued events to the telemetry endpoint immediately.
   * Silently ignores network errors so it never breaks the application.
   */
  async flush(): Promise<void> {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined
    }

    if (this.queue.length === 0 || !isTelemetryEnabled()) return

    const batch = this.queue.splice(0)

    try {
      if (VERBOSE) {
        console.log(`[gorgo/telemetry] flushing ${batch.length} event(s) to ${this.endpoint}`)
      }
      await fetch(`${this.endpoint}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ events: batch }),
        signal: AbortSignal.timeout(5_000),
      })
    } catch (err) {
      if (VERBOSE) {
        console.error("[gorgo/telemetry] flush failed:", err)
      }
      // On failure, re-queue the events so they are retried on next flush
      this.queue.unshift(...batch)
    }
  }

  /** Enable or disable telemetry for this machine. Persisted to ~/.gorgo/telemetry.json */
  setEnabled(enabled: boolean): void {
    setTelemetryEnabled(enabled)
  }

  /** Check whether telemetry is currently enabled. */
  isEnabled(): boolean {
    return isTelemetryEnabled()
  }
}
