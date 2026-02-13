const MARKETPLACE_INJECTION_ZONES = [
  "marketplace.list.before",
  "marketplace.list.after",
  "marketplace.details.before",
  "marketplace.details.after",
  "marketplace.details.side.before",
  "marketplace.details.side.after"
] as const

const MARKETPLACE_EVENT_INJECTION_ZONES = [
  "marketplace_event.list.before",
  "marketplace_event.list.after",
  "marketplace_event.details.before",
  "marketplace_event.details.after",
  "marketplace_event.details.side.before",
  "marketplace_event.details.side.after"
] as const

/**
 * All valid injection zones in the admin panel. An injection zone is a specific place
 * in the admin panel where a plugin can inject custom widgets.
 */
export const INJECTION_ZONES = [
  ...MARKETPLACE_INJECTION_ZONES,
  ...MARKETPLACE_EVENT_INJECTION_ZONES
] as const
