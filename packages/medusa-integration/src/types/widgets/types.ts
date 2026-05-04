import { INJECTION_ZONES } from "./constants"

export type IntegrationInjectionZone = (typeof INJECTION_ZONES)[number]

export type WidgetConfig = {
  Component: () => JSX.Element
  zone: IntegrationInjectionZone[]
}


