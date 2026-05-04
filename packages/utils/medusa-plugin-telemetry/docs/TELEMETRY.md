# Telemetry

All `gorgo` plugins collect anonymous usage data to help us understand which features are used and in what environments. This lets us prioritize fixes and improvements based on real-world usage rather than guesswork. No personally identifiable information, customer data, or business data is ever collected.

---

## What is collected

Every event carries the following fields:

| Field | Value |
|---|---|
| `machine_id` | A random identifier generated on first run and stored in `~/.gorgo/telemetry.json`. It is derived from random bytes — not from hardware, hostname, or any system identifier. |
| `session_id` | A UUID generated fresh each time the Medusa process starts. |
| `plugin.name` | The npm package name of the plugin (e.g. `@gorgo/medusa-payment-robokassa`). |
| `plugin.version` | The installed version of the plugin. |
| `env.medusa_version` | The version of `@medusajs/medusa` in the project. |
| `env.node_version` | The Node.js runtime version. |
| `env.os` | Operating system: `linux`, `darwin`, or `win32`. |
| `env.arch` | CPU architecture: `x64` or `arm64`. |
| `env.ci` | `true` if a CI environment is detected (GitHub Actions, GitLab CI, CircleCI, etc.). |
| `env.docker` | `true` if running inside a Docker container. |
| `env.node_env` | The value of `NODE_ENV` (`production`, `development`, `test`). |
| `env.locale` | System locale (e.g. `en_US.UTF-8`), read from shell environment variables. |
| `env.timezone` | System timezone (e.g. `Europe/Moscow`). |
| `env.package_manager` | Package manager in use: `npm`, `yarn`, `pnpm`, or `unknown`. |

Events may also include a small `properties` object specific to the event type. These properties are documented in the [Events catalog](#events) below.

---

## What is never collected

- **Customer or business data** — no order IDs, product names, SKUs, prices, customer emails, phone numbers, or any store content.
- **Secrets or credentials** — no API keys, tokens, passwords, or environment variables from your project.
- **IP addresses** — the collector endpoint receives your IP as part of the HTTP request but does not store or log it.
- **Stack traces or error messages** — error events include only a short `reason` or `error_code` classification, never raw exception text.
- **File paths or directory names** from your project.
- **Any data that would allow us to identify you or your store.**

---

## Events

<!-- TODO: populate from EVENTS.md -->

---

## How to opt out

Set following environment variable to `1` or `true`:

```bash
GORGO_DISABLE_TELEMETRY=true
```

You can also disable telemetry manually by editing `~/.gorgo/telemetry.json`:

```json
{
  "enabled": false
}
```

Telemetry is disabled automatically when variable is set. The file-based setting is a persistent alternative for environment where you cannot control environment variables.

**CI environments:** telemetry is collected in CI but the first-run notice (printed to stdout on initial startup) is suppressed when the `CI` environment variable is set.

---

## Source code

This module is fully open source. The complete implementation is available at [`packages/utils/medusa-plugin-telemetry`](https://github.com/gorgojs/medusa-plugins/tree/main/packages/utils/medusa-plugin-telemetry) in the monorepo.

All events are sent to `https://telemetry.gorgojs.com/batch`.
