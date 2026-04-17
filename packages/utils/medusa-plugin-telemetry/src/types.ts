export interface PluginInfo {
  /** Package name, e.g. "@gorgo/medusa-marketplace" */
  name: string
  /** Package version, e.g. "0.1.0" */
  version: string
  /** Specific feature being used, e.g. "sync-orders" */
  feature?: string
}

export interface OsInfo {
  node_version: string
  platform: string
  release: string
  arch: string
  is_ci: boolean
}

/** Event payload sent to the telemetry endpoint */
export interface TelemetryEvent {
  /** Unique event ID, prefixed with "te_" */
  id: string
  /** Event type, e.g. "button.click", "sync.completed" */
  type: string
  timestamp: string
  /** Persistent anonymous machine identifier */
  machine_id: string
  os_info: OsInfo
  medusa_version: string
  plugin: PluginInfo
  properties: Record<string, unknown>
}

/** Payload for browser-side events (no OS info) */
export interface BrowserTelemetryEvent {
  id: string
  type: string
  timestamp: string
  /** Browser session ID (ephemeral, non-persistent) */
  session_id: string
  plugin: PluginInfo
  properties: Record<string, unknown>
}

export interface TelemetryClientOptions {
  /** Plugin name or full PluginInfo object */
  plugin: PluginInfo | string
  /** Plugin version — used when plugin is a string */
  version?: string
  /** Default feature context for all events */
  feature?: string
  /** Override the telemetry endpoint (default: https://telemetry.gorgojs.com) */
  endpoint?: string
  /** Number of queued events before auto-flush (default: 20) */
  flushAt?: number
  /** Flush interval in ms (default: 30 000) */
  flushInterval?: number
}
