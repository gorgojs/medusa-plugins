import { useCallback, useRef } from "react"
import {
  severityForEvent,
  toOtlpAttributes,
  type OtlpLogsPayload,
} from "../otlp.js"

const TELEMETRY_ENDPOINT = "https://telemetry.gorgojs.com"
const SCOPE_NAME = "gorgo.telemetry"
const SCOPE_VERSION = "0.1.0"

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
  /** Plugin package name, e.g. "@gorgo/medusa-payment-tkassa" */
  plugin: string
  /** Plugin version, e.g. "0.1.0" */
  version: string
  /** Override the telemetry endpoint */
  endpoint?: string
}

export interface UseTelemetryReturn {
  /**
   * Track a button click. Emits the `button.click` event with
   * `{ name, location, ...properties }`.
   */
  trackButtonClick(
    name: string,
    location: string,
    properties?: Record<string, unknown>
  ): void

  /** Track an arbitrary admin UI event. */
  trackEvent(eventName: string, properties?: Record<string, unknown>): void
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
 * Fire-and-forget; errors are swallowed so telemetry never disrupts the UI.
 */
export function useTelemetry(options: UseTelemetryOptions): UseTelemetryReturn {
  const optionsRef = useRef(options)
  optionsRef.current = options

  const send = useCallback((eventName: string, properties: Record<string, unknown>) => {
    const { plugin, version, endpoint = TELEMETRY_ENDPOINT } = optionsRef.current
    const severity = severityForEvent(eventName)

    const payload: OtlpLogsPayload = {
      resourceLogs: [
        {
          resource: {
            attributes: toOtlpAttributes({
              "plugin.name": plugin,
              "plugin.version": version,
              session_id: getSessionId(),
            }),
          },
          scopeLogs: [
            {
              scope: { name: SCOPE_NAME, version: SCOPE_VERSION },
              logRecords: [
                {
                  timeUnixNano: `${Date.now()}000000`,
                  severityNumber: severity.number,
                  severityText: severity.text,
                  attributes: toOtlpAttributes({ "event.name": eventName, ...properties }),
                },
              ],
            },
          ],
        },
      ],
    }

    if (VERBOSE) {
      console.log("[gorgo/telemetry]", eventName, payload)
    }

    void fetch(`${endpoint}/batch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch((err) => {
      if (VERBOSE) console.error("[gorgo/telemetry] send failed:", err)
    })
  }, [])

  const trackButtonClick = useCallback(
    (name: string, location: string, properties?: Record<string, unknown>) => {
      send("button.click", { name, location, ...properties })
    },
    [send]
  )

  const trackEvent = useCallback(
    (eventName: string, properties?: Record<string, unknown>) => {
      send(eventName, properties ?? {})
    },
    [send]
  )

  return { trackButtonClick, trackEvent }
}
