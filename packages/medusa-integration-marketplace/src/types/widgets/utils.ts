import { INJECTION_ZONES } from "./constants"
import { IntegrationInjectionZone } from "./types"

/**
 * Validates that the provided zone is a valid injection zone for a widget.
 */
export function isValidInjectionZone(zone: any): zone is IntegrationInjectionZone {
  return INJECTION_ZONES.includes(zone)
}
