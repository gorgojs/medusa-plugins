import { MarketplaceInjectionZone, WidgetConfig } from "../../../types"
import * as widgets from "../widgets"

type WidgetMap = Map<MarketplaceInjectionZone, React.ComponentType[]>

export class WidgetsApp {
  private widgets: WidgetMap

  constructor() {
    this.widgets = new Map<MarketplaceInjectionZone, React.ComponentType[]>()
  }

  registerWidgets(widgetConfigs: WidgetConfig[]) {
    widgetConfigs.forEach((config) => {
      if (!this.widgets.has(config.zone))
        this.widgets.set(config.zone, [])
      this.widgets.get(config.zone)!.push(config.component)
    })
  }

  getWidgets(zone: MarketplaceInjectionZone) {
    return this.widgets.get(zone) || []
  }

  get api() {
    return {
      getWidgets: this.getWidgets.bind(this)
    }
  }
}

const widgetsAppInstance = new WidgetsApp()
widgetsAppInstance.registerWidgets(Object.values(widgets) as WidgetConfig[])

export { widgetsAppInstance }
