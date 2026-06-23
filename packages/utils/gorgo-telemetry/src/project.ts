import crypto from "node:crypto"
import { readFile } from "node:fs/promises"
import path from "node:path"

export interface ProjectInfo {
  /** sha256 hex of the project's `package.json#name`. Stable across releases of the same project. */
  id: string
  /**
   * sha256 hex of the project's `package.json` content in canonical form:
   * parsed, recursively key-sorted, then `JSON.stringify`-ed without whitespace.
   * Whitespace / key-order reshuffles by Prettier/editors do NOT change this hash.
   * Any real edit (deps, scripts, version) does.
   */
  hash: string
}

/**
 * Recursively sort object keys so that two semantically-equal JSON documents
 * produce identical serialized output regardless of writer formatting.
 */
function canonicalize(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(canonicalize)
  }
  if (value !== null && typeof value === "object") {
    const obj = value as Record<string, unknown>
    return Object.keys(obj)
      .sort()
      .reduce<Record<string, unknown>>((acc, k) => {
        acc[k] = canonicalize(obj[k])
        return acc
      }, {})
  }
  return value
}

/**
 * Walk up from `startDir` and return the path of the first `package.json` that
 * does NOT live inside a `node_modules/` segment. This skips package.json files
 * of dependencies (including the calling plugin itself when it's installed as
 * a dep) and lands on the consuming Medusa app's manifest.
 */
async function findProjectPackageJsonPath(startDir: string): Promise<string | undefined> {
  let dir = path.resolve(startDir)
  const sep = path.sep
  const nm = `${sep}node_modules${sep}`

  while (true) {
    const inNodeModules = dir.includes(nm) || dir.endsWith(`${sep}node_modules`)
    if (!inNodeModules) {
      const pkgPath = path.join(dir, "package.json")
      try {
        await readFile(pkgPath, "utf-8")
        return pkgPath
      } catch {
        // not here, keep walking
      }
    }
    const parent = path.dirname(dir)
    if (parent === dir) return undefined
    dir = parent
  }
}

/**
 * Best-effort detection of the consuming project's identity. Reads the nearest
 * `package.json` outside any `node_modules/` starting from `startDir`
 * (default `process.cwd()` — Medusa apps run from their project root).
 *
 * Returns `undefined` when no project manifest is found or its `name` field is
 * missing — the dispatcher then simply omits `project.*` attributes for that
 * event batch instead of failing.
 */
export async function collectProjectInfo(
  startDir: string = process.cwd()
): Promise<ProjectInfo | undefined> {
  const pkgPath = await findProjectPackageJsonPath(startDir)
  if (!pkgPath) return undefined

  try {
    const raw = await readFile(pkgPath, "utf-8")
    const parsed = JSON.parse(raw) as { name?: unknown }
    const name = typeof parsed.name === "string" ? parsed.name : ""
    if (!name) return undefined

    const id = crypto.createHash("sha256").update(name).digest("hex")
    const canonical = JSON.stringify(canonicalize(parsed))
    const hash = crypto.createHash("sha256").update(canonical).digest("hex")

    return { id, hash }
  } catch {
    return undefined
  }
}
