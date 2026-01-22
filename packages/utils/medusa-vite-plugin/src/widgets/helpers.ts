import path from "path"
import { crawl } from "../utils"

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
