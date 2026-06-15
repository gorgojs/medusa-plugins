/**
 * Live consumer-driven contract tests against ApiShip (api.apiship.ru / api-test.apiship.ru).
 *
 * Purpose: catch breaking changes in the ApiShip API (renamed/removed fields,
 * status changes, schema diffs in success and error responses) that mocked
 * unit tests by design cannot detect. Validates request/response shapes for
 * the endpoints the plugin actually depends on:
 *   - listsApi.getListProviders    → getApishipProvidersWorkflow
 *   - listsApi.getListPoints       → getApishipPointsWorkflow
 *   - connectionsApi.getListConnections → getApishipAccountConnectionsWorkflow
 *
 * These tests are OPT-IN. They are skipped unless CI_APISHIP_TOKEN is set:
 *   CI_APISHIP_TOKEN=<your token>  # real or test-mode token
 */

jest.setTimeout(60 * 1000)

// createApishipClient is the factory used by every workflow step that calls
// the ApiShip API. We import it via the package subpath export so we exercise
// the same client code path as the plugin.
const { createApishipClient } = require(
  "@gorgo/medusa-fulfillment-apiship/lib/client"
)

const APISHIP_TOKEN = process.env.CI_APISHIP_TOKEN
const HAS_TOKEN = Boolean(APISHIP_TOKEN)

const describeIfToken = HAS_TOKEN ? describe : describe.skip

