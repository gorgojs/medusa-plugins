import { getDispatcher, type TelemetryDispatcher } from "./dispatcher.js"
import { findPackageJson } from "./env.js"
import type { PackageInfo, TelemetryClientOptions } from "./types.js"

const VERBOSE =
  process.env.GORGO_TELEMETRY_VERBOSE === "1" || process.env.GORGO_TELEMETRY_VERBOSE === "true"

const UNKNOWN_PACKAGE: PackageInfo = { name: "unknown", version: "0.0.0" }

/**
 * Resolve package identity from `packageDir` (preferred) or an explicit
 * `package` object. Never throws — falls back to a placeholder so a
 * misconfigured caller can't take down the host process.
 */
async function resolvePackageInfo(options: TelemetryClientOptions): Promise<PackageInfo> {
  try {
    if (options.packageDir) {
      const pkg = await findPackageJson(options.packageDir)
      if (pkg) return pkg
      if (VERBOSE) {
        console.warn(
          `[gorgo/telemetry] no package.json found walking up from ${options.packageDir}; using placeholder identity`
        )
      }
      return UNKNOWN_PACKAGE
    }
    if (options.package?.name && options.package?.version) {
      return { name: options.package.name, version: options.package.version }
    }
    if (VERBOSE) {
      console.warn(
        "[gorgo/telemetry] neither `packageDir` nor `package` provided; using placeholder identity"
      )
    }
    return UNKNOWN_PACKAGE
  } catch (err) {
    if (VERBOSE) console.warn("[gorgo/telemetry] package info resolution failed:", err)
    return UNKNOWN_PACKAGE
  }
}

/**
 * Per-package facade over the process-wide {@link TelemetryDispatcher}.
 *
 * The client owns no queue or timer — it just carries the package's identity
 * (`name`, `version`) and forwards `track`/`flush` calls to the singleton
 * dispatcher. N package clients share one queue and emit a single OTLP batch
 * with `resourceLogs[]` per package.
 */
export class TelemetryClient {
  private pkgInfo: PackageInfo = UNKNOWN_PACKAGE
  private pkgInfoResolved = false
  private readonly pkgInfoReady: Promise<PackageInfo>
  private pendingTracks: Array<{ eventName: string; properties: Record<string, unknown> }> = []
  private readonly dispatcher: TelemetryDispatcher

  constructor(options: TelemetryClientOptions) {
    this.dispatcher = getDispatcher({
      endpoint: options.endpoint,
      flushAt: options.flushAt,
      flushInterval: options.flushInterval,
    })
    // Resolution walks up package.json asynchronously; until it lands, track()
    // calls are buffered and replayed in order so we never tag events with the
    // UNKNOWN_PACKAGE placeholder.
    this.pkgInfoReady = resolvePackageInfo(options).then((info) => {
      this.pkgInfo = info
      this.pkgInfoResolved = true
      this.dispatcher.registerPackage(info)
      for (const t of this.pendingTracks) {
        this.dispatcher.enqueue(info, t.eventName, t.properties)
      }
      this.pendingTracks = []
      return info
    })
  }

  /**
   * Track a server-side event. Delegates to the shared dispatcher; errors
   * are swallowed inside the dispatcher so this never throws.
   *
   * If the package identity hasn't been resolved yet (first event after
   * construction, before the async `package.json` walk completes), the call
   * is buffered and dispatched once resolution lands. Callers that need the
   * resolved name *at the call site* should await {@link getPackageInfo} first.
   *
   * @param eventName Dot-separated event name, e.g. "payment.initiated"
   * @param properties Arbitrary extra data attached to the event
   */
  track(eventName: string, properties: Record<string, unknown> = {}): void {
    if (!this.pkgInfoResolved) {
      this.pendingTracks.push({ eventName, properties })
      return
    }
    this.dispatcher.enqueue(this.pkgInfo, eventName, properties)
  }

  /** Send all queued events (across all packages) to the OTLP endpoint immediately. */
  async flush(): Promise<void> {
    await this.pkgInfoReady
    return this.dispatcher.flush()
  }

  /** The package info attached to every event emitted by this client. */
  getPackageInfo(): Promise<PackageInfo> {
    return this.pkgInfoReady
  }

  /** Enable or disable telemetry for this machine. Persisted to ~/.config/gorgo/config.json */
  setEnabled(enabled: boolean): void {
    this.dispatcher.setEnabled(enabled)
  }

  isEnabled(): boolean {
    return this.dispatcher.isEnabled()
  }
}
