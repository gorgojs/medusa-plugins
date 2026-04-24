import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import crypto from "node:crypto"

const CONFIG_DIR = path.join(os.homedir(), ".gorgo")
const CONFIG_FILE = path.join(CONFIG_DIR, "telemetry.json")

interface Config {
  machine_id?: string
  enabled?: boolean
  plugins_seen?: string[]
}

function readConfig(): Config {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8")) as Config
    }
  } catch {
    // ignore read errors
  }
  return {}
}

function writeConfig(config: Config): void {
  try {
    if (!fs.existsSync(CONFIG_DIR)) {
      fs.mkdirSync(CONFIG_DIR, { recursive: true })
    }
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), "utf-8")
  } catch {
    // ignore write errors — telemetry must never crash the app
  }
}

/**
 * Returns the persistent anonymous machine ID, creating one if missing.
 * Per EVENTS.md the identifier is a sha256 hash, produced here from 32
 * random bytes — plenty of entropy, no reversible machine fingerprint.
 */
export function getMachineId(): string {
  const config = readConfig()
  if (config.machine_id) {
    return config.machine_id
  }
  const machineId = crypto.createHash("sha256").update(crypto.randomBytes(32)).digest("hex")
  writeConfig({ ...config, machine_id: machineId })
  return machineId
}

/** Returns true unless telemetry is explicitly disabled via env var or config file. */
export function isTelemetryEnabled(): boolean {
  if (
    process.env.GORGO_DISABLE_TELEMETRY === "1" ||
    process.env.GORGO_DISABLE_TELEMETRY === "true" ||
    process.env.MEDUSA_DISABLE_TELEMETRY === "1" ||
    process.env.MEDUSA_DISABLE_TELEMETRY === "true"
  ) {
    return false
  }
  const config = readConfig()
  // Default to enabled unless explicitly set to false
  return config.enabled !== false
}

/** Persists the telemetry enabled/disabled preference. */
export function setTelemetryEnabled(enabled: boolean): void {
  const config = readConfig()
  writeConfig({ ...config, enabled })
}

/**
 * Mark a plugin as started for this machine. Returns `true` if this is the
 * first start ever recorded for that plugin — used by the `plugin.started`
 * event to set `first_run`.
 */
export function markPluginStarted(pluginName: string): boolean {
  const config = readConfig()
  const seen = new Set(config.plugins_seen ?? [])
  if (seen.has(pluginName)) return false
  seen.add(pluginName)
  writeConfig({ ...config, plugins_seen: Array.from(seen) })
  return true
}
