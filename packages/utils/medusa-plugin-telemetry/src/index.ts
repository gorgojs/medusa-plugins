export { TelemetryClient } from "./client.js"
export { getMachineId, isTelemetryEnabled, setTelemetryEnabled } from "./config-store.js"
export type {
  PluginInfo,
  OsInfo,
  TelemetryEvent,
  BrowserTelemetryEvent,
  TelemetryClientOptions,
} from "./types.js"

import { TelemetryClient } from "./client.js"
import type { TelemetryClientOptions } from "./types.js"

/**
 * Create a server-side telemetry client for a Medusa plugin.
 *
 * @example
 * ```ts
 * // In your plugin's module or job:
 * import { createTelemetryClient } from "@gorgo/medusa-plugin-telemetry"
 *
 * const telemetry = createTelemetryClient({
 *   plugin: "@gorgo/medusa-marketplace",
 *   version: "0.1.0",
 * })
 *
 * telemetry.track("sync.completed", { orders: 42, feature: "sync-orders" })
 * ```
 */
export function createTelemetryClient(options: TelemetryClientOptions): TelemetryClient {
  return new TelemetryClient(options)
}
