import { IntegrationInjectionZone, isValidInjectionZone } from "./integration"
import fs from "fs/promises"
import {
  File,
  isArrayExpression,
  isStringLiteral,
  isTemplateLiteral,
  Node,
  parse,
  ParseResult,
  traverse,
} from "../babel"
import { getParserOptions, hasDefaultExport, normalizePath } from "../utils"
import { getWidgetFilesFromSourcesWithProvider, transformPath } from "./helpers"

type WidgetConfig = {
  Component: string
  zone: IntegrationInjectionZone[]
  provider?: string
}

type ParsedWidgetConfig = {
  import: string
  widget: WidgetConfig
}

export async function generateWidgets(sources: Set<string>) {
  const sourceGroups = await getWidgetFilesFromSourcesWithProvider(sources)

  // Flatten into {file, provider} pairs preserving per-source provider
  const fileEntries = sourceGroups.flatMap(({ files, provider }) =>
    files.map((file) => ({ file, provider }))
  )

  const results = await getWidgetResults(fileEntries)

  const imports = results.map((r) => r.import)
  const code = generateCode(results)

  return {
    imports,
    code,
  }
}

async function getWidgetResults(
  entries: { file: string; provider?: string }[]
): Promise<ParsedWidgetConfig[]> {
  return (
    await Promise.all(entries.map(({ file, provider }, index) => parseFile(file, index, provider)))
  ).filter((r) => r !== null) as ParsedWidgetConfig[]
}

function generateCode(results: ParsedWidgetConfig[]): string {
  return `
    widgets: [
      ${results.map((r) => formatWidget(r.widget)).join(",\n")}
    ]
  `
}

function formatWidget(widget: WidgetConfig): string {
  const providerPart = widget.provider ? `,\n        provider: "${widget.provider}"` : ""
  return `
    {
        Component: ${widget.Component},
        zone: [${widget.zone.map((z) => `"${z}"`).join(", ")}]${providerPart}
    }
  `
}

async function parseFile(
  file: string,
  index: number,
  provider?: string
): Promise<ParsedWidgetConfig | null> {
  const code = await fs.readFile(file, "utf-8")
  let ast: ParseResult<File>

  try {
    ast = parse(code, getParserOptions(file))
  } catch (e) {
    console.log(`An error occurred while parsing the file.`, {
      file,
      error: e,
    })
    return null
  }

  let fileHasDefaultExport = false

  try {
    fileHasDefaultExport = await hasDefaultExport(ast)
  } catch (e) {
    console.log(`An error occurred while checking for a default export.`, {
      file,
      error: e,
    })
    return null
  }

  if (!fileHasDefaultExport) {
    return null
  }

  let zone: IntegrationInjectionZone[] | null

  try {
    zone = await getWidgetZone(ast, file)
  } catch (e) {
    console.log(`An error occurred while traversing the file.`, {
      file,
      error: e,
    })
    return null
  }

  if (!zone) {
    console.log(`'zone' property is missing from the widget config.`, { file })
    return null
  }

  console.log("Widget loaded: ", file)

  const import_ = generateImport(file, index)
  const widget = generateWidget(zone, index, provider)

  return {
    widget,
    import: import_,
  }
}

function generateWidgetComponentName(index: number): string {
  return `WidgetComponent${index}`
}

function generateWidgetConfigName(index: number): string {
  return `WidgetConfig${index}`
}

function generateImport(file: string, index: number): string {
  const path = normalizePath(transformPath(file))
  return `import ${generateWidgetComponentName(
    index
  )}, { config as ${generateWidgetConfigName(index)} } from "${path}"`
}

function generateWidget(zone: IntegrationInjectionZone[], index: number, provider?: string): WidgetConfig {
  return {
    Component: generateWidgetComponentName(index),
    zone: zone,
    provider,
  }
}

async function getWidgetZone(
  ast: ParseResult<File>,
  file: string
): Promise<IntegrationInjectionZone[] | null> {
  const zones: string[] = []

  /**
   * We need to keep track of whether we have found a zone in the file.
   * This is to avoid processing the same config both using the `ExportNamedDeclaration`
   * and `VariableDeclarator` paths, which would be the case for the unbundled files.
   */
  let zoneFound = false

  traverse(ast, {
    /**
     * In case we are processing a bundled file, the `config` will most likely
     * not be a named export. Instead we look for a `VariableDeclaration` named
     * `config` and extract the `zone` property from it.
     */
    VariableDeclarator(path) {
      if (zoneFound) {
        return
      }

      if (
        path.node.id.type === "Identifier" &&
        path.node.id.name === "config" &&
        path.node.init?.type === "ObjectExpression"
      ) {
        const arg = path.node.init
        if (arg?.type === "ObjectExpression") {
          const zoneProperty = arg.properties.find(
            (p: any) => p.type === "ObjectProperty" && p.key.name === "zone"
          )
          if (zoneProperty?.type === "ObjectProperty") {
            extractZoneValues(zoneProperty.value, zones, file)
            zoneFound = true
          }
        }
      }
    },
    /**
     * For unbundled files, the `config` will always be a named export.
     */
    ExportNamedDeclaration(path) {
      if (zoneFound) {
        return
      }

      const declaration = path.node.declaration
      if (
        declaration?.type === "VariableDeclaration" &&
        declaration.declarations[0]?.type === "VariableDeclarator" &&
        declaration.declarations[0].id.type === "Identifier" &&
        declaration.declarations[0].id.name === "config" &&
        declaration.declarations[0].init?.type === "CallExpression"
      ) {
        const arg = declaration.declarations[0].init.arguments[0]
        if (arg?.type === "ObjectExpression") {
          const zoneProperty = arg.properties.find(
            (p: any) => p.type === "ObjectProperty" && p.key.name === "zone"
          )
          if (zoneProperty?.type === "ObjectProperty") {
            extractZoneValues(zoneProperty.value, zones, file)
            zoneFound = true
          }
        }
      }
    }, AssignmentExpression(path) {
      if (zoneFound) {
        return
      }

      const left = path.node.left
      if (
        left.type === "MemberExpression" &&
        left.object.type === "Identifier" &&
        left.object.name === "exports" &&
        left.property.type === "Identifier" &&
        left.property.name === "config"
      ) {
        const right = path.node.right
        if (right.type === "ObjectExpression") {
          const zoneProperty = right.properties.find(
            (p: any) => p.type === "ObjectProperty" && p.key.name === "zone"
          )
          if (zoneProperty?.type === "ObjectProperty") {
            extractZoneValues(zoneProperty.value, zones, file)
            zoneFound = true
          }
        }
      }
    }
  })

  if (!zoneFound) {
    console.log(`'zone' property is missing from the widget config.`, { file })
    return null
  }

  const validatedZones = zones.filter(isValidInjectionZone)

  if (validatedZones.length === 0) {
    console.log(`'zone' property is not a valid injection zone.`, {
      file,
    })
    return null
  }

  return validatedZones as IntegrationInjectionZone[]
}

function extractZoneValues(value: Node, zones: string[], file: string) {
  if (isTemplateLiteral(value)) {
    console.log(
      `'zone' property cannot be a template literal (e.g. \`product.details.after\`).`,
      { file }
    )
    return
  }

  if (isStringLiteral(value)) {
    zones.push(value.value)
  } else if (isArrayExpression(value)) {
    const values = value.elements
      .filter((e) => isStringLiteral(e))
      .map((e) => e.value)
    zones.push(...values)
  } else {
    console.log(`'zone' property is not a string or array.`, { file })
    return
  }
}
