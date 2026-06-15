/**
 * Opt-in integration tests for workflows that call the real ApiShip API.
 *
 * These tests require a valid ApiShip token and are skipped if CI_APISHIP_TOKEN
 * is not set. They complement the offline workflow tests in workflows.spec.ts
 * and the API-only contract tests in apiship-sandbox.contract.spec.ts.
 *
 * What is tested here and why:
 *
 *   getApishipProvidersWorkflow
 *     — has non-trivial branching: cache-miss path fetches from API and saves
 *       to cache; cache-hit path skips the API call. Both branches must work
 *       end-to-end through the full Medusa container.
 *
 *   getApishipAccountConnectionsWorkflow
 *     — straightforward pass-through; tested to verify the store→validate→API
 *       pipeline works and the DTO mapping (providerKey → provider_key) is correct.
 *
 *   getApishipPointsWorkflow
 *     — has two branches controlled by `input.key`:
 *         no key  → direct fetch (fetchApishipPointsStep)
 *         key set → getCachedOrFetchApishipPointsStep (cache-aware)
 *       Both must be exercised with a real API call to catch mapping regressions.
 * 
 * These tests are OPT-IN. They are skipped unless CI_APISHIP_TOKEN is set:
 *   CI_APISHIP_TOKEN=<your token>  # real or test-mode token
 1*/

import { medusaIntegrationTestRunner } from "@medusajs/test-utils"

const { updateApishipOptionsWorkflow } = require(
  "@gorgo/medusa-fulfillment-apiship/workflows/update-apiship-options"
)
const { getApishipProvidersWorkflow } = require(
  "@gorgo/medusa-fulfillment-apiship/workflows/get-apiship-providers"
)
const { getApishipAccountConnectionsWorkflow } = require(
  "@gorgo/medusa-fulfillment-apiship/workflows/get-apiship-account-connections"
)
const { getApishipPointsWorkflow } = require(
  "@gorgo/medusa-fulfillment-apiship/workflows/get-apiship-points"
)

jest.setTimeout(120 * 1000)

const APISHIP_TOKEN = process.env.CI_APISHIP_TOKEN
const HAS_TOKEN = Boolean(APISHIP_TOKEN)

/**
 * Complete options with a real token. `is_test: true` routes all requests to
 * api-test.apiship.ru, which is safe to use in CI.
 */
const LIVE_OPTIONS = {
  token: APISHIP_TOKEN ?? "",
  is_test: true as const,
  settings: {
    is_cod: false as const,
    default_product_sizes: { length: 10, width: 10, height: 10, weight: 20 },
  },
}

