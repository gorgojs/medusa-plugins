/**
 * Live consumer-driven contract tests against YooKassa (https://api.yookassa.ru/v3).
 *
 * Purpose: catch breaking changes in the YooKassa API (renamed/removed fields,
 * status changes, schema diffs in success and error responses) that mocked
 * unit/contract tests by design cannot detect. Validates request/response
 * shapes for the endpoints the plugin actually depends on.
 *
 * These tests are OPT-IN. They are skipped unless both env vars are set:
 *   CI_YOOKASSA_SHOP_ID
 *   CI_YOOKASSA_SECRET_KEY
 *
 * NOTE: @a2seven/yoo-checkout wraps axios errors via errorFactory:
 *   Object.assign(new ErrorResponse(), axiosError)
 * The YooKassa error body (type/code/description) lives in e.response.data,
 * not on the top-level thrown object.
 */
import { YooCheckout } from "@a2seven/yoo-checkout"

jest.setTimeout(60 * 1000)

const SHOP_ID = process.env.CI_YOOKASSA_SHOP_ID
const SECRET_KEY = process.env.CI_YOOKASSA_SECRET_KEY
const HAS_CREDS = Boolean(SHOP_ID && SECRET_KEY)

const describeIfCreds = HAS_CREDS ? describe : describe.skip

// Set of statuses currently mapped in the plugin. If YooKassa introduces a new
// lifecycle status, getPaymentStatus / getWebhookActionAndData fall back to
// PENDING — this guard surfaces that.
const KNOWN_STATUSES = [
  "pending",
  "waiting_for_capture",
  "succeeded",
  "canceled",
] as const

describeIfCreds("YooKassa contract (LIVE network)", () => {
  let client: YooCheckout

  beforeAll(() => {
    client = new YooCheckout({ shopId: SHOP_ID!, secretKey: SECRET_KEY! })
  })

  // Best-effort cleanup; not all states accept cancel, so don't fail the test.
  async function tryCancel(paymentId: string | undefined) {
    if (!paymentId) return
    try {
      await client.cancelPayment(paymentId)
    } catch {
      // ignore — payment may already be in a terminal state
    }
  }

  // The SDK wraps AxiosError via Object.assign(new ErrorResponse(), axiosError).
  // The YooKassa error body lives at e.response.data, not on the top-level object.
  // This helper re-throws with the actual API error message so failures are readable.
  async function sdkCall<T>(fn: () => Promise<T>): Promise<T> {
    try {
      return await fn()
    } catch (e: any) {
      const body = e?.response?.data
      throw new Error(
        body
          ? `YooKassa API error ${e.response.status}: [${body.code}] ${body.description}`
          : `SDK threw without response: ${JSON.stringify(e)}`
      )
    }
  }

  // Shared minimal receipt used when the shop has mandatory receipt generation.
  const minimalReceipt = {
    customer: { email: "buyer@example.com" },
    items: [
      {
        description: "Contract test item",
        quantity: "1",
        amount: { value: "10.00", currency: "RUB" },
        vat_code: 1,
        payment_subject: "commodity",
        payment_mode: "full_payment",
      },
    ],
  }

  it("createPayment → getPayment → cancelPayment honours the documented lifecycle contract", async () => {
    const idempotencyKey = `contract-lifecycle-${Date.now()}`
    const payment = await sdkCall(() =>
      client.createPayment(
        {
          amount: { value: "10.00", currency: "RUB" },
          confirmation: { type: "redirect", return_url: "https://example.com/return" },
          description: "medusa-plugin contract test",
          metadata: { session_id: idempotencyKey },
          receipt: minimalReceipt as any,
        },
        idempotencyKey
      )
    )

    expect(payment.id).toBeDefined()
    expect(payment.status).toBeDefined()
    expect(KNOWN_STATUSES).toContain(payment.status as any)
    expect(payment.amount.value).toBe("10.00")
    expect(payment.amount.currency).toBe("RUB")
    expect(payment.confirmation).toBeDefined()
    expect((payment.confirmation as any).confirmation_url).toMatch(/^https:\/\//)

    const fetched = await sdkCall(() => client.getPayment(payment.id))
    expect(fetched.id).toBe(payment.id)
    expect(fetched.amount.value).toBe("10.00")
    expect(KNOWN_STATUSES).toContain(fetched.status as any)

    await tryCancel(payment.id)
  })

  it("createPayment with receipt is accepted (receipt schema contract)", async () => {
    // High-risk surface: FNS-driven receipt schema changes break production
    // payments silently. Validates that YooKassa still accepts the exact shape
    // generateReceipt produces.
    const idempotencyKey = `contract-receipt-${Date.now()}`
    const payment = await sdkCall(() =>
      client.createPayment(
        {
          amount: { value: "10.00", currency: "RUB" },
          confirmation: { type: "redirect", return_url: "https://example.com/return" },
          description: "medusa-plugin receipt contract test",
          receipt: {
            customer: {
              email: "buyer@example.com",
              phone: "+71234567890",
              full_name: "Test Buyer",
            },
            items: [
              {
                description: "Contract test item",
                quantity: "1",
                amount: { value: "10.00", currency: "RUB" },
                vat_code: 1,
                payment_subject: "commodity",
                payment_mode: "full_payment",
              },
            ],
          } as any,
        },
        idempotencyKey
      )
    )

    // Schema breakage surfaces as an error response from YooKassa.
    expect(payment.id).toBeDefined()
    expect(KNOWN_STATUSES).toContain(payment.status as any)

    await tryCancel(payment.id)
  })

  it("getPayment on a non-existent ID returns a structured error (error response contract)", async () => {
    // The plugin's buildError reads error.response?.data?.code / description to
    // compose its message. If YooKassa changes the error response shape,
    // buildError silently produces less helpful messages in production.
    //
    // SDK error shape: @a2seven/yoo-checkout throws
    //   Object.assign(new ErrorResponse(), axiosError)
    // so the YooKassa error body lives at e.response.data, not on the top level.
    const FAKE_ID = "00000000-0000-0000-0000-000000000000"

    let errorData: any
    try {
      await client.getPayment(FAKE_ID)
    } catch (e: any) {
      errorData = e?.response?.data
    }

    expect(errorData).toBeDefined()
    // YooKassa error responses carry type, id, code, description.
    expect(errorData.type).toBe("error")
    expect(typeof errorData.code).toBe("string")
    expect(errorData.code).not.toBe("")
    expect(errorData.description).toBeDefined()
  })
})

if (!HAS_CREDS) {
  describe.skip("YooKassa contract (LIVE network)", () => {
    it.skip("skipped: set CI_YOOKASSA_SHOP_ID and CI_YOOKASSA_SECRET_KEY", () => {})
  })
}
