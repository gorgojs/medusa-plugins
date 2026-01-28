import { MarketplaceInjectionZone, WidgetConfig } from "../../../types"
import { ExtensionProvider } from "../extension-provider"

type WidgetModule = {
  widgets: WidgetConfig[]
}

type WidgetMap = Map<MarketplaceInjectionZone, React.ComponentType[]>

class ExtensionApp {
  private widgets: WidgetMap

  constructor(widgetModule: WidgetModule) {
    this.widgets = new Map<MarketplaceInjectionZone, React.ComponentType[]>()
    this.registerWidgets(widgetModule.widgets)
  }

  registerWidgets(widgetConfigs: WidgetConfig[]) {
    console.log("Widget configs: ", widgetConfigs)
    widgetConfigs.forEach((config) => {
      const zone = config.zone[0]
      if (!this.widgets.has(zone))
        this.widgets.set(zone, [])
      this.widgets.get(zone)!.push(config.Component)
      console.log(`(${zone}): `, this.widgets.get(zone))
    })
  }

  getWidgets(zone: MarketplaceInjectionZone) {
    console.log("Widgets: ", this.widgets)
    return this.widgets.get(zone) || []
  }

  get api() {
    return {
      getWidgets: this.getWidgets.bind(this)
    }
  }

  render(children: React.ReactNode) {

    return (
      <ExtensionProvider api={this.api}>
        {children}
      </ExtensionProvider>
    )
  }
}

export default ExtensionApp
