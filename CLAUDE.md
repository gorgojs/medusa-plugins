# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Repository Structure

This repository is organized as a Yarn v4 monorepo with shared workspaces for plugin packages.

```text
├── examples/
│   ├── 1c/
│   ├── feed-yandex/
│   ├── fulfillment-apiship/
│   ├── payment-robokassa/
│   └── payment-tkassa/
├── packages/
│   ├── medusa-1c/
│   ├── medusa-feed-yandex/
│   ├── medusa-fulfillment-apiship/
│   ├── medusa-payment-robokassa/
│   └── medusa-payment-tkassa/
├── scripts/
└── www/
    └── docs/
```

## Essential Commands

### Monorepo Commands

```bash
yarn install                          # Install all dependencies (triggers husky setup)

 # Update Medusa version across examples
yarn update <version> [example] [-s|--single] [--skip-build]
# e.g.: yarn update 2.14.0 feed-yandex --single --skip-build

# Changesets (versioning & publishing)
yarn changeset                        # Interactively create a changeset
yarn changeset version                # Bump versions and update CHANGELOGs
yarn changeset publish                # Publish packages to npm
```

### Per-Package (Per-Plugin) Commands

Run inside `packages/<name>/`:

```bash
# development
yarn dev                              # Publish locally then start dev watch mode
```

### Per-Example Commands

Run inside `examples/<name>/medusa`:

```bash
yarn install                          # Install all dependencies 
yarn dev                              # Run in development mode
yarn dev:tunnel                       # Run in development mode with tunneling

# testing
yarn test:integration:http            # HTTP integration tests 
yarn test:integration:modules         # Module integration tests
yarn test:unit                        # Unit tests
```

Run inside `examples/<name>/medusa-storefront`:

```bash
yarn install                          # Install all dependencies 
yarn dev                              # Run in development mode
yarn dev:tunnel                       # Run in development mode with tunneling
```

## Commit Conventions

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/) — enforced by commitlint.

**Scope is required** and must be one of:

- Package scope (strip `medusa-` prefix):
  - `1c`
  - `feed-yandex`
  - `fulfillment-apiship`
  - `payment-robokassa`
  - `payment-tkassa`
- Repo-level:
  - `deps`
  - `release`
  - `docs`
  - `root`

Examples:

```
feat(feed-yandex): add price filter support
fix(payment-robokassa): handle webhook timeout
chore(deps): bump @medusajs/medusa to 2.14.0
```

Scope maps directly to changeset bump type: `feat` → minor, `fix/perf/refactor/docs/revert/test` → patch, breaking (`!`) → major.

## Package Architecture

### Source structure (inside package/<name>/src/)

Not every package uses every directory — include only what the plugin needs.

```
src/
├── admin/          # React admin UI
│   ├── routes/         # UI-routes extending Medusa Admin
│   ├── components/     # shared UI
│       └── /gorgo-widgets      # Components for Gorgo UI-widgets
│   ├── hooks/          # React hooks
│   ├── lib/            # admin-only helpers (e.g. sdk.ts)
│   ├── widgets/        # UI-widgets extending Medusa Admin
│   └── i18n/           # i18next JSON locales
├── api/            # REST route handlers
│   ├── admin/          # authenticated admin endpoints
│   └── {store,hooks}/  # public / webhook endpoints
├── modules/        # Medusa modules
│   └── <name>/
│       ├── index.ts            # Module(<NAME>, { service })
│       ├── service.ts          # extends MedusaService({ Model })
│       ├── models/             # model.define(...)
│       ├── migrations/         # generated migrations
│       └── loaders/            # optional module loaders
├── providers/      # Medusa providers (payment / fulfillment / ...)
│   └── <name>/
│       ├── index.ts            # ModuleProvider(Modules.X, { services })
│       └── service.ts          # extends AbstractXProvider
├── workflows/      # Medusa workflows + steps
│   ├── <name>/
│   │   ├── index.ts            # createWorkflow(...)
│   │   └── steps/              # createStep(...)
│   └── index.ts                # barrel re-export
├── gorgo-widgets/  # Gorgo UI-widgets extending Gorgo plugins
├── jobs/           # scheduled background jobs
├── lib/            # cross-cutting libraries used by the package
├── utils/          # small utility helpers
├── data/           # static data / fixtures / seed files
└── types/          # shared TypeScript types (barrel via index.ts)
```

### TypeScript

All packages target ES2021, Module Node16, with SWC for ts-node. Build output includes both `.js` (CJS) and `.mjs` (ESM) for the admin bundle.

## MCP

Use the **medusa** MCP (`docs.medusajs.com`) for Medusa v2 APIs and patterns, and **context7** (shipped in `.mcp.json`) for third-party SDK docs — prefer both over memory.

## CI/CD

| Workflow | Trigger | Purpose |
|---|---|---|
| `publish.yml` | Push to main (packages/**) | Auto-generate changesets → version → publish to npm |
| `update-medusa-version.yml` | Daily 6 AM + manual | Check latest Medusa, run integration tests, open update PR |
| `notify-deploy.yml` | Push to main (www/docs/**) | Notify internal-scripts repo to deploy docs |

## Workflow: Research → Plan → Implement

Three slash commands drive non-trivial work, each writing outputs to `thoughts/shared/`:

- **`/research`** — spawn parallel agents to document how existing code works. Output: `thoughts/shared/research/YYYY-MM-DD-topic.md`.
- **`/create_plan`** — interactive planning with phased implementation, automated + manual verification criteria. Output: `thoughts/shared/plans/YYYY-MM-DD-topic.md`.
- **`/implement_plan`** — execute an approved plan phase by phase, checking off items and pausing for manual verification.

Read existing docs in `thoughts/shared/` before re-exploring the same area. See `thoughts/shared/README.md` for conventions.

### Sub-agents

Four specialized read-only agents live in `.claude/agents/`:

- **codebase-locator** — WHERE files live (Grep/Glob/LS)
- **codebase-analyzer** — HOW code works (Read + search)
- **codebase-pattern-finder** — existing examples to model after
- **web-search-researcher** — external docs (Medusa v2, third-party SDKs)

Run them in parallel when investigating independent areas. See `.claude/agents/README.md`.

## Examples

Each `examples/<name>/` contains a standalone Medusa project with the plugin pre-installed. They serve as integration test environments — the CI `update-medusa-version.yml` workflow runs `update.sh` against them. When developing a plugin, link it locally using `yalc` (`.yalc/` is gitignored).
