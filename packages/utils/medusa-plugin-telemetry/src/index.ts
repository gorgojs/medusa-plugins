export { TelemetryClient } from "./client.js"
export {
  getMachineId,
  isTelemetryEnabled,
  setTelemetryEnabled,
  markPluginStarted,
} from "./config-store.js"
export { collectEnvInfo, findPackageJson } from "./env.js"
export type {
  PluginInfo,
  EnvInfo,
  TelemetryEvent,
  TelemetryClientOptions,
} from "./types.js"

import { TelemetryClient } from "./client.js"
import type { TelemetryClientOptions } from "./types.js"

/**
 * Create a server-side telemetry client for a Medusa plugin.
 *
 * Pass `packageDir: __dirname` to auto-discover the plugin's `name` + `version`
 * from the nearest `package.json`, or supply an explicit `plugin` object.
 *
 * @example
 * ```ts
 * import { createTelemetryClient } from "@gorgo/medusa-plugin-telemetry"
 *
 * const telemetry = createTelemetryClient({ packageDir: __dirname })
 * telemetry.track("plugin.started", { first_run: true, config_keys: ["terminalKey"] })
 * ```
 */
export function createTelemetryClient(options: TelemetryClientOptions): TelemetryClient {
  return new TelemetryClient(options)
}
