import outdent from "outdent"
import { generateModule } from "../utils"
import { generateWidgets } from "../widgets"

export async function generateVirtualWidgetModule(
  sources: Set<string>,
  pluginMode = false
) {
  const widgets = await generateWidgets(sources)

  const imports = [...widgets.imports]

  const code = `
    ${imports.join("\n")}

    ${
      pluginMode
        ? `const widgetModule = { ${widgets.code} }`
        : `export default { ${widgets.code} }`
    }
  `

  return generateModule(code)
}
