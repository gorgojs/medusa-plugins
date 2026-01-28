import { Plugin } from "vite"

const MARKETPLACE_INJECTION_ZONES = ["settings.marketplaces.list.before", "settings.marketplaces.list.after"]

export type MarketplaceInjectionZone = (typeof MARKETPLACE_INJECTION_ZONES)[number]

/**
 * Validates that the provided zone is a valid injection zone for a widget.
 */
export function isValidInjectionZone(zone: string) {
  return MARKETPLACE_INJECTION_ZONES.includes(zone)
}

export interface GorgoVitePluginOptions {
  sources?: string[]
  pluginMode?: boolean
}

export type GorgoVitePlugin = (config?: GorgoVitePluginOptions) => Plugin
