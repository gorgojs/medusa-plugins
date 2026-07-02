import crypto from "node:crypto"
import { getMachineId, isTelemetryEnabled, setTelemetryEnabled } from "./config-store.js"
import { collectEnvInfo, findPackageJson } from "./env.js"
import { maybeShowFirstRunNotice } from "./notice.js"
import { collectProjectInfo, type ProjectInfo } from "./project.js"
import {
  severityForEvent,
  toOtlpAttributes,
  type OtlpAttribute,
  type OtlpLogRecord,
  type OtlpLogsPayload,
} from "./otlp.js"
import type { EnvInfo, PackageInfo } from "./types.js"

const TELEMETRY_ENDPOINT = "https://telemetry.gorgojs.com"
const VERBOSE =
  process.env.GORGO_TELEMETRY_VERBOSE === "1" || process.env.GORGO_TELEMETRY_VERBOSE === "true"
const FALLBACK_SCOPE = { name: "@gorgo/telemetry", version: "0.0.0" }
const DISPATCHER_KEY = Symbol.for("@gorgo/telemetry/dispatcher@v1")

function getScope(): Promise<{ name: string; version: string }> {
  let scopePromise: Promise<{ name: string; version: string }> | undefined
  if (!scopePromise) {
    scopePromise = findPackageJson(__dirname)
      .then((pkg) => pkg ?? FALLBACK_SCOPE)
      .catch(() => FALLBACK_SCOPE)
  }
  return scopePromise
}

export interface DispatcherOptions {
  endpoint?: string
  flushAt?: number
  flushInterval?: number
  /** Hard cap on total queued events across all packages. Oldest are dropped on overflow. */
  maxQueueSize?: number
  /** Heartbeat interval for `plugin.ping` events (default 6h). Set to 0 to disable. */
  pingInterval?: number
}

const DEFAULT_PING_INTERVAL_MS = 6 * 60 * 60 * 1000
// const DEFAULT_PING_INTERVAL_MS = 3000  // 3s for testing

interface QueuedEvent {
  eventName: string
  /** Wall-clock nanoseconds, strictly monotonic across events on this dispatcher. */
  timeUnixNano: string
  properties: Record<string, unknown>
}

interface PackageBucket {
  pkg: PackageInfo
  events: QueuedEvent[]
}

function fallbackEnv(): EnvInfo {
  return {
    medusa_version: "0.0.0",
    node_version: process.version,
    os: process.platform,
    arch: process.arch,
    ci: false,
    container: false,
    node_env: process.env.NODE_ENV ?? "development",
    locale: "C",
    timezone: "UTC",
    package_manager: "unknown",
  }
}

/**
 * Process-wide singleton that owns the entire telemetry pipeline:
 * one queue per package (`Map<key, bucket>`), one timer, one HTTP request.
 *
 * `TelemetryClient` instances created by individual packages delegate
 * `enqueue`/`flush` here, so N packages produce a single OTLP batch with
 * `resourceLogs[]` containing one entry per package.
 */
export class TelemetryDispatcher {
  private readonly endpoint: string
  private readonly flushAt: number
  private readonly flushInterval: number
  private readonly maxQueueSize: number
  /** Single per-process session id shared by all packages on this dispatcher. */
  private readonly sessionId: string

  private buckets = new Map<string, PackageBucket>()
  private totalCount = 0
  private timer?: ReturnType<typeof setTimeout>

  private envCache?: EnvInfo
  private machineIdCache?: string
  private telemetryEnabledCache?: boolean
  private projectCache?: ProjectInfo | null

  private flushing = false
  private exitHandlersRegistered = false

  /** Monotonic wall-clock nanosecond cursor — bumped by 1 ns when collisions would occur. */
  private lastNano = 0n

  /** Packages that have created a TelemetryClient on this dispatcher. Used as the ping roster. */
  private registeredPackages = new Map<string, PackageInfo>()
  private readonly pingInterval: number
  private readonly startedAt = Date.now()
  private pingIndex = 0
  private pingTimer?: ReturnType<typeof setInterval>
  private firstFlush = true

  private nextTimeUnixNano(): string {
    const candidate = BigInt(Date.now()) * 1_000_000n
    this.lastNano = candidate > this.lastNano ? candidate : this.lastNano + 1n
    return this.lastNano.toString()
  }

  constructor(options: DispatcherOptions = {}) {
    this.endpoint = process.env.GORGO_TELEMETRY_ENDPOINT ?? options.endpoint ?? TELEMETRY_ENDPOINT
    this.flushAt = Math.max(options.flushAt ?? 20, 1)
    this.flushInterval = options.flushInterval ?? 10_000
    this.maxQueueSize = Math.max(options.maxQueueSize ?? 1000, 1)
    this.pingInterval = options.pingInterval ?? DEFAULT_PING_INTERVAL_MS
    this.sessionId = crypto.randomUUID()

    this.registerExitHandlers()
    maybeShowFirstRunNotice()
  }

  // ------------------------------------------------------------------
  // Caches (one disk read per process for each)
  // ------------------------------------------------------------------

