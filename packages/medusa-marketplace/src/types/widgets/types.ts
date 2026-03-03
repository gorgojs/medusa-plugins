import { INJECTION_ZONES } from "./constants"

export type MarketplaceInjectionZone = (typeof INJECTION_ZONES)[number]

export type WidgetConfig = {
    Component: () => JSX.Element
    zone: MarketplaceInjectionZone[]
}


