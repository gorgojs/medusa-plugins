/**
 * Opt-in integration tests for admin API endpoints that proxy live ApiShip calls.
 *
 * Skipped unless CI_APISHIP_TOKEN is set — they require a valid ApiShip token
 * and make real network requests to api-test.apiship.ru.
 *
 * Endpoints covered:
 *   GET /admin/apiship/providers        — via getApishipProvidersWorkflow
 *   GET /admin/apiship/points           — via getApishipPointsWorkflow
 *   GET /admin/apiship/account-connections — via getApishipAccountConnectionsWorkflow
 *
 * These tests are OPT-IN. They are skipped unless CI_APISHIP_TOKEN is set:
 *   CI_APISHIP_TOKEN=<your token>  # real or test-mode token
 */

import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import jwt from "jsonwebtoken"

jest.setTimeout(120 * 1000)

const APISHIP_TOKEN = process.env.CI_APISHIP_TOKEN
const HAS_TOKEN = Boolean(APISHIP_TOKEN)

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
  testSuite: ({ api, getContainer }) => {
    const adminHeaders: Record<string, string> = {}

    beforeEach(async () => {
      const container = getContainer()
      const auth = container.resolve("auth") as any
      const userService = container.resolve("user") as any

      const user = await userService.createUsers({ email: "admin@test.com" })
      const authIdentity = await auth.createAuthIdentities({
        provider_identities: [
          {
            provider: "emailpass",
            entity_id: "admin@test.com",
            provider_metadata: { password: "supersecret" },
          },
        ],
        app_metadata: { user_id: user.id },
      })

      const jwtToken = jwt.sign(
        {
          actor_id: user.id,
          actor_type: "user",
          auth_identity_id: authIdentity.id,
        },
        "supersecret",
        { expiresIn: "1d" }
      )
      adminHeaders["authorization"] = `Bearer ${jwtToken}`
    })

    const describeIfToken = HAS_TOKEN ? describe : describe.skip

    if (!HAS_TOKEN) {
      it.skip("skipped: set CI_APISHIP_TOKEN to run live admin HTTP tests", () => {})
    }

    // -------------------------------------------------------------------------
    // GET /admin/apiship/providers
    // -------------------------------------------------------------------------
    describeIfToken("GET /admin/apiship/providers (live API)", () => {
      beforeEach(async () => {
        await api.post("/admin/apiship/options", LIVE_OPTIONS, { headers: adminHeaders })
      })

      it("returns 200 with a non-empty providers array", async () => {
        const res = await api.get("/admin/apiship/providers", { headers: adminHeaders })

        expect(res.status).toBe(200)
        expect(Array.isArray(res.data.providers)).toBe(true)
        expect(res.data.providers.length).toBeGreaterThan(0)
      })

      it("each provider has key and name fields", async () => {
        const res = await api.get("/admin/apiship/providers", { headers: adminHeaders })

        for (const provider of res.data.providers) {
          expect(typeof provider.key).toBe("string")
          expect(typeof provider.name).toBe("string")
        }
      })

      it("well-known providers are present (cdek, boxberry)", async () => {
        const res = await api.get("/admin/apiship/providers", { headers: adminHeaders })
        const keys = res.data.providers.map((p: any) => p.key)

        expect(keys).toContain("cdek")
        expect(keys).toContain("boxberry")
      })
    })

    // -------------------------------------------------------------------------
    // GET /admin/apiship/points
    // -------------------------------------------------------------------------
    describeIfToken("GET /admin/apiship/points (live API)", () => {
      beforeEach(async () => {
        await api.post("/admin/apiship/options", LIVE_OPTIONS, { headers: adminHeaders })
      })

      it("returns 200 with a non-empty points array", async () => {
        const res = await api.get("/admin/apiship/points?limit=5", { headers: adminHeaders })

        expect(res.status).toBe(200)
        expect(Array.isArray(res.data.points)).toBe(true)
        expect(res.data.points.length).toBeGreaterThan(0)
        expect(res.data.points.length).toBeLessThanOrEqual(5)
      })

      it("each point has id and providerKey fields", async () => {
        const res = await api.get("/admin/apiship/points?limit=3", { headers: adminHeaders })

        for (const point of res.data.points) {
          expect(point.id).toBeDefined()
          expect(typeof point.providerKey).toBe("string")
        }
      })

      it("filter by providerKey returns only that provider's points", async () => {
        const res = await api.get(
          "/admin/apiship/points?filter=providerKey%3Dcdek&limit=10",
          { headers: adminHeaders }
        )

        expect(res.status).toBe(200)
        for (const point of res.data.points) {
          expect(point.providerKey).toBe("cdek")
        }
      })
    })

    // -------------------------------------------------------------------------
    // GET /admin/apiship/account-connections
    // -------------------------------------------------------------------------
    describeIfToken("GET /admin/apiship/account-connections (live API)", () => {
      beforeEach(async () => {
        await api.post("/admin/apiship/options", LIVE_OPTIONS, { headers: adminHeaders })
      })

      it("returns 200 with an array (may be empty for tokens with no connections)", async () => {
        const res = await api.get("/admin/apiship/account-connections", { headers: adminHeaders })

        expect(res.status).toBe(200)
        expect(Array.isArray(res.data.account_connections)).toBe(true)
      })

      it("each connection has id and provider_key fields (DTO mapping check)", async () => {
        const res = await api.get("/admin/apiship/account-connections", { headers: adminHeaders })

        for (const connection of res.data.account_connections) {
          expect(connection.id).toBeDefined()
          // provider_key is mapped from API's providerKey (camelCase → snake_case)
          expect(typeof connection.provider_key).toBe("string")
        }
      })
    })
  },
})