  private async getEnvInfo(): Promise<EnvInfo> {
    if (!this.envCache) {
      try {
        this.envCache = await collectEnvInfo()
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

  private async getProjectInfoCached(): Promise<ProjectInfo | null> {
    if (this.projectCache === undefined) {
      try {
        const info = await collectProjectInfo()
        this.projectCache = info ?? null
      } catch (err) {
        if (VERBOSE) console.warn("[gorgo/telemetry] project info collection failed:", err)
        this.projectCache = null
      }
    }
    return this.projectCache
  }

  // ------------------------------------------------------------------
  // Public surface (used by TelemetryClient)
  // ------------------------------------------------------------------

  /**
   * Register a package so it receives `plugin.ping` heartbeats. Idempotent.
   * Called from the {@link TelemetryClient} constructor — even silent packages
   * (which never call `track`) must show up in the ping roster so that
   * "active install" metrics see them.
   */
  registerPackage(pkg: PackageInfo): void {
    try {
      const key = `${pkg.name}@${pkg.version}`
      if (this.registeredPackages.has(key)) return
      this.registeredPackages.set(key, pkg)
      this.armPingTimer()
    } catch (err) {
      if (VERBOSE) console.warn("[gorgo/telemetry] registerPackage failed:", err)
    }
  }

  private armPingTimer(): void {
    if (this.pingTimer || this.pingInterval <= 0) return
    this.pingTimer = setInterval(() => this.emitPing(), this.pingInterval)
    // Don't keep the process alive just for heartbeats.
    this.pingTimer.unref?.()
  }

  private emitPing(): void {
    try {
      this.pingIndex++
      const uptimeSeconds = Math.floor((Date.now() - this.startedAt) / 1000)
      for (const pkg of this.registeredPackages.values()) {
        this.enqueue(pkg, "plugin.ping", {
          uptime_seconds: uptimeSeconds,
          ping_index: this.pingIndex,
        })
      }
    } catch (err) {
      if (VERBOSE) console.warn("[gorgo/telemetry] emitPing failed:", err)
    }
  }

  enqueue(pkg: PackageInfo, eventName: string, properties: Record<string, unknown> = {}): void {
    try {
      if (!this.firstFlush && !this.isEnabledCached()) return

      const key = `${pkg.name}@${pkg.version}`
      let bucket = this.buckets.get(key)
      if (!bucket) {
        bucket = { pkg, events: [] }
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
          `[gorgo/telemetry] queued: ${eventName} for ${pkg.name} (total: ${this.totalCount})`
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

    if (!this.firstFlush && !this.isEnabledCached()) {
      this.buckets.clear()
      this.totalCount = 0
      return
    }

    this.flushing = true
    this.firstFlush = false

    // snapshot + reset state so concurrent enqueues don't clobber the in-flight batch
    const inflight = this.buckets
    const inflightCount = this.totalCount
    this.buckets = new Map()
    this.totalCount = 0

    try {
      const [env, scope, project] = await Promise.all([
        this.getEnvInfo(),
        getScope(),
        this.getProjectInfoCached(),
      ])
      const machineId = this.getMachineIdCached()

      const resourceLogs = Array.from(inflight.values()).map((bucket) => ({
        resource: {
          attributes: this.buildResourceAttributes(bucket.pkg, env, machineId, project),
        },
        scopeLogs: [
          {
            scope: { name: scope.name, version: scope.version },
            logRecords: bucket.events.map((e) => this.toLogRecord(e)),
          },
        ],
      }))

      const payload: OtlpLogsPayload = { resourceLogs }
      const url = `${this.endpoint}/batch`

      if (VERBOSE) {
        console.log(
          `[gorgo/telemetry] flushing ${inflightCount} event(s) across ${resourceLogs.length} package(s) to ${url}`
        )
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
    if (this.pingTimer) {
      clearInterval(this.pingTimer)
      this.pingTimer = undefined
    }
    this.buckets.clear()
    this.totalCount = 0
    this.envCache = undefined
    this.machineIdCache = undefined
    this.telemetryEnabledCache = undefined
    this.projectCache = undefined
    this.flushing = false
    this.registeredPackages.clear()
    this.pingIndex = 0
  }

  // ------------------------------------------------------------------
  // Internals
  // ------------------------------------------------------------------

  private registerExitHandlers(): void {
    if (this.exitHandlersRegistered) return
    this.exitHandlersRegistered = true

    process.once("beforeExit", () => {
      try {
        void this.flush()
      } catch {
        // never throw from a process exit handler
      }
    })
  }

  /** Drop one event from the largest bucket — the noisiest package gets pruned first. */
  private dropOldest(): void {
    let victim: PackageBucket | undefined
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
          `[gorgo/telemetry] queue full (cap=${this.maxQueueSize}); dropped oldest event from ${victim.pkg.name}`
        )
      }
    }
  }

  private requeue(inflight: Map<string, PackageBucket>): void {
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
    pkg: PackageInfo,
    env: EnvInfo,
    machineId: string,
    project: ProjectInfo | null
  ): OtlpAttribute[] {
    return toOtlpAttributes({
      "service.name": process.env.WORKER_MODE ?? "medusa",
      "package.name": pkg.name,
      "package.version": pkg.version,
      machine_id: machineId,
      session_id: this.sessionId,
      ...(project && { "project.id": project.id, "project.hash": project.hash }),
      "env.medusa_version": env.medusa_version,
      "env.node_version": env.node_version,
      "env.os": env.os,
      "env.arch": env.arch,
      "env.ci": env.ci,
      "env.container": env.container,
      "env.node_env": env.node_env,
      "env.locale": env.locale,
      "env.timezone": env.timezone,
      "env.package_manager": env.package_manager,
      "env.store_id": env.store_id ?? null,
      "env.admin_id": env.admin_id ?? null,
      "enabled": this.isEnabledCached(),
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
