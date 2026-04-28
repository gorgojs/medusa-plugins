import {
  isTelemetryEnabled,
  markNotificationShown,
  wasNotificationShown,
} from "./config-store.js"

/**
 * Print a one-time notice informing the user that anonymous telemetry is
 * being collected by `@gorgo/medusa-*` plugins. Mirrors how `@medusajs/cli`
 * notifies users on first launch. Persists "shown" flag to
 * `~/.gorgo/telemetry.json` so it appears at most once per machine.
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
  const lines = [
    "Gorgo plugins collect anonymous telemetry to help improve your experience.",
    "No credentials, personal, or transactional data are sent.",
    "",
    "To opt out, set `GORGO_DISABLE_TELEMETRY=true`.",
  ]
  const width = Math.max(...lines.map((l) => l.length))
  const horizontal = "─".repeat(width + 2)

  console.log()
  console.log(`┌${horizontal}┐`)
  console.log(`│ ${" ".repeat(width)} │`)
  for (const line of lines) {
    console.log(`│ ${line.padEnd(width)} │`)
  }
  console.log(`│ ${" ".repeat(width)} │`)
  console.log(`└${horizontal}┘`)
  console.log()
}
