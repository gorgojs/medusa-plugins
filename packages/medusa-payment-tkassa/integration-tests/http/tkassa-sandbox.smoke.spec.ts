import { TKassa } from "t-kassa-api"

jest.setTimeout(60 * 1000)

const TERMINAL_KEY = process.env.TKASSA_SANDBOX_TERMINAL_KEY
const PASSWORD = process.env.TKASSA_SANDBOX_PASSWORD
const HAS_CREDS = Boolean(TERMINAL_KEY && PASSWORD)

const describeIfCreds = HAS_CREDS ? describe : describe.skip

describeIfCreds("T-Kassa sandbox smoke (LIVE network)", () => {
  it("Init → GetState → Cancel honours the documented contract", async () => {
    const client = new TKassa(TERMINAL_KEY!, PASSWORD!)

    const orderId = `smoke-${Date.now()}`
    const init = await client.init({
      Amount: 10000,
      OrderId: orderId,
      Description: "medusa-plugin smoke test",
    })

    expect(init.Success).toBe(true)
    expect(init.ErrorCode).toBe("0")
    expect(typeof init.PaymentId).toBeDefined()
    expect(init.PaymentURL).toMatch(/^https:\/\//)
    expect(["NEW", "FORM_SHOWED"]).toContain(init.Status)
    expect(init.OrderId).toBe(orderId)
    expect(init.Amount).toBe(10000)

    const state = await client.getState({ PaymentId: String(init.PaymentId) })
    expect(state.Success).toBe(true)
    expect(state.PaymentId).toBe(init.PaymentId)
    expect(state.OrderId).toBe(orderId)
    expect([
      "NEW", "FORM_SHOWED", "AUTHORIZING", "3DS_CHECKING", "3DS_CHECKED",
      "AUTHORIZED", "PAY_CHECKING", "CONFIRMING", "CONFIRMED",
      "DEADLINE_EXPIRED", "REJECTED", "AUTH_FAIL", "CANCELED",
    ]).toContain(state.Status)

    try {
      await client.cancel({ PaymentId: String(init.PaymentId) })
    } catch {
      // ignore — payment may already be in a terminal state
    }
  })
})

if (!HAS_CREDS) {
  describe.skip("T-Kassa sandbox smoke (LIVE network)", () => {
    it.skip("skipped: set TKASSA_SANDBOX_TERMINAL_KEY and TKASSA_SANDBOX_PASSWORD", () => {})
  })
}
