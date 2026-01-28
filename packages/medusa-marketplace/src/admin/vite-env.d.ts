/// <reference types="vite/client" />

declare module "virtual:gorgo/widgets" {
  type WidgetModule = {
    widgets: WidgetConfig[]
  }
  const widgetModule: WidgetModule
  export default widgetModule
}
