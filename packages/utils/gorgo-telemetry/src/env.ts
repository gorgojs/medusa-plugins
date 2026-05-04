import fs from "node:fs"
import path from "node:path"
import type { EnvInfo } from "./types.js"

/** Detect whether the process is running inside a Docker container. */
function isDocker(): boolean {
  try {
    if (fs.existsSync("/.dockerenv")) return true
  } catch {
    // ignore
  }
  try {
    const cgroup = fs.readFileSync("/proc/self/cgroup", "utf-8")
    if (cgroup.includes("docker") || cgroup.includes("containerd")) return true
  } catch {
    // ignore — non-Linux or unreadable
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

function detectMedusaVersion(): string {
  try {
    const pkgPath = require.resolve("@medusajs/medusa/package.json")
    const raw = fs.readFileSync(pkgPath, "utf-8")
    const { version } = JSON.parse(raw) as { version: string }
    return version
  } catch {
    return "0.0.0"
  }
}

/** Build the full EnvInfo block once per process — expensive lookups are cached by the caller. */
export function collectEnvInfo(): EnvInfo {
  return {
    medusa_version: detectMedusaVersion(),
    node_version: process.version,
    os: process.platform,
    arch: process.arch,
    ci: isCI(),
    docker: isDocker(),
    node_env: process.env.NODE_ENV ?? "development",
    locale: detectLocale(),
    timezone: detectTimezone(),
    package_manager: detectPackageManager(),
  }
}

/**
 * Walk up the directory tree from `startDir` to find the nearest valid
 * `package.json` and return its `name` + `version`. Used by the telemetry
 * client to auto-discover the consuming plugin's identity.
 */
export function findPackageJson(startDir: string): { name: string; version: string } | undefined {
  let dir = path.resolve(startDir)
  while (true) {
    try {
      const raw = fs.readFileSync(path.join(dir, "package.json"), "utf-8")
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
