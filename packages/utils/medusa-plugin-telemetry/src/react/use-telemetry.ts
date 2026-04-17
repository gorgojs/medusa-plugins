import { useCallback, useRef } from "react"
import type { BrowserTelemetryEvent, PluginInfo } from "../types.js"

const TELEMETRY_ENDPOINT = "https://telemetry.gorgojs.com"

// import.meta.env is injected by Vite at build time; fall back to false in non-Vite environments
const VERBOSE: boolean = (() => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const env = (import.meta as any).env ?? {}
    return env.VITE_GORGO_TELEMETRY_VERBOSE === "true" || env.VITE_GORGO_TELEMETRY_VERBOSE === "1"
  } catch {
    return false
  }
})()

export interface UseTelemetryOptions {
  /** Plugin package name, e.g. "@gorgo/medusa-marketplace" */
  plugin: string
  /** Plugin version, e.g. "0.1.0" */
  version: string
  /** Active feature context for events sent via this hook instance */
  feature?: string
  /** Override the telemetry endpoint */
  endpoint?: string
}

export interface UseTelemetryReturn {
  /**
   * Track an admin button click.
   *
   * @param buttonName  Human-readable button identifier, e.g. "add-marketplace"
   * @param properties  Optional extra data
   */
  trackButtonClick(buttonName: string, properties?: Record<string, unknown>): void

  /**
   * Track a generic admin UI event.
   *
   * @param eventType   Dot-separated event name, e.g. "modal.opened"
   * @param properties  Optional extra data
   */
  trackEvent(eventType: string, properties?: Record<string, unknown>): void
}

/** Returns a short random ID for the current browser session. */
function getSessionId(): string {
  if (typeof window === "undefined") return "ssr"
  const KEY = "__gorgo_sid__"
  let id = sessionStorage.getItem(KEY)
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem(KEY, id)
  }
  return id
}

/**
 * React hook for tracking admin UI events in Medusa plugins.
 *
 * Events are sent directly to the telemetry endpoint via `fetch`.
 * Errors are silently swallowed so telemetry never disrupts the UI.
 *
 * @example
 * ```tsx
 * import { useTelemetry } from "@gorgo/medusa-plugin-telemetry/react"
 *
 * const AddMarketplaceButton = () => {
 *   const { trackButtonClick } = useTelemetry({
 *     plugin: "@gorgo/medusa-marketplace",
 *     version: "0.1.0",
 *     feature: "marketplace-list",
 *   })
 *
 *   return (
 *     <Button onClick={() => {
 *       trackButtonClick("add-marketplace")
 *       // ... actual logic
 *     }}>
 *       Add marketplace
 *     </Button>
 *   )
 * }
 * ```
 */
export function useTelemetry(options: UseTelemetryOptions): UseTelemetryReturn {
  // Use a ref so the stable callbacks don't need to re-create on option changes
  const optionsRef = useRef(options)
  optionsRef.current = options

  const send = useCallback((eventType: string, properties: Record<string, unknown>) => {
    const { plugin, version, feature, endpoint = TELEMETRY_ENDPOINT } = optionsRef.current

    const pluginInfo: PluginInfo = { name: plugin, version, feature }

    const event: BrowserTelemetryEvent = {
      id: `te_${crypto.randomUUID()}`,
      type: eventType,
      timestamp: new Date().toISOString(),
      session_id: getSessionId(),
      plugin: pluginInfo,
      properties,
    }

    if (VERBOSE) {
      console.log("[gorgo/telemetry]", eventType, event)
    }

    // Fire-and-forget; keepalive ensures the request completes even if the
    // user navigates away immediately after clicking.
    void fetch(`${endpoint}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ events: [event] }),
      keepalive: true,
    }).catch((err) => {
      if (VERBOSE) console.error("[gorgo/telemetry] send failed:", err)
    })
  }, [])

  const trackButtonClick = useCallback(
    (buttonName: string, properties?: Record<string, unknown>) => {
      send("button.click", { button: buttonName, ...properties })
    },
    [send]
  )

  const trackEvent = useCallback(
    (eventType: string, properties?: Record<string, unknown>) => {
      send(eventType, properties ?? {})
    },
    [send]
  )

  return { trackButtonClick, trackEvent }
}
