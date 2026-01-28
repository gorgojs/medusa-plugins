import widgetModule from "virtual:gorgo/widgets"
import ExtensionApp from "./extension-app"
import { PropsWithChildren } from "react"


function AppExtension({ children }: PropsWithChildren) {
  // const widgetModule = { widgets: [] }
  console.log("Widgets Module: ", widgetModule)
  const app = new ExtensionApp(widgetModule)

  return <div>{app.render(children)}</div>
}

export default AppExtension
