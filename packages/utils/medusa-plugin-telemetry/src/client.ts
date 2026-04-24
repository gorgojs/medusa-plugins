import crypto from "node:crypto"
import { getMachineId, isTelemetryEnabled, setTelemetryEnabled } from "./config-store.js"
import { collectEnvInfo, findPackageJson } from "./env.js"
import {
  severityForEvent,
  toOtlpAttributes,
  type OtlpAttribute,
  type OtlpLogRecord,
  type OtlpLogsPayload,
} from "./otlp.js"
import type { TelemetryEvent, TelemetryClientOptions, PluginInfo, EnvInfo } from "./types.js"

const TELEMETRY_ENDPOINT = "https://telemetry.gorgojs.com"
const SCOPE_NAME = "gorgo.telemetry"
const SCOPE_VERSION = "0.1.0"
const VERBOSE =
  process.env.GORGO_TELEMETRY_VERBOSE === "1" || process.env.GORGO_TELEMETRY_VERBOSE === "true"

function isoToUnixNano(timestamp: string): string {
  return `${new Date(timestamp).getTime()}000000`
}

const UNKNOWN_PLUGIN: PluginInfo = { name: "unknown", version: "0.0.0" }

/**
 * Resolve plugin identity from `packageDir` (preferred) or an explicit
 * `plugin` object. Never throws — falls back to a placeholder so a
 * misconfigured caller can't take down the host process.
 */
function resolvePluginInfo(options: TelemetryClientOptions): PluginInfo {
  try {
    if (options.packageDir) {
      const pkg = findPackageJson(options.packageDir)
      if (pkg) return pkg
      if (VERBOSE) {
        console.warn(
          `[gorgo/telemetry] no package.json found walking up from ${options.packageDir}; using placeholder identity`
        )
      }
      return UNKNOWN_PLUGIN
    }
    if (options.plugin?.name && options.plugin?.version) {
      return { name: options.plugin.name, version: options.plugin.version }
    }
    if (VERBOSE) {
      console.warn(
        "[gorgo/telemetry] neither `packageDir` nor `plugin` provided; using placeholder identity"
      )
    }
    return UNKNOWN_PLUGIN
  } catch (err) {
    if (VERBOSE) {
      console.warn("[gorgo/telemetry] plugin info resolution failed:", err)
    }
    return UNKNOWN_PLUGIN
  }
}

export class TelemetryClient {
  private readonly pluginInfo: PluginInfo
  private readonly endpoint: string
  private readonly flushAt: number
  private readonly flushInterval: number
  private readonly sessionId: string

  private queue: TelemetryEvent[] = []
  private timer?: ReturnType<typeof setTimeout>

  private envCache?: EnvInfo

  constructor(options: TelemetryClientOptions) {
    this.pluginInfo = resolvePluginInfo(options)

    this.endpoint = options.endpoint ?? TELEMETRY_ENDPOINT
    this.flushAt = Math.max(options.flushAt ?? 20, 1)
    this.flushInterval = options.flushInterval ?? 30_000
    this.sessionId = crypto.randomUUID()

    process.once("beforeExit", () => {
      void this.flush()
    })
  }

  private getEnvInfo(): EnvInfo {
    if (!this.envCache) {
      this.envCache = collectEnvInfo()
    }
    return this.envCache
  }

  /**
   * Track a server-side event.
   *
   * @param eventName Dot-separated event name, e.g. "payment.initiated"
   * @param properties Arbitrary extra data attached to the event
   */
  track(eventName: string, properties: Record<string, unknown> = {}): void {
    try {
      if (!isTelemetryEnabled()) return

      const event: TelemetryEvent = {
        event: eventName,
        timestamp: new Date().toISOString(),
        machine_id: getMachineId(),
        session_id: this.sessionId,
        plugin: this.pluginInfo,
        env: this.getEnvInfo(),
        properties,
      }

      this.queue.push(event)
      if (VERBOSE) {
        console.log("[gorgo/telemetry] queued:", eventName, `(queue: ${this.queue.length})`)
      }

      if (this.queue.length >= this.flushAt) {
        void this.flush()
      } else if (!this.timer) {
        this.timer = setTimeout(() => void this.flush(), this.flushInterval)
      }
    } catch (err) {
      if (VERBOSE) {
        console.warn("[gorgo/telemetry] track failed:", err)
      }
    }
  }

  private buildResourceAttributes(): OtlpAttribute[] {
    const env = this.getEnvInfo()
    return toOtlpAttributes({
      "plugin.name": this.pluginInfo.name,
      "plugin.version": this.pluginInfo.version,
      machine_id: getMachineId(),
      session_id: this.sessionId,
      "env.medusa_version": env.medusa_version,
      "env.node_version": env.node_version,
      "env.os": env.os,
      "env.arch": env.arch,
      "env.ci": env.ci,
      "env.docker": env.docker,
      "env.node_env": env.node_env,
      "env.locale": env.locale,
      "env.timezone": env.timezone,
      "env.package_manager": env.package_manager,
    })
  }

  private toLogRecord(event: TelemetryEvent): OtlpLogRecord {
    const severity = severityForEvent(event.event)
    const attributes: Record<string, unknown> = { "event.name": event.event }
    if (event.properties) {
      for (const [key, value] of Object.entries(event.properties)) {
        attributes[key] = value
      }
    }
    return {
      timeUnixNano: isoToUnixNano(event.timestamp),
      severityNumber: severity.number,
      severityText: severity.text,
      attributes: toOtlpAttributes(attributes),
    }
  }

  /**
   * Send all queued events to the OTLP Logs endpoint immediately.
   * Silently ignores network errors so it never breaks the application.
   */
  async flush(): Promise<void> {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined
    }

    if (this.queue.length === 0 || !isTelemetryEnabled()) return

    const batch = this.queue.splice(0)

    const payload: OtlpLogsPayload = {
      resourceLogs: [
        {
          resource: { attributes: this.buildResourceAttributes() },
          scopeLogs: [
            {
              scope: { name: SCOPE_NAME, version: SCOPE_VERSION },
              logRecords: batch.map((e) => this.toLogRecord(e)),
            },
          ],
        },
      ],
    }

    const url = `${this.endpoint}/batch`
    try {
      if (VERBOSE) {
        console.log(`[gorgo/telemetry] flushing ${batch.length} event(s) to ${url}`)
      }
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(5_000),
      })
    } catch (err) {
      if (VERBOSE) {
        console.error("[gorgo/telemetry] flush failed:", err)
      }
      this.queue.unshift(...batch)
    }
  }

  /** The plugin info attached to every event emitted by this client. */
  getPluginInfo(): PluginInfo {
    return this.pluginInfo
  }

  /** Enable or disable telemetry for this machine. Persisted to ~/.gorgo/telemetry.json */
  setEnabled(enabled: boolean): void {
    setTelemetryEnabled(enabled)
  }

  isEnabled(): boolean {
    return isTelemetryEnabled()
  }
}
