import { getDispatcher, type TelemetryDispatcher } from "./dispatcher.js"
import { findPackageJson } from "./env.js"
import type { PluginInfo, TelemetryClientOptions } from "./types.js"

const VERBOSE =
  process.env.GORGO_TELEMETRY_VERBOSE === "1" || process.env.GORGO_TELEMETRY_VERBOSE === "true"

const UNKNOWN_PLUGIN: PluginInfo = { name: "unknown", version: "0.0.0" }

/**
 * Resolve plugin identity from `packageDir` (preferred) or an explicit
 * `plugin` object. Never throws — falls back to a placeholder so a
 * misconfigured caller can't take down the host process.
 */
async function resolvePluginInfo(options: TelemetryClientOptions): Promise<PluginInfo> {
  try {
    if (options.packageDir) {
      const pkg = await findPackageJson(options.packageDir)
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
    if (VERBOSE) console.warn("[gorgo/telemetry] plugin info resolution failed:", err)
    return UNKNOWN_PLUGIN
  }
}

/**
 * Per-plugin facade over the process-wide {@link TelemetryDispatcher}.
 *
 * The client owns no queue or timer — it just carries the plugin's identity
 * (`name`, `version`) and forwards `track`/`flush` calls to the singleton
 * dispatcher. N plugin clients share one queue and emit a single OTLP batch
 * with `resourceLogs[]` per plugin.
 */
export class TelemetryClient {
  private pluginInfo: PluginInfo = UNKNOWN_PLUGIN
  private pluginInfoResolved = false
  private readonly pluginInfoReady: Promise<PluginInfo>
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
    // UNKNOWN_PLUGIN placeholder.
    this.pluginInfoReady = resolvePluginInfo(options).then((info) => {
      this.pluginInfo = info
      this.pluginInfoResolved = true
      this.dispatcher.registerPlugin(info)
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
   * If the plugin identity hasn't been resolved yet (first event after
   * construction, before the async `package.json` walk completes), the call
   * is buffered and dispatched once resolution lands. Callers that need the
   * resolved name *at the call site* should await {@link getPluginInfo} first.
   *
   * @param eventName Dot-separated event name, e.g. "payment.initiated"
   * @param properties Arbitrary extra data attached to the event
   */
  track(eventName: string, properties: Record<string, unknown> = {}): void {
    if (!this.pluginInfoResolved) {
      this.pendingTracks.push({ eventName, properties })
      return
    }
    this.dispatcher.enqueue(this.pluginInfo, eventName, properties)
  }

  /** Send all queued events (across all plugins) to the OTLP endpoint immediately. */
  async flush(): Promise<void> {
    await this.pluginInfoReady
    return this.dispatcher.flush()
  }

  /** The plugin info attached to every event emitted by this client. */
  getPluginInfo(): Promise<PluginInfo> {
    return this.pluginInfoReady
  }

  /** Enable or disable telemetry for this machine. Persisted to ~/.config/gorgo/config.json */
  setEnabled(enabled: boolean): void {
    this.dispatcher.setEnabled(enabled)
  }

  isEnabled(): boolean {
    return this.dispatcher.isEnabled()
  }
}
