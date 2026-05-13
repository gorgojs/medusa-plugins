export interface PluginInfo {
  /** Package name, e.g. "@gorgo/medusa-payment-tkassa" */
  name: string
  /** Package version, e.g. "0.1.0" */
  version: string
}

/** Environment fingerprint attached to every server-side event. */
export interface EnvInfo {
  medusa_version: string
  node_version: string
  /** `process.platform`, e.g. "linux" | "darwin" | "win32" */
  os: string
  /** `process.arch`, e.g. "x64" | "arm64" */
  arch: string
  ci: boolean
  docker: boolean
  /** "production" | "development" | "test" */
  node_env: string
  
  /** POSIX locale, e.g. "en_US.UTF-8" */
  locale: string
  /** IANA timezone, e.g. "Europe/Moscow" */
  timezone: string
  package_manager: "npm" | "yarn" | "pnpm" | "unknown"
}

/** Event payload sent from a Medusa server process. */
export interface TelemetryEvent {
  event: string
  /** ISO 8601 */
  timestamp: string
  /** Persistent anonymous machine identifier (sha256 hash). */
  machine_id: string
  /** Per-process UUID, regenerated on every server start. */
  session_id?: string
  plugin: PluginInfo
  env: EnvInfo
  properties?: Record<string, unknown>
}

export interface TelemetryClientOptions {
  /**
   * Walk up from this directory to find the nearest `package.json` and use
   * its `name` + `version`. Pass `__dirname` from the consuming plugin's
   * code. Mutually exclusive with `plugin`.
   */
  packageDir?: string
  /**
   * Explicit plugin identity. Mutually exclusive with `packageDir`.
   */
  plugin?: PluginInfo
  /** Override the telemetry endpoint (default: https://telemetry.gorgojs.com). */
  endpoint?: string
  /** Number of queued events before auto-flush (default: 20). */
  flushAt?: number
  /** Flush interval in ms (default: 30 000). */
  flushInterval?: number
}
