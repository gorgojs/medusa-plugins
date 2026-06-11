import {
  isTelemetryEnabled,
  markNotificationShown,
  wasNotificationShown,
} from "./config-store.js"

/**
 * Print a one-time notice informing the user that anonymous telemetry is
 * being collected by `@gorgo/medusa-*` plugins. Persists "notification_shown" flag to
 * `~/.config/gorgo/config.json` so it appears at most once per machine.
 *
 * Skipped when:
 *  - telemetry is disabled (env var or config),
 *  - the notice has already been shown,
 *  - the process runs under CI (would spam build logs).
 */
export function maybeShowFirstRunNotice(): void {
  try {
    if (!isTelemetryEnabled()) return
    if (wasNotificationShown()) return
    if (process.env.CI === "1" || process.env.CI === "true") return

    printNotice()
    markNotificationShown()
  } catch {
    // Telemetry must never crash the host — swallow any IO/printing error.
  }
}

function printNotice(): void {
  console.info()
  console.info("Gorgo collects anonymous telemetry to help improve Medusa plugins. To opt out, set `GORGO_DISABLE_TELEMETRY=true`.")
}
