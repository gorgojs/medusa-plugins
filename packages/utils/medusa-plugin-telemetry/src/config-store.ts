import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import crypto from "node:crypto"

const CONFIG_DIR = path.join(os.homedir(), ".gorgo")
const CONFIG_FILE = path.join(CONFIG_DIR, "telemetry.json")

interface Config {
  machine_id?: string
  enabled?: boolean
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

/** Returns the persistent anonymous machine ID, creating one if it doesn't exist yet. */
export function getMachineId(): string {
  const config = readConfig()
  if (config.machine_id) {
    return config.machine_id
  }
  const machineId = crypto.randomUUID()
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
