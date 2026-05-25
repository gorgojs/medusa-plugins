/**
 * Live consumer-driven contract tests against T-Kassa (https://securepay.tinkoff.ru).
 *
 * Purpose: catch breaking changes in the T-Kassa API (renamed/removed fields,
 * status changes, schema diffs in success and error responses) that mocked
 * unit/contract tests by design cannot detect. Validates request/response
 * shapes for the endpoints the plugin actually depends on.
 *
 * These tests are OPT-IN. They are skipped unless both env vars are set:
 *   CI_TKASSA_TERMINAL_KEY
 *   CI_TKASSA_PASSWORD
 */
import { TKassa } from "t-kassa-api"

jest.setTimeout(60 * 1000)

const TERMINAL_KEY = process.env.CI_TKASSA_TERMINAL_KEY
const PASSWORD = process.env.CI_TKASSA_PASSWORD
const HAS_CREDS = Boolean(TERMINAL_KEY && PASSWORD)

const describeIfCreds = HAS_CREDS ? describe : describe.skip

// Set of statuses currently mapped in PaymentStatusesMap. If T-Kassa adds a
// new lifecycle status, getPaymentStatus / getWebhookActionAndData fall back
// to ERROR — this guard surfaces that.
const KNOWN_STATUSES = [
  "NEW", "FORM_SHOWED", "AUTHORIZING", "3DS_CHECKING", "3DS_CHECKED",
  "AUTHORIZED", "PAY_CHECKING", "CONFIRMING", "CONFIRMED",
  "REVERSING", "PARTIAL_REVERSED", "REVERSED",
  "REFUNDING", "PARTIAL_REFUNDED", "REFUNDED",
  "DEADLINE_EXPIRED", "REJECTED", "AUTH_FAIL", "CANCELED",
] as const

describeIfCreds("T-Kassa contract (LIVE network)", () => {
  let client: TKassa

  beforeAll(() => {
    client = new TKassa(TERMINAL_KEY!, PASSWORD!)
  })

  // Best-effort cleanup; not all states accept Cancel, so don't fail the test.
  async function tryCancel(paymentId: string | number | undefined) {
    if (!paymentId) return
    try {
      await client.cancel({ PaymentId: String(paymentId) })
    } catch {
      // ignore — payment may already be in a terminal state
    }
  }

  it("Init → GetState → Cancel honours the documented lifecycle contract", async () => {
    const orderId = `contract-lifecycle-${Date.now()}`
    const init = await client.init({
      Amount: 10000,
      OrderId: orderId,
      Description: "medusa-plugin contract test",
    })

    expect(init.Success).toBe(true)
    expect(init.ErrorCode).toBe("0")
    expect(init.PaymentId).toBeDefined()
    expect(init.PaymentURL).toMatch(/^https:\/\//)
    expect(["NEW", "FORM_SHOWED"]).toContain(init.Status)
    expect(init.OrderId).toBe(orderId)
    expect(init.Amount).toBe(10000)

    const state = await client.getState({ PaymentId: String(init.PaymentId) })
    expect(state.Success).toBe(true)
    expect(state.PaymentId).toBe(init.PaymentId)
    expect(state.OrderId).toBe(orderId)
    expect(KNOWN_STATUSES).toContain(state.Status as any)

    await tryCancel(init.PaymentId)
  })

  it("Init with FFD 1.05 Receipt is accepted (Receipt schema contract)", async () => {
    // High-risk surface: FNS-driven Receipt schema changes break production
    // payments silently. Validates that T-Kassa still accepts the exact shape
    // generateReceipt produces.
    const orderId = `contract-receipt-${Date.now()}`
    const init = await client.init({
      Amount: 10000,
      OrderId: orderId,
      Description: "medusa-plugin receipt contract test",
      Receipt: {
        FfdVersion: "1.05",
        Taxation: "osn",
        Email: "buyer@example.com",
        Phone: "+71234567890",
        Items: [
          {
            Name: "Contract test item",
            Price: 10000,
            Quantity: 1,
            Amount: 10000,
            Tax: "none",
            PaymentMethod: "full_payment",
            PaymentObject: "commodity",
          },
        ],
      },
    })

    // Schema breakage surfaces as Success:false + receipt-specific ErrorCode.
    expect(init.Success).toBe(true)
    expect(init.ErrorCode).toBe("0")
    expect(["NEW", "FORM_SHOWED"]).toContain(init.Status)

    await tryCancel(init.PaymentId)
  })

  it("Init with PayType='T' (two-step) is accepted (PayType contract)", async () => {
    const orderId = `contract-paytype-${Date.now()}`
    const init = await client.init({
      Amount: 10000,
      OrderId: orderId,
      Description: "medusa-plugin two-step contract test",
      PayType: "T",
    })

    expect(init.Success).toBe(true)
    expect(init.ErrorCode).toBe("0")
    expect(["NEW", "FORM_SHOWED"]).toContain(init.Status)
    expect(init.PaymentURL).toMatch(/^https:\/\//)

    await tryCancel(init.PaymentId)
  })

  it("GetState on a non-existent PaymentId returns a structured error (error response contract)", async () => {
    // The plugin's buildError reads error.raw.detail / error.detail to compose
    // its message, so the shape of T-Kassa error responses (Success: false +
    // ErrorCode + Message) is part of the contract. If T-Kassa changes error
    // shape, buildError silently produces less helpful messages in production.
    const FAKE_ID = "0"

    let captured: any
    try {
      // Path A: t-kassa-api returns the body even for Success:false responses.
      captured = await client.getState({ PaymentId: FAKE_ID })
    } catch (e: any) {
      // Path B: t-kassa-api throws on non-2xx and exposes the parsed body as `raw`.
      captured = e?.raw ?? e
    }

    expect(captured.Success).toBe(false)
    expect(typeof captured.ErrorCode).toBe("string")
    expect(captured.ErrorCode).not.toBe("0")
    // T-Kassa includes a human-readable Message on error responses; the plugin
    // doesn't read it directly, but its absence indicates an API regression.
    expect(captured.Message ?? captured.message).toBeDefined()
  })
})

if (!HAS_CREDS) {
  describe.skip("T-Kassa contract (LIVE network)", () => {
    it.skip("skipped: set CI_TKASSA_TERMINAL_KEY and CI_TKASSA_PASSWORD", () => {})
  })
}
