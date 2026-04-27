import crypto from "node:crypto"
import { getMachineId, isTelemetryEnabled, setTelemetryEnabled } from "./config-store.js"
import { collectEnvInfo } from "./env.js"
import {
  severityForEvent,
  toOtlpAttributes,
  type OtlpAttribute,
  type OtlpLogRecord,
  type OtlpLogsPayload,
} from "./otlp.js"
import type { EnvInfo, PluginInfo } from "./types.js"

const TELEMETRY_ENDPOINT = "https://telemetry.gorgojs.com"
const SCOPE_NAME = "gorgo.telemetry"
const SCOPE_VERSION = "0.1.0"
const VERBOSE =
  process.env.GORGO_TELEMETRY_VERBOSE === "1" || process.env.GORGO_TELEMETRY_VERBOSE === "true"

const DISPATCHER_KEY = Symbol.for("@gorgo/medusa-plugin-telemetry/dispatcher@v1")

export interface DispatcherOptions {
  endpoint?: string
  flushAt?: number
  flushInterval?: number
  /** Hard cap on total queued events across all plugins. Oldest are dropped on overflow. */
  maxQueueSize?: number
}

interface QueuedEvent {
  eventName: string
  /** Wall-clock nanoseconds, strictly monotonic across events on this dispatcher. */
  timeUnixNano: string
  properties: Record<string, unknown>
}

interface PluginBucket {
  plugin: PluginInfo
  events: QueuedEvent[]
}

function fallbackEnv(): EnvInfo {
  return {
    medusa_version: "0.0.0",
    node_version: process.version,
    os: process.platform,
    arch: process.arch,
    ci: false,
    docker: false,
    node_env: process.env.NODE_ENV ?? "development",
    locale: "C",
    timezone: "UTC",
    package_manager: "unknown",
  }
}

/**
 * Process-wide singleton that owns the entire telemetry pipeline:
 * one queue per plugin (`Map<key, bucket>`), one timer, one HTTP request.
 *
 * `TelemetryClient` instances created by individual plugins delegate
 * `enqueue`/`flush` here, so N plugins produce a single OTLP batch with
 * `resourceLogs[]` containing one entry per plugin.
 */
export class TelemetryDispatcher {
  private readonly endpoint: string
  private readonly flushAt: number
  private readonly flushInterval: number
  private readonly maxQueueSize: number
  /** Single per-process session id shared by all plugins on this dispatcher. */
  private readonly sessionId: string

  private buckets = new Map<string, PluginBucket>()
  private totalCount = 0
  private timer?: ReturnType<typeof setTimeout>

  private envCache?: EnvInfo
  private machineIdCache?: string
  private telemetryEnabledCache?: boolean

  private flushing = false
  private exitHandlersRegistered = false

  /** Monotonic wall-clock nanosecond cursor — bumped by 1 ns when collisions would occur. */
  private lastNano = 0n

  private nextTimeUnixNano(): string {
    const candidate = BigInt(Date.now()) * 1_000_000n
    this.lastNano = candidate > this.lastNano ? candidate : this.lastNano + 1n
    return this.lastNano.toString()
  }

  constructor(options: DispatcherOptions = {}) {
    this.endpoint = process.env.GORGO_TELEMETRY_ENDPOINT ?? options.endpoint ?? TELEMETRY_ENDPOINT
    this.flushAt = Math.max(options.flushAt ?? 20, 1)
    this.flushInterval = options.flushInterval ?? 30_000
    this.maxQueueSize = Math.max(options.maxQueueSize ?? 1000, 1)
    this.sessionId = crypto.randomUUID()

    this.registerExitHandlers()
  }

  // ------------------------------------------------------------------
  // Caches (one disk read per process for each)
  // ------------------------------------------------------------------

  private getEnvInfo(): EnvInfo {
    if (!this.envCache) {
      try {
        this.envCache = collectEnvInfo()
      } catch (err) {
        if (VERBOSE) console.warn("[gorgo/telemetry] env collection failed:", err)
        this.envCache = fallbackEnv()
      }
    }
    return this.envCache
  }

  private getMachineIdCached(): string {
    if (this.machineIdCache === undefined) {
      try {
        this.machineIdCache = getMachineId()
      } catch {
        this.machineIdCache = ""
      }
    }
    return this.machineIdCache
  }

  private isEnabledCached(): boolean {
    if (this.telemetryEnabledCache === undefined) {
      try {
        this.telemetryEnabledCache = isTelemetryEnabled()
      } catch {
        this.telemetryEnabledCache = true
      }
    }
    return this.telemetryEnabledCache
  }

  // ------------------------------------------------------------------
  // Public surface (used by TelemetryClient)
  // ------------------------------------------------------------------

  enqueue(plugin: PluginInfo, eventName: string, properties: Record<string, unknown> = {}): void {
    try {
      if (!this.isEnabledCached()) return

      const key = `${plugin.name}@${plugin.version}`
      let bucket = this.buckets.get(key)
      if (!bucket) {
        bucket = { plugin, events: [] }
        this.buckets.set(key, bucket)
      }

      bucket.events.push({
        eventName,
        timeUnixNano: this.nextTimeUnixNano(),
        properties,
      })
      this.totalCount++

      if (this.totalCount > this.maxQueueSize) {
        this.dropOldest()
      }

      if (VERBOSE) {
        console.log(
          `[gorgo/telemetry] queued: ${eventName} for ${plugin.name} (total: ${this.totalCount})`
        )
      }

      if (this.totalCount >= this.flushAt) {
        void this.flush()
      } else if (!this.timer) {
        this.timer = setTimeout(() => void this.flush(), this.flushInterval)
      }
    } catch (err) {
      if (VERBOSE) console.warn("[gorgo/telemetry] enqueue failed:", err)
    }
  }

