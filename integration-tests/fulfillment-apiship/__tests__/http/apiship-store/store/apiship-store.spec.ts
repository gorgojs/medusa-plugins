/**
 * Integration tests for store API: /store/apiship/* and /store/shipping-methods/*
 *
 * Test coverage split:
 *
 *   Always-on (no ApiShip token needed):
 *     - DELETE /store/shipping-methods/:sm_id  — 404 for non-existent id
 *       (workflow is Medusa core, no ApiShip dependency)
 *
 *   Opt-in (CI_APISHIP_TOKEN required):
 *     - GET /store/apiship/providers
 *     - GET /store/apiship/points
 *
 *   Not covered here (requires full cart + shipping option setup):
 *     - POST /store/apiship/:shipping_option_id/calculate
 *
 * State management:
 *   medusaIntegrationTestRunner wipes the DB after every it() block.
 *   Each test is fully self-contained.
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
    // Admin headers for admin API calls
    const adminHeaders: Record<string, string> = {}
    // Store headers: publishable API key required by Medusa for all /store/* routes
    const storeHeaders: Record<string, string> = {}

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

      // Medusa store API requires x-publishable-api-key on every request.
      // Create one via admin and store its token for store requests.
      const keyRes = await api.post(
        "/admin/api-keys",
        { title: "test-store-key", type: "publishable" },
        { headers: adminHeaders }
      )
      storeHeaders["x-publishable-api-key"] = keyRes.data.api_key.token
    })

    // -------------------------------------------------------------------------
    // DELETE /store/shipping-methods/:sm_id
    // -------------------------------------------------------------------------
    describe("DELETE /store/shipping-methods/:sm_id", () => {
      it("returns 200 with deleted response for a non-existent id (idempotent)", async () => {
        const id = "sm_does_not_exist"
        const res = await api.delete(
          `/store/shipping-methods/${id}`,
          { headers: storeHeaders }
        )

        // removeShippingMethodFromCartStep is idempotent — silently ignores
        // unknown IDs and returns the standard delete response
        expect(res.status).toBe(200)
        expect(res.data.id).toBe(id)
        expect(res.data.object).toBe("shipping_method")
        expect(res.data.deleted).toBe(true)
      })
    })

    // -------------------------------------------------------------------------
    // POST /store/apiship/:shipping_option_id/calculate
    // -------------------------------------------------------------------------
    describe("POST /store/apiship/:shipping_option_id/calculate", () => {
      it("returns 400 when cart_id is missing from the request body", async () => {
        const res = await api
          .post(
            "/store/apiship/so_fakeoption/calculate",
            {},
            { headers: storeHeaders }
          )
          .catch((err: any) => err.response)

        expect(res.status).toBe(400)
      })
    })

    // -------------------------------------------------------------------------
    // GET /store/apiship/providers  — opt-in: requires CI_APISHIP_TOKEN
    // -------------------------------------------------------------------------
    const describeIfToken = HAS_TOKEN ? describe : describe.skip

    describeIfToken("GET /store/apiship/providers (live API)", () => {
      beforeEach(async () => {
        // Seed real token so the providers workflow can authenticate
        await api.post("/admin/apiship/options", LIVE_OPTIONS, { headers: adminHeaders })
      })

      it("returns a non-empty providers array", async () => {
        const res = await api.get("/store/apiship/providers", { headers: storeHeaders })

        expect(res.status).toBe(200)
        expect(Array.isArray(res.data.providers)).toBe(true)
        expect(res.data.providers.length).toBeGreaterThan(0)
      })

      it("each provider has key and name fields", async () => {
        const res = await api.get("/store/apiship/providers", { headers: storeHeaders })

        for (const provider of res.data.providers) {
          expect(typeof provider.key).toBe("string")
          expect(typeof provider.name).toBe("string")
        }
      })

      it("well-known providers are present (cdek, boxberry)", async () => {
        const res = await api.get("/store/apiship/providers", { headers: storeHeaders })
        const keys = res.data.providers.map((p: any) => p.key)

        expect(keys).toContain("cdek")
        expect(keys).toContain("boxberry")
      })
    })

    // -------------------------------------------------------------------------
    // GET /store/apiship/points  — opt-in: requires CI_APISHIP_TOKEN
    // -------------------------------------------------------------------------
    describeIfToken("GET /store/apiship/points (live API)", () => {
      beforeEach(async () => {
        await api.post("/admin/apiship/options", LIVE_OPTIONS, { headers: adminHeaders })
      })

      it("returns a non-empty points array with default limit", async () => {
        const res = await api.get("/store/apiship/points?limit=5", { headers: storeHeaders })

        expect(res.status).toBe(200)
        expect(Array.isArray(res.data.points)).toBe(true)
        expect(res.data.points.length).toBeGreaterThan(0)
        expect(res.data.points.length).toBeLessThanOrEqual(5)
      })

      it("each point has id and providerKey fields", async () => {
        const res = await api.get("/store/apiship/points?limit=3", { headers: storeHeaders })

        for (const point of res.data.points) {
          expect(point.id).toBeDefined()
          expect(typeof point.providerKey).toBe("string")
        }
      })

      it("filter by providerKey returns only that provider's points", async () => {
        const res = await api.get(
          "/store/apiship/points?filter=providerKey%3Dcdek&limit=10",
          { headers: storeHeaders }
        )

        expect(res.status).toBe(200)
        for (const point of res.data.points) {
          expect(point.providerKey).toBe("cdek")
        }
      })
    })
  },
})
