import { INJECTION_ZONES } from "./constants"
import { MarketplaceInjectionZone } from "./types"

/**
 * Validates that the provided zone is a valid injection zone for a widget.
 */
export function isValidInjectionZone(zone: any): zone is MarketplaceInjectionZone {
  return INJECTION_ZONES.includes(zone)
}
