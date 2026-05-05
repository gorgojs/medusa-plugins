import React, { PropsWithChildren, createContext, useContext, useMemo } from "react"
import widgetModule from "virtual:gorgo/widgets"
import { IntegrationInjectionZone, WidgetConfig } from "../../types"

type WidgetApi = {
  getWidgets: (zone: IntegrationInjectionZone) => React.ComponentType<any>[]
}

const WidgetContext = createContext<WidgetApi | null>(null)

export const useWidgets = () => {
  const context = useContext(WidgetContext)
  if (!context) throw new Error("useWidgets must be used within an ExtensionProvider")
  return context
}

function buildWidgetMap(widgetConfigs: WidgetConfig[] = []) {
  const map = new Map<IntegrationInjectionZone, React.ComponentType<any>[]>()
  widgetConfigs.forEach((cfg) => {
    (cfg.zone || []).forEach((zone) => {
      const list = map.get(zone)
      if (!list) map.set(zone, [cfg.Component])
      else list.push(cfg.Component)
    })
  })
  return map
}

export function WidgetProvider({ children }: PropsWithChildren<{}>) {
  const widgetMap = useMemo(() => buildWidgetMap(widgetModule.widgets), [widgetModule.widgets])

  const api = useMemo<WidgetApi>(() => {
    return {
      getWidgets: (zone: IntegrationInjectionZone) => widgetMap.get(zone) || [],
    }
  }, [widgetMap])

  return <WidgetContext.Provider value={api}>{children}</WidgetContext.Provider>
}
