# Agent Selection Guide

Specialized agents for codebase exploration and research in this Medusa plugins monorepo. Each has a specific purpose and tool set.

## When to Use Each Agent

### codebase-locator
**Use when you need to find WHERE code lives**

- Locating files for a specific plugin feature
- Finding all admin routes / API routes / workflows across packages
- Discovering tests, config, or docs for a plugin
- Getting a structured overview of what exists where

**Example queries:**
- "Where are the payment provider services?"
- "Find all admin route files in medusa-feed-yandex"
- "Locate workflow step definitions across packages"

**Output:** Grouped file paths by category (implementation, tests, admin, api, workflows).

---

### codebase-analyzer
**Use when you need to understand HOW code works**

- Tracing how a workflow composes its steps
- Understanding how a payment webhook is processed
- Following request flow from API route → workflow → module service
- Explaining admin SDK client usage

**Example queries:**
- "How does medusa-payment-tkassa handle `getWebhookActionAndData`?"
- "Trace the flow when an admin creates a feed in medusa-feed-yandex"
- "Explain how apiship caching works across workflow steps"

**Output:** Detailed technical explanations with file:line references.

---

### codebase-pattern-finder
**Use when you need examples to model after**

- Finding existing API-route + Zod-validator + workflow patterns
- Discovering how other plugins structure providers
- Modeling a new integration test on existing ones
- Seeing how `MedusaService()` is extended with custom methods

**Example queries:**
- "Show examples of admin API routes using Zod validators"
- "Find plugins that extend MedusaService with custom methods"
- "How are integration tests structured across packages?"

**Output:** Concrete code examples with context and usage patterns.

---

### web-search-researcher
**Use when you need external information**

- Researching Medusa v2 framework APIs or changes
- Finding docs for third-party SDKs (ApiShip, T-Kassa, Yandex Market, Robokassa)
- Understanding payment/fulfillment provider specs
- Getting info not available locally

**Example queries:**
- "Latest Medusa v2 `AbstractPaymentProvider` interface methods"
- "T-Kassa webhook signature verification spec"
- "Yandex Market feed YML format changes"

**Output:** Synthesized research with source citations.

---

## Agent Comparison Matrix

| Agent | Focus | Tools | When to Use |
|-------|-------|-------|-------------|
| **codebase-locator** | WHERE | Grep, Glob, LS | Finding files and directories |
| **codebase-analyzer** | HOW | Read, Grep, Glob, LS | Understanding implementation |
| **codebase-pattern-finder** | EXAMPLES | Grep, Glob, Read, LS | Finding templates |
| **web-search-researcher** | EXTERNAL | WebSearch, WebFetch | Web research |

## Constraints

All agents are:
- **Read-only** — no code modifications
- **Objective** — no recommendations or critiques
- **Focused** — stay within their domain
- **Accurate** — provide exact file:line references
- **Complete** — read files fully, not partially

## Tips

1. **Start with locator** when you don't know where code lives
2. **Then analyze** once you know where
3. **Find patterns** before writing new code — model it after existing plugins
4. **Research externally** for Medusa v2 or third-party SDK docs
5. **Run in parallel** when exploring independent areas
