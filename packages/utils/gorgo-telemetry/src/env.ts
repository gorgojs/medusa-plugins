import { existsSync } from "node:fs"
import { readFile } from "node:fs/promises"
import path from "node:path"
import type { EnvInfo } from "./types.js"

/** Detect whether the process is running inside a container runtime (Docker / containerd / kubepods / overlay). */
async function isContainer(): Promise<boolean> {
  if (existsSync("/.dockerenv") || existsSync("/run/.containerenv")) return true

  for (const file of ["/proc/self/cgroup", "/proc/self/mountinfo"]) {
    try {
      const content = await readFile(file, "utf-8")
      if (/docker|containerd|kubepods|overlay/.test(content)) return true
    } catch {
      // non-Linux or unreadable
    }
  }
  return false
}

/** Detect common CI runners via well-known environment variables. */
function isCI(): boolean {
  const env = process.env
  if (env.CI === "true" || env.CI === "1") return true
  return Boolean(
    env.CONTINUOUS_INTEGRATION ||
      env.BUILD_NUMBER ||
      env.GITHUB_ACTIONS ||
      env.GITLAB_CI ||
      env.CIRCLECI ||
      env.TRAVIS ||
      env.BITBUCKET_BUILD_NUMBER ||
      env.JENKINS_URL ||
      env.TEAMCITY_VERSION ||
      env.BUILDKITE ||
      env.DRONE ||
      env.APPVEYOR
  )
}

/** Parse the package manager that launched the current process. */
function detectPackageManager(): EnvInfo["package_manager"] {
  const ua = process.env.npm_config_user_agent ?? ""
  if (ua.startsWith("yarn")) return "yarn"
  if (ua.startsWith("pnpm")) return "pnpm"
  if (ua.startsWith("npm")) return "npm"

  const execpath = process.env.npm_execpath ?? ""
  if (execpath.includes("yarn")) return "yarn"
  if (execpath.includes("pnpm")) return "pnpm"
  if (execpath.includes("npm")) return "npm"

  return "unknown"
}

function detectLocale(): string {
  return (
    process.env.LC_ALL ||
    process.env.LC_MESSAGES ||
    process.env.LANG ||
    process.env.LANGUAGE ||
    "C"
  )
}

function detectTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
  } catch {
    return "UTC"
  }
}

/**
 * Normalize a URL / CORS-style env-var into a stable identifier, then
 * base64-encode it. Encoding is obfuscation, not encryption — it keeps the
 * raw domain out of plain sight in Loki/Grafana while staying trivially
 * reversible (`{{ b64dec .field }}` in a Loki `label_format` stage, or
 * `Buffer.from(x, "base64").toString()` anywhere else).
 *
 * Strips `http://` / `https://` from each comma-separated part before
 * encoding; preserves everything else verbatim (empty parts, `*` wildcards,
 * trailing slashes).
 */
function normalizeUrlEnv(raw: string | undefined): string | undefined {
  if (raw === undefined) return undefined
  const normalized = raw
    .split(",")
    .map((part) => part.trim().replace(/^https?:\/\//i, ""))
    .join(",")
  return Buffer.from(normalized, "utf-8").toString("base64")
}

async function detectMedusaVersion(): Promise<string> {
  try {
    const pkgPath = require.resolve("@medusajs/medusa/package.json")
    const raw = await readFile(pkgPath, "utf-8")
    const { version } = JSON.parse(raw) as { version: string }
    return version
  } catch {
    return "0.0.0"
  }
}

/** Build the full EnvInfo block once per process — expensive lookups are cached by the caller. */
export async function collectEnvInfo(): Promise<EnvInfo> {
  const [medusa_version, container] = await Promise.all([detectMedusaVersion(), isContainer()])
  return {
    medusa_version,
    node_version: process.version,
    os: process.platform,
    arch: process.arch,
    ci: isCI(),
    container,
    node_env: process.env.NODE_ENV ?? "development",
    locale: detectLocale(),
    timezone: detectTimezone(),
    package_manager: detectPackageManager(),
    store_id: normalizeUrlEnv(
      process.env.MEDUSA_STOREFRONT_URL ??
        process.env.STORE_CORS ??
        process.env.STOREFRONT_URL,
    ),
    admin_id: normalizeUrlEnv(
      process.env.MEDUSA_BACKEND_URL ?? process.env.ADMIN_CORS ?? process.env.ADMIN_URL,
    ),
  }
}

/**
 * Walk up the directory tree from `startDir` to find the nearest valid
 * `package.json` and return its `name` + `version`. Used by the telemetry
 * client to auto-discover the consuming plugin's identity.
 */
export async function findPackageJson(
  startDir: string
): Promise<{ name: string; version: string } | undefined> {
  let dir = path.resolve(startDir)
  while (true) {
    try {
      const raw = await readFile(path.join(dir, "package.json"), "utf-8")
      const pkg = JSON.parse(raw) as { name?: string; version?: string }
      if (pkg.name && pkg.version) return { name: pkg.name, version: pkg.version }
    } catch {
      // not here, keep walking
    }
    const parent = path.dirname(dir)
    if (parent === dir) return undefined
    dir = parent
  }
}
