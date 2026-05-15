import fs from "fs/promises"
import path from "path"
import {
  File,
  isStringLiteral,
  parse,
  ParseResult,
  traverse,
} from "../babel"
import { crawl, getParserOptions } from "../utils"

export async function getWidgetFilesFromSources(
  sources: Set<string>
): Promise<string[]> {
  return (
    await Promise.all(
      Array.from(sources).map(async (source) => crawl(
        // TODO: test on windows and production build
        `./node_modules/${source}/.medusa/server/src/gorgo-widgets`
      ))
    )
  ).flat()
}

export type SourceWidgetGroup = {
  source: string
  files: string[]
  provider?: string
}

/**
 * Crawls gorgo-widgets for each source and reads the provider identifier
 * from the package's `gorgo-widgets/index.js` if it exports `provider`.
 */
export async function getWidgetFilesFromSourcesWithProvider(
  sources: Set<string>
): Promise<SourceWidgetGroup[]> {
  return Promise.all(
    Array.from(sources).map(async (source) => {
      const [files, provider] = await Promise.all([
        crawl(`./node_modules/${source}/.medusa/server/src/gorgo-widgets`).catch((): string[] => []),
        getProviderFromSource(source),
      ])
      return { source, files, provider }
    })
  )
}

/**
 * Reads and Babel-parses `gorgo-widgets/index.js` for a source package,
 * extracting the exported `provider` string constant if present.
 *
 * Handles two compilation patterns:
 *   1. `const/var/let provider = "value"`  (SWC / tsc)
 *   2. `exports.provider = "value"`         (tsc direct assignment)
 *
 * @example
 * // gorgo-widgets/index.ts (source)
 * export const provider = "ozon"
 */
async function getProviderFromSource(source: string): Promise<string | undefined> {
  const indexPath = `./node_modules/${source}/.medusa/server/src/gorgo-widgets/index.js`
  try {
    const code = await fs.readFile(indexPath, "utf-8")
    const ast = parse(code, getParserOptions(indexPath))
    return extractProviderFromAst(ast)
  } catch {
    return undefined
  }
}

function extractProviderFromAst(ast: ParseResult<File>): string | undefined {
  let provider: string | undefined

  traverse(ast, {
    // Pattern 1: const/var/let provider = "value"  (SWC and tsc)
    VariableDeclarator(path) {
      if (provider) return
      const { id, init } = path.node
      if (
        id.type === "Identifier" &&
        id.name === "provider" &&
        init != null &&
        isStringLiteral(init)
      ) {
        provider = init.value
      }
    },
    // Pattern 2: exports.provider = "value"  (tsc direct assignment fallback)
    AssignmentExpression(path) {
      if (provider) return
      const { left, right } = path.node
      if (
        left.type === "MemberExpression" &&
        left.object.type === "Identifier" &&
        left.object.name === "exports" &&
        left.property.type === "Identifier" &&
        left.property.name === "provider" &&
        isStringLiteral(right)
      ) {
        provider = right.value
      }
    },
  })

  return provider
}

export function transformPath(file: string): string {
  const parts = file.split(path.sep).filter(Boolean)
  const firstAt = parts.indexOf("@gorgo")

  if (firstAt === -1 || firstAt + 1 >= parts.length)
    return file

  const secondAt = parts.indexOf("gorgo-widgets", firstAt + 2)

  if (secondAt === -1)
    return file

  const resultParts = [
    "@gorgo",
    parts[firstAt + 1],
    ...parts.slice(secondAt, -1),
    parts.at(-1)!.split('.')[0]
  ]

  return resultParts.join('/')
}
