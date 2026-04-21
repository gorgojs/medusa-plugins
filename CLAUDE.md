# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Yarn 4 monorepo of Medusa v2 plugins published under the `@gorgo` npm scope. Each package in `packages/` is an independent Medusa plugin; `examples/` contains full Medusa backend + storefront apps used for manual testing and CI integration tests.

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

### Per-Package Commands

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

### Build output

All packages build to `.medusa/server/` (Medusa CLI output, not Webpack/Vite). Only this directory is published (`"files": [".medusa/server"]`).

### Exports convention

Each package exposes sub-path exports matching Medusa plugin conventions:

```json
"exports": {
  "./package.json": "./package.json",
  "./workflows": "./.medusa/server/src/workflows/index.js",
  "./.medusa/server/src/modules/*": "./.medusa/server/src/modules/*/index.js",
  "./modules/*": "./.medusa/server/src/modules/*/index.js",
  "./providers/*": "./.medusa/server/src/providers/*/index.js",
  "./types": {
    "types": "./src/types/index.ts",
    "default": "./.medusa/server/src/types/index.js"
  },
  "./admin": {
    "import": "./.medusa/server/src/admin/index.mjs",
    "require": "./.medusa/server/src/admin/index.js",
    "default": "./.medusa/server/src/admin/index.js"
  },
  "./*": "./.medusa/server/src/*.js"
}
```

### Source structure (inside src/)

Not every package uses every directory — include only what the plugin needs.

```
src/
├── admin/          # React admin UI
│   ├── routes/         # pages (defineRouteConfig + default export)
│   ├── components/     # shared UI
│   ├── hooks/          # React hooks
│   ├── lib/            # admin-only helpers (e.g. sdk.ts)
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
├── jobs/           # scheduled background jobs
├── lib/            # cross-cutting libraries used by the package
├── utils/          # small utility helpers
├── data/           # static data / fixtures / seed files
└── types/          # shared TypeScript types (barrel via index.ts)
```

### TypeScript

All packages target ES2021, Module Node16, with SWC for ts-node. Build output includes both `.js` (CJS) and `.mjs` (ESM) for the admin bundle.

## Medusa Plugin Patterns

### Models

Use `model.define()` from `@medusajs/framework/utils`:

```ts
const Feed = model.define("feed", {
  id: model.id().primaryKey(),
  title: model.text().nullable(),
  is_active: model.boolean().default(false),
  settings: model.json().nullable(),
})
```

### Services

Extend `MedusaService()` with models. No decorators — use constructor injection:

```ts
class FeedModuleService extends MedusaService({ Feed }) {
  async updateSettings(id: string, data: UpdateInput) {
    return super.updateFeeds([{ id, ...data }])
  }
}
```

### Module registration

```ts
// modules/feed/index.ts
export const FEED_MODULE = "feed"
export default Module(FEED_MODULE, { service: FeedModuleService })
```

### Provider registration

```ts
// providers/payment-tkassa/index.ts
export default ModuleProvider(Modules.PAYMENT, { services: [TkassaService] })
// providers/fulfillment-apiship/index.ts
export default ModuleProvider(Modules.FULFILLMENT, { services: [ApishipService] })
```

Payment providers extend `AbstractPaymentProvider<Options>`, fulfillment providers extend `AbstractFulfillmentProviderService`.

### API routes

Named HTTP method exports; validate with Zod using `@medusajs/framework/zod`:

```ts
// api/admin/feeds/validators.ts
import { z } from "@medusajs/framework/zod"
export const AdminCreateFeed = z.object({ title: z.string(), file_name: z.string() })
export type AdminCreateFeedType = z.infer<typeof AdminCreateFeed>

// api/admin/feeds/route.ts
export const POST = async (
  req: MedusaRequest<AdminCreateFeedType>,
  res: MedusaResponse<FeedResponse>
) => {
  const { result } = await createFeedsWorkflow(req.scope).run({ input: req.validatedBody })
  res.status(200).json({ feed: result })
}
```

Validated input available as `req.validatedBody` / `req.validatedQuery`.

### Workflows

```ts
export const myStep = createStep("my-step", async (input, { container }) => {
  const service = container.resolve(Modules.CACHE)
  await service.set(input.key, input.data)
  return new StepResponse(result)
})

export const myWorkflow = createWorkflow("my-workflow", (input: WorkflowData<Input>) => {
  const cached = getCachedStep(input)
  const fetched = when(cached, (c) => !c).then(() => fetchStep(input))
  return new WorkflowResponse(selectStep({ cached, fetched }))
})
```

### Admin UI

Pages export a default component, `config` (via `defineRouteConfig`), and optionally `handle` (breadcrumb) + `loader`:

```ts
// admin/routes/settings/feeds/page.tsx
export const config = defineRouteConfig({ label: "Feeds", icon: Rss })
export const handle = { breadcrumb: () => "Feeds" }
export const loader = async ({ params }: LoaderFunctionArgs) =>
  sdk.client.fetch(`/admin/feeds/${params.id}`)
export default function FeedsPage() { ... }
```

Admin SDK client (`sdk`) lives in `src/admin/lib/sdk.ts`; i18n uses `i18next` with JSON files in `src/admin/i18n/`.

### Integration tests

Tests live in `integration-tests/http/` inside the package, use `medusaIntegrationTestRunner` from `@medusajs/test-utils`:

```ts
medusaIntegrationTestRunner({
  testSuite: ({ api, getContainer }) => {
    it("creates feed", async () => {
      const res = await api.post("/admin/feeds", payload, { headers })
      expect(res.status).toBe(200)
      const service = getContainer().resolve<FeedModuleService>(FEED_MODULE)
      const feeds = await service.listFeeds({ id: [res.data.feed.id] })
      expect(feeds).toHaveLength(1)
    })
  },
})
jest.setTimeout(60 * 1000)
```

To run a workflow directly in tests: `myWorkflow(getContainer()).run({ input })`.

### Errors

```ts
throw new MedusaError(MedusaError.Types.NOT_FOUND, `Feed ${id} not found`)
```

## MCP

Repo ships an `.mcp.json` with **context7** — use it to look up Medusa v2 APIs and patterns (`docs.medusajs.com`) and third-party SDK docs before guessing from memory. Prefer context7 over `web-search-researcher` when the answer lives in official docs: it's faster and returns canonical snippets.

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