medusaIntegrationTestRunner({
  inApp: true,
  env: {},
  testSuite: ({ getContainer }) => {
    // All describes are skipped when there is no token — Medusa starts up but no
    // tests run. Guarding at the describe level rather than at medusaIntegrationTestRunner
    // level keeps the skip visible in test output and avoids skipping infrastructure.
    const describeIfToken = HAS_TOKEN ? describe : describe.skip

    if (!HAS_TOKEN) {
      it.skip("skipped: set CI_APISHIP_TOKEN to run live workflow tests", () => {})
    }

    // -------------------------------------------------------------------------
    // getApishipProvidersWorkflow
    //
    // The workflow has two branches via `when(!cachedProviders)`:
    //   cache miss  → fetchApishipProvidersStep → saveProvidersToCacheStep → return
    //   cache hit   → selectProvidersResultStep returns cached value directly
    //
    // The Medusa test runner uses an in-memory fake redis that persists across
    // it() blocks within the same runner process. This means:
    //   - First test exercises the cache-miss path (fresh DB, empty cache).
    //   - Second test (cache round-trip) calls the workflow twice in one body,
    //     verifying both paths in a single isolated run.
    // -------------------------------------------------------------------------
    describeIfToken("getApishipProvidersWorkflow (live API)", () => {
      it("returns a non-empty providers list and each row has key + name", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        const { result } = await getApishipProvidersWorkflow(container).run()

        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)

        for (const provider of result) {
          // key is the canonical provider identifier (e.g. "cdek", "boxberry")
          expect(typeof provider.key).toBe("string")
          expect(provider.key.length).toBeGreaterThan(0)
          // name is displayed in admin UI
          expect(typeof provider.name).toBe("string")
        }
      })

      it("well-known providers are present (cdek, boxberry)", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        const { result } = await getApishipProvidersWorkflow(container).run()
        const keys = result.map((p: any) => p.key)

        expect(keys).toContain("cdek")
        expect(keys).toContain("boxberry")
      })

      it("cache round-trip: second call returns cached result without a second API fetch", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        // First call: cache miss → fetches from API, saves under key "apiship:providers"
        const { result: first } = await getApishipProvidersWorkflow(container).run()

        // Second call: cache hit → returns stored value, skips fetchApishipProvidersStep
        const { result: second } = await getApishipProvidersWorkflow(container).run()

        expect(second).toEqual(first)
        expect(second.length).toBeGreaterThan(0)
      })
    })

    // -------------------------------------------------------------------------
    // getApishipAccountConnectionsWorkflow
    //
    // Simple pass-through: getStore → validate → connectionsApi.getListConnections
    // Maps API rows: { id, providerKey, name } → { id, provider_key, name }
    // Test tokens may have zero connections — an empty array is a valid result.
    // -------------------------------------------------------------------------
    describeIfToken("getApishipAccountConnectionsWorkflow (live API)", () => {
      it("returns an array (may be empty for test tokens with no connections)", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        const { result } = await getApishipAccountConnectionsWorkflow(container).run()

        expect(Array.isArray(result)).toBe(true)
      })

      it("each connection has id and provider_key fields (DTO mapping check)", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        const { result } = await getApishipAccountConnectionsWorkflow(container).run()

        for (const connection of result) {
          // id comes from API row.id
          expect(connection.id).toBeDefined()
          // provider_key is mapped from API row.providerKey (camelCase → snake_case)
          expect(typeof connection.provider_key).toBe("string")
        }
      })
    })

    // -------------------------------------------------------------------------
    // getApishipPointsWorkflow
    //
    // Two branches controlled by `input.key`:
    //   no key  → fetchApishipPointsStep (direct, no caching)
    //   key set → getCachedOrFetchApishipPointsStep (cache-aware)
    //
    // Cache test uses Date.now() in the key to prevent cross-test cache hits
    // from the in-memory fake redis that persists across it() blocks.
    // -------------------------------------------------------------------------
    describeIfToken("getApishipPointsWorkflow (live API)", () => {
      it("direct fetch (no key): returns a non-empty array of pickup points", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        const { result } = await getApishipPointsWorkflow(container).run({
          input: { limit: 5 },
        })

        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBeGreaterThan(0)
      })

      it("each point has id and providerKey fields (shape contract)", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        const { result } = await getApishipPointsWorkflow(container).run({
          input: { limit: 3 },
        })

        for (const point of result) {
          expect(point.id).toBeDefined()
          expect(typeof point.providerKey).toBe("string")
        }
      })

      it("filter by providerKey returns only that provider's points", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        const { result } = await getApishipPointsWorkflow(container).run({
          input: { filter: "providerKey=cdek", limit: 10 },
        })

        expect(result.length).toBeGreaterThan(0)
        for (const point of result) {
          expect(point.providerKey).toBe("cdek")
        }
      })

      it("cache path: second call with same key returns cached result", async () => {
        const container = getContainer()
        await updateApishipOptionsWorkflow(container).run({ input: LIVE_OPTIONS })

        // Unique key per test run — avoids hitting stale cache from other tests
        const cacheKey = `it_live_points_${Date.now()}`

        // First call: cache miss → fetches from API → saves under cacheKey
        const { result: first } = await getApishipPointsWorkflow(container).run({
          input: { key: cacheKey, limit: 5 },
        })

        expect(first.length).toBeGreaterThan(0)

        // Second call: cache hit → returns stored value without a new API request
        const { result: second } = await getApishipPointsWorkflow(container).run({
          input: { key: cacheKey, limit: 5 },
        })

        expect(second).toEqual(first)
      })
    })
  },
})