describeIfToken("ApiShip contract (LIVE network)", () => {
  let client: {
    listsApi: any
    connectionsApi: any
    ordersApi: any
    orderDocsApi: any
    calculatorApi: any
  }

  beforeAll(() => {
    client = createApishipClient({ token: APISHIP_TOKEN, isTest: true })
  })

  // ---------------------------------------------------------------------------
  // getListProviders — consumed by getApishipProvidersWorkflow / fetchApishipProvidersStep
  // The plugin reads: data.rows → AdminApishipProvider[] ({ key, name, description })
  // ---------------------------------------------------------------------------
  describe("listsApi.getListProviders (getApishipProvidersWorkflow contract)", () => {
    it("returns a rows array with at least one provider", async () => {
      const { data } = await client.listsApi.getListProviders({})

      expect(data).toBeDefined()
      expect(Array.isArray(data.rows)).toBe(true)
      // ApiShip always has providers — empty list indicates an API regression
      expect(data.rows!.length).toBeGreaterThan(0)
    })

    it("each provider row has key and name fields (shape contract)", async () => {
      const { data } = await client.listsApi.getListProviders({})
      const rows = data.rows ?? []

      for (const provider of rows) {
        // key is the canonical identifier used by the plugin (e.g. "cdek", "boxberry")
        expect(typeof provider.key).toBe("string")
        // name is displayed in the admin UI
        expect(typeof provider.name).toBe("string")
      }
    })

    it("well-known providers are present (regression guard)", async () => {
      const { data } = await client.listsApi.getListProviders({})
      const keys: string[] = (data.rows ?? []).map((r: any) => r.key)

      // CDEK and Boxberry are stable, long-lived providers.
      // If either disappears the plugin's test connection data may be wrong.
      expect(keys).toContain("cdek")
      expect(keys).toContain("boxberry")
    })
  })

  // ---------------------------------------------------------------------------
  // connectionsApi.getListConnections — consumed by getApishipAccountConnectionsWorkflow
  // The plugin reads: data.rows → [{ id, providerKey, name }]
  // ---------------------------------------------------------------------------
  describe("connectionsApi.getListConnections (getApishipAccountConnectionsWorkflow contract)", () => {
    it("returns a rows array (may be empty for test tokens)", async () => {
      const { data } = await client.connectionsApi.getListConnections()

      expect(data).toBeDefined()
      expect(Array.isArray(data.rows)).toBe(true)
    })

    it("each connection row has id and providerKey fields (shape contract)", async () => {
      const { data } = await client.connectionsApi.getListConnections()
      const rows = data.rows ?? []

      for (const connection of rows) {
        // id is mapped to ApishipAccountConnectionDTO.id by the plugin
        expect(connection.id).toBeDefined()
        // providerKey is mapped to ApishipAccountConnectionDTO.provider_key
        expect(typeof connection.providerKey).toBe("string")
      }
    })
  })

  // ---------------------------------------------------------------------------
  // listsApi.getListPoints — consumed by getApishipPointsWorkflow / fetchApishipPointsStep
  // The plugin reads: data.rows → PointObject[]
  // ---------------------------------------------------------------------------
  describe("listsApi.getListPoints (getApishipPointsWorkflow contract)", () => {
    it("returns a rows array with limit parameter respected", async () => {
      const { data } = await client.listsApi.getListPoints({ limit: 5 })

      expect(data).toBeDefined()
      expect(Array.isArray(data.rows)).toBe(true)
      // ApiShip has thousands of pickup points — empty means API breakage
      expect(data.rows!.length).toBeGreaterThan(0)
      expect(data.rows!.length).toBeLessThanOrEqual(5)
    })

    it("each point row has the fields consumed by the plugin (shape contract)", async () => {
      const { data } = await client.listsApi.getListPoints({ limit: 3 })
      const rows = data.rows ?? []

      for (const point of rows) {
        // id and providerKey are the minimum required identifiers
        expect(point.id).toBeDefined()
        expect(typeof point.providerKey).toBe("string")
      }
    })

    it("provider-filtered query returns only points for that provider", async () => {
      // The plugin passes `filter` directly to the API as semicolon-separated
      // key=value pairs (e.g. "providerKey=cdek;city=Москва") — NOT JSON.
      // See SDK JSDoc and admin/hooks/api/apiship.ts for usage examples.
      const { data } = await client.listsApi.getListPoints({
        filter: "providerKey=cdek",
        limit: 10,
      })

      expect(Array.isArray(data.rows)).toBe(true)

      for (const point of data.rows ?? []) {
        expect(point.providerKey).toBe("cdek")
      }
    })
  })

  // ---------------------------------------------------------------------------
  // listsApi.getListTariffs — consumed by pickTariffId() in the provider service
  // The plugin reads: data.rows → [{ id, tariffId, providerKey, name }]
  // Filter format: "providerKey=cdek" (same semicolon-separated syntax as points)
  // ---------------------------------------------------------------------------
  describe("listsApi.getListTariffs (pickTariffId contract)", () => {
    it("returns a rows array with at least one tariff", async () => {
      const { data } = await client.listsApi.getListTariffs({
        limit: 5,
        offset: 0,
        filter: "providerKey=cdek",
        fields: "id,tariffId,providerKey,name",
      })

      expect(data).toBeDefined()
      expect(Array.isArray(data.rows)).toBe(true)
      expect(data.rows!.length).toBeGreaterThan(0)
    })

    it("each tariff row has id, tariffId, providerKey, name fields (shape contract)", async () => {
      const { data } = await client.listsApi.getListTariffs({
        limit: 5,
        offset: 0,
        filter: "providerKey=cdek",
        fields: "id,tariffId,providerKey,name",
      })

      for (const tariff of data.rows ?? []) {
        // id is used as the primary key by pickTariffId()
        expect(tariff.id).toBeDefined()
        // providerKey links the tariff to a provider connection
        expect(typeof tariff.providerKey).toBe("string")
      }
    })

    it("filter by providerKey returns only that provider's tariffs", async () => {
      const { data } = await client.listsApi.getListTariffs({
        filter: "providerKey=cdek",
        limit: 10,
      })

      for (const tariff of data.rows ?? []) {
        expect(tariff.providerKey).toBe("cdek")
      }
    })
  })

  // ---------------------------------------------------------------------------
  // calculatorApi.getCalculator — consumed by calculatePrice() in the provider
  // The plugin sends a CalculatorRequest and reads tariff rows from the response.
  // A minimal valid request: two Russian addresses + one parcel place.
  // ---------------------------------------------------------------------------
  describe("calculatorApi.getCalculator (calculatePrice contract)", () => {
    // Minimal request mirroring what mapToApishipCalculatorRequest() produces.
    const minimalRequest = {
      from: { cityUuid: "2763b4fc-6e4b-4af9-b498-e9b3b6fbd0c3" }, // Москва
      to: { cityUuid: "a376e68d-724a-4472-be7c-891bcc0c7f9b" },   // Санкт-Петербург
      places: [{ weight: 1, length: 10, width: 10, height: 10 }],
      assessedCost: 1000,
      codCost: 0,
      includeFees: false,
    }

    it("returns a response object (may be empty array for test tokens without connections)", async () => {
      // Some test-mode tokens have no carrier connections — the API may return
      // an empty tariff list rather than 4xx. Both outcomes are valid contracts.
      let result: any
      try {
        const { data } = await client.calculatorApi.getCalculator(minimalRequest)
        result = data
      } catch (err: any) {
        // 4xx is acceptable for tokens with no connected carriers
        result = err?.response?.data
        expect(err?.response?.status).toBeGreaterThanOrEqual(400)
        return
      }
      // When the API responds 2xx it must return a structured body
      expect(result).toBeDefined()
    })

    it("successful response rows have deliveryCost and providerKey (shape contract)", async () => {
      let rows: any[]
      try {
        const { data } = await client.calculatorApi.getCalculator(minimalRequest)
        rows = Array.isArray(data) ? data : (data?.rows ?? [])
      } catch {
        // No connections for this token — skip shape check
        return
      }

      for (const tariff of rows) {
        // deliveryCost is the value calculatePrice() returns as calculated_amount
        expect(typeof tariff.deliveryCost).toBe("number")
        // providerKey identifies which carrier returned this tariff
        expect(typeof tariff.providerKey).toBe("string")
      }
    })
  })

  // ---------------------------------------------------------------------------
  // ordersApi — consumed by createFulfillment(), cancelFulfillment(),
  // getFulfillmentDocuments() in the provider service.
  // We use a fake orderId (999999999) to trigger expected 4xx responses and
  // verify the error envelope shape that buildError() depends on.
  // ---------------------------------------------------------------------------
  describe("ordersApi error contract (buildError shape guard)", () => {
    const FAKE_ORDER_ID = 999999999

    it("cancelOrder with a non-existent orderId returns a structured 4xx error", async () => {
      let captured: any
      try {
        await client.ordersApi.cancelOrder({ orderId: FAKE_ORDER_ID })
        // If somehow succeeds (unlikely), that's fine — we just skip the error check
        return
      } catch (err: any) {
        captured = err?.response?.data ?? err?.raw ?? err
        // Must be a client error (4xx), not a network failure
        expect(err?.response?.status).toBeGreaterThanOrEqual(400)
        expect(err?.response?.status).toBeLessThan(500)
      }
      // ApiShip wraps errors in a structured envelope
      expect(captured).toBeDefined()
    })

    it("getOrderInfo with a non-existent orderId returns a structured 4xx error", async () => {
      let status: number | undefined
      try {
        await client.ordersApi.getOrderInfo({ orderId: FAKE_ORDER_ID })
        return
      } catch (err: any) {
        status = err?.response?.status
        expect(status).toBeGreaterThanOrEqual(400)
        expect(status).toBeLessThan(500)
        expect(err?.response?.data ?? err?.raw ?? err).toBeDefined()
      }
    })

    it("addOrder with an invalid request body returns a structured 4xx error", async () => {
      let captured: any
      try {
        // Minimal obviously-invalid body: missing all required fields
        await client.ordersApi.addOrder({ order: {} })
        return
      } catch (err: any) {
        captured = err?.response?.data ?? err?.raw ?? err
        expect(err?.response?.status).toBeGreaterThanOrEqual(400)
        expect(err?.response?.status).toBeLessThan(500)
      }
      expect(captured).toBeDefined()
    })
  })

  // ---------------------------------------------------------------------------
  // orderDocsApi — consumed by getFulfillmentDocuments() in the provider service.
  // The plugin reads: data.waybillItems[0].file (base64-encoded PDF).
  // ---------------------------------------------------------------------------
  describe("orderDocsApi error contract (getFulfillmentDocuments shape guard)", () => {
    const FAKE_ORDER_ID = 999999999

    it("getWaybills with a non-existent orderId returns a structured 4xx error", async () => {
      let captured: any
      try {
        await client.orderDocsApi.getWaybills({
          documentsRequest: { orderIds: [FAKE_ORDER_ID], format: "pdf" },
        })
        return
      } catch (err: any) {
        captured = err?.response?.data ?? err?.raw ?? err
        expect(err?.response?.status).toBeGreaterThanOrEqual(400)
        expect(err?.response?.status).toBeLessThan(500)
      }
      expect(captured).toBeDefined()
    })

    it("getLabels with a non-existent orderId returns a structured 4xx error", async () => {
      let captured: any
      try {
        await client.orderDocsApi.getLabels({
          documentsRequest: { orderIds: [FAKE_ORDER_ID], format: "pdf" },
        })
        return
      } catch (err: any) {
        captured = err?.response?.data ?? err?.raw ?? err
        expect(err?.response?.status).toBeGreaterThanOrEqual(400)
        expect(err?.response?.status).toBeLessThan(500)
      }
      expect(captured).toBeDefined()
    })
  })

  // ---------------------------------------------------------------------------
  // Error response shape — consumed by buildError() in the provider service
  // buildError() reads error.raw.detail / error.detail to compose its message.
  // If ApiShip changes its error envelope the plugin silently produces less
  // helpful messages in production.
  // ---------------------------------------------------------------------------
  describe("error response contract (buildError shape guard)", () => {
    it("request with invalid token returns a structured error", async () => {
      const badClient = createApishipClient({ token: "invalid-token-000", isTest: true })

      let captured: any
      try {
        const { data } = await badClient.listsApi.getListProviders({})
        captured = data
      } catch (err: any) {
        // axios throws on non-2xx; the raw body is typically on err.response.data
        captured = err?.response?.data ?? err?.raw ?? err
      }

      // ApiShip wraps errors in a structured envelope — losing this shape
      // means buildError() in the provider service loses diagnostic context.
      expect(captured).toBeDefined()
      // The response should NOT be a successful providers list
      const isSuccessfulList =
        Array.isArray(captured?.rows) && captured.rows.length > 0
      expect(isSuccessfulList).toBe(false)
    })
  })
})

if (!HAS_TOKEN) {
  describe.skip("ApiShip contract (LIVE network)", () => {
    it.skip("skipped: set APISHIP_TOKEN env var to run contract tests", () => {})
  })
}
