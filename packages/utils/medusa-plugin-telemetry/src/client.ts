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
  private readonly pluginInfo: PluginInfo
  private readonly dispatcher: TelemetryDispatcher

  constructor(options: TelemetryClientOptions) {
    this.pluginInfo = resolvePluginInfo(options)
    this.dispatcher = getDispatcher({
      endpoint: options.endpoint,
      flushAt: options.flushAt,
      flushInterval: options.flushInterval,
    })
    this.dispatcher.registerPlugin(this.pluginInfo)
  }

  /**
   * Track a server-side event. Delegates to the shared dispatcher; errors
   * are swallowed inside the dispatcher so this never throws.
   *
   * @param eventName Dot-separated event name, e.g. "payment.initiated"
   * @param properties Arbitrary extra data attached to the event
   */
  track(eventName: string, properties: Record<string, unknown> = {}): void {
    this.dispatcher.enqueue(this.pluginInfo, eventName, properties)
  }

  /** Send all queued events (across all plugins) to the OTLP endpoint immediately. */
  flush(): Promise<void> {
    return this.dispatcher.flush()
  }

  /** The plugin info attached to every event emitted by this client. */
  getPluginInfo(): PluginInfo {
    return this.pluginInfo
  }

  /** Enable or disable telemetry for this machine. Persisted to ~/.gorgo/telemetry.json */
  setEnabled(enabled: boolean): void {
    this.dispatcher.setEnabled(enabled)
  }

  isEnabled(): boolean {
    return this.dispatcher.isEnabled()
  }
}
