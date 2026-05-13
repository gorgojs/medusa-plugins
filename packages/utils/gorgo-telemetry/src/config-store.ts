import crypto from "node:crypto"
import Configstore from "configstore"

const VERBOSE =
  process.env.GORGO_TELEMETRY_VERBOSE === "1" || process.env.GORGO_TELEMETRY_VERBOSE === "true"

let instance_: Configstore | undefined

function getStore(): Configstore {
  if (!instance_) {
    // `globalConfigPath: true` → ~/.config/gorgo/config.json.
    instance_ = new Configstore("gorgo", {}, { globalConfigPath: true })
  }
  return instance_
}

/** True when the user has opted out via env var. Sync, no disk access. */
export function isTelemetryDisabledByEnv(): boolean {
  return (
    process.env.GORGO_DISABLE_TELEMETRY === "1" ||
    process.env.GORGO_DISABLE_TELEMETRY === "true"
  )
}

/**
 * Returns the persistent anonymous machine ID, creating one if missing.
 * Per event the identifier is a sha256 hash, produced here from 32
 * random bytes — plenty of entropy, no reversible machine fingerprint.
 */
export function getMachineId(): string {
  try {
    const cs = getStore()
    let id = cs.get("machine_id") as string | undefined
    if (typeof id !== "string") {
      id = crypto.createHash("sha256").update(crypto.randomBytes(32)).digest("hex")
      cs.set("machine_id", id)
    }
    return id
  } catch (err) {
    if (VERBOSE) console.warn("[gorgo/telemetry] getMachineId failed:", err)
    return ""
  }
}

/** Returns true unless telemetry is explicitly disabled via env var or config file. */
export function isTelemetryEnabled(): boolean {
  if (isTelemetryDisabledByEnv()) return false
  try {
    return getStore().get("enabled") !== false
  } catch (err) {
    if (VERBOSE) console.warn("[gorgo/telemetry] isTelemetryEnabled failed:", err)
    return true
  }
}

/** Persists the telemetry enabled/disabled preference. */
export function setTelemetryEnabled(enabled: boolean): void {
  try {
    getStore().set("enabled", enabled)
  } catch (err) {
    if (VERBOSE) console.warn("[gorgo/telemetry] setTelemetryEnabled failed:", err)
  }
}

/** Whether the first-run telemetry notice has already been printed on this machine. */
export function wasNotificationShown(): boolean {
  try {
    return getStore().get("notification_shown") === true
  } catch (err) {
    if (VERBOSE) console.warn("[gorgo/telemetry] wasNotificationShown failed:", err)
    return true
  }
}

/** Persist the fact that the first-run telemetry notice has been printed. */
export function markNotificationShown(): void {
  try {
    getStore().set("notification_shown", true)
  } catch (err) {
    if (VERBOSE) console.warn("[gorgo/telemetry] markNotificationShown failed:", err)
  }
}
