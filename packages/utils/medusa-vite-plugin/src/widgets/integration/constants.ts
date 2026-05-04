const INTEGRATION_INJECTION_ZONES = [
  "integration.list.before",
  "integration.list.after",
  "integration.details.before",
  "integration.details.after",
  "integration.details.side.before",
  "integration.details.side.after"
] as const

const INTEGRATION_EVENT_INJECTION_ZONES = [
  "integration_event.list.before",
  "integration_event.list.after",
  "integration_event.details.before",
  "integration_event.details.after",
  "integration_event.details.side.before",
  "integration_event.details.side.after"
] as const

/**
 * All valid injection zones in the admin panel. An injection zone is a specific place
 * in the admin panel where a plugin can inject custom widgets.
 */
export const INJECTION_ZONES = [
  ...INTEGRATION_INJECTION_ZONES,
  ...INTEGRATION_EVENT_INJECTION_ZONES
] as const