  /** Send all queued events to the OTLP endpoint immediately. Never throws. */
  async flush(): Promise<void> {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined
    }

    if (this.flushing) return
    if (this.totalCount === 0) return

    if (!this.isEnabledCached()) {
      this.buckets.clear()
      this.totalCount = 0
      return
    }

    this.flushing = true

    // snapshot + reset state so concurrent enqueues don't clobber the in-flight batch
    const inflight = this.buckets
    const inflightCount = this.totalCount
    this.buckets = new Map()
    this.totalCount = 0

    try {
      const env = this.getEnvInfo()
      const machineId = this.getMachineIdCached()

      const resourceLogs = Array.from(inflight.values()).map((bucket) => ({
        resource: {
          attributes: this.buildResourceAttributes(bucket.plugin, env, machineId),
        },
        scopeLogs: [
          {
            scope: { name: SCOPE_NAME, version: SCOPE_VERSION },
            logRecords: bucket.events.map((e) => this.toLogRecord(e)),
          },
        ],
      }))

      const payload: OtlpLogsPayload = { resourceLogs }
      const url = `${this.endpoint}/batch`

      if (VERBOSE) {
        console.log(
          `[gorgo/telemetry] flushing ${inflightCount} event(s) across ${resourceLogs.length} plugin(s) to ${url}`
        )
      }

      // Debug
      if (VERBOSE) {
        console.log("[gorgo/telemetry] payload:", JSON.stringify(payload, null, 2))
      }

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(5_000),
      })
    } catch (err) {
      if (VERBOSE) console.warn("[gorgo/telemetry] flush failed:", err)
      this.requeue(inflight)
    } finally {
      this.flushing = false
      if (this.totalCount > 0 && !this.timer) {
        this.timer = setTimeout(() => void this.flush(), this.flushInterval)
      }
    }
  }

  setEnabled(enabled: boolean): void {
    try {
      setTelemetryEnabled(enabled)
      this.telemetryEnabledCache = enabled
    } catch (err) {
      if (VERBOSE) console.warn("[gorgo/telemetry] setEnabled failed:", err)
    }
  }

  isEnabled(): boolean {
    return this.isEnabledCached()
  }

  /** Test-only — wipes in-memory state. */
  __resetForTesting(): void {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
    this.buckets.clear()
    this.totalCount = 0
    this.envCache = undefined
    this.machineIdCache = undefined
    this.telemetryEnabledCache = undefined
    this.flushing = false
  }

  // ------------------------------------------------------------------
  // Internals
  // ------------------------------------------------------------------

  private registerExitHandlers(): void {
    if (this.exitHandlersRegistered) return
    this.exitHandlersRegistered = true

    const handler = () => {
      try {
        void this.flush()
      } catch {
        // never throw from a process exit handler
      }
    }
    process.once("beforeExit", handler)
    process.once("SIGINT", handler)
    process.once("SIGTERM", handler)
  }

  /** Drop one event from the largest bucket — the noisiest plugin gets pruned first. */
  private dropOldest(): void {
    let victim: PluginBucket | undefined
    let maxLen = 0
    for (const bucket of this.buckets.values()) {
      if (bucket.events.length > maxLen) {
        maxLen = bucket.events.length
        victim = bucket
      }
    }
    if (victim && victim.events.length > 0) {
      victim.events.shift()
      this.totalCount--
      if (VERBOSE) {
        console.warn(
          `[gorgo/telemetry] queue full (cap=${this.maxQueueSize}); dropped oldest event from ${victim.plugin.name}`
        )
      }
    }
  }

  private requeue(inflight: Map<string, PluginBucket>): void {
    for (const [key, bucket] of inflight) {
      const existing = this.buckets.get(key)
      if (existing) {
        existing.events.unshift(...bucket.events)
      } else {
        this.buckets.set(key, bucket)
      }
      this.totalCount += bucket.events.length
    }
    while (this.totalCount > this.maxQueueSize) {
      this.dropOldest()
    }
  }

  private buildResourceAttributes(
    plugin: PluginInfo,
    env: EnvInfo,
    machineId: string
  ): OtlpAttribute[] {
    return toOtlpAttributes({
      "plugin.name": plugin.name,
      "plugin.version": plugin.version,
      machine_id: machineId,
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

  private toLogRecord(event: QueuedEvent): OtlpLogRecord {
    const severity = severityForEvent(event.eventName)
    const attrs: Record<string, unknown> = { "event.name": event.eventName, ...event.properties }
    return {
      timeUnixNano: event.timeUnixNano,
      severityNumber: severity.number,
      severityText: severity.text,
      body: { stringValue: event.eventName },
      attributes: toOtlpAttributes(attrs),
    }
  }
}

/**
 * Process-wide accessor. Stored on `globalThis` keyed by a `Symbol.for` so
 * HMR/ts-node reloads don't orphan the dispatcher mid-flight.
 *
 * First-writer-wins for configuration: subsequent calls with different
 * options are ignored (with a warning in verbose mode). Use the
 * `GORGO_TELEMETRY_ENDPOINT` env var to override centrally.
 */
export function getDispatcher(options?: DispatcherOptions): TelemetryDispatcher {
  const g = globalThis as Record<symbol, TelemetryDispatcher | undefined>
  let instance = g[DISPATCHER_KEY]
  if (!instance) {
    instance = new TelemetryDispatcher(options)
    g[DISPATCHER_KEY] = instance
  } else if (options && VERBOSE) {
    console.log("[gorgo/telemetry] dispatcher already initialized; ignoring new options")
  }
  return instance
}
