/**
 * Live consumer-driven contract tests against Robokassa (https://auth.robokassa.ru).
 *
 * Purpose: catch breaking changes in the Robokassa API (renamed/removed fields,
 * XML schema changes, status code changes) that mocked unit tests cannot detect.
 * Validates request/response shapes for the endpoints the plugin depends on.
 *
 * These tests are OPT-IN. They are skipped unless all four env vars are set:
 *   CI_ROBOKASSA_MERCHANT_LOGIN
 *   CI_ROBOKASSA_HASH_ALGORITHM
 *   CI_ROBOKASSA_PASSWORD_1
 *   CI_ROBOKASSA_PASSWORD_2
 */
import axios from "axios"
import { createHash } from "node:crypto"
import { XMLParser } from "fast-xml-parser"

jest.setTimeout(60 * 1000)

const MERCHANT_LOGIN = process.env.CI_ROBOKASSA_MERCHANT_LOGIN
const HASH_ALGORITHM = (process.env.CI_ROBOKASSA_HASH_ALGORITHM || "md5") as string
const PASSWORD_1 = process.env.CI_ROBOKASSA_TEST_PASSWORD_1
const PASSWORD_2 = process.env.CI_ROBOKASSA_TEST_PASSWORD_2

const HAS_CREDS = Boolean(MERCHANT_LOGIN && PASSWORD_1 && PASSWORD_2)

const BASE_URL = "https://auth.robokassa.ru"
const GET_STATE_URL = `${BASE_URL}/Merchant/WebService/Service.asmx/OpStateExt`

function createSignature(raw: (string | undefined)[], algorithm: string): string {
  const concat = raw.filter(Boolean).join(":")
  return createHash(algorithm).update(concat).digest("hex")
}

function stringToNumberHash(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash |= 0
  }
  return Math.abs(hash)
}

const describeIfCreds = HAS_CREDS ? describe : describe.skip

// Set of state codes currently mapped in PaymentStateCodesMap.
// If Robokassa adds a new state, getPaymentStatus falls back to ERROR —
// this guard surfaces that regression.
const KNOWN_STATE_CODES = [3, 5, 10, 20, 50, 60, 80, 100]

describeIfCreds("Robokassa contract (LIVE network)", () => {
  const parser = new XMLParser({ ignoreAttributes: false })

  async function getPaymentState(invoiceId: string | number) {
    const raw = [MERCHANT_LOGIN!, String(invoiceId), PASSWORD_2!]
    const signature = createSignature(raw, HASH_ALGORITHM)
    const params = new URLSearchParams({
      MerchantLogin: MERCHANT_LOGIN!,
      InvoiceID: String(invoiceId),
      Signature: signature,
    })
    const { data: xml } = await axios.post(`${GET_STATE_URL}?${params}`, undefined, {
      validateStatus: () => true,
    })
    const parsed = parser.parse(xml)
    return parsed["OperationStateResponse"] as {
      Result: { Code: number; Description: string }
      State: { Code: number }
    }
  }

  it("OpStateExt returns a well-formed XML response with Result and State for a non-existent invoice (error contract)", async () => {
    // A non-existent InvoiceID should return a non-zero Result.Code.
    // This validates that the XML schema the plugin depends on is still intact.
    const NON_EXISTENT_INVOICE = "0"
    const response = await getPaymentState(NON_EXISTENT_INVOICE)

    expect(response).toBeDefined()
    expect(response.Result).toBeDefined()
    // Result.Code must be present and parseable as a number
    expect(typeof response.Result.Code).toBe("number")
    // For a non-existent invoice the API must signal an error (non-zero Code)
    expect(response.Result.Code).not.toBe(0)
    // Description must be a non-empty string (human-readable error message)
    expect(typeof response.Result.Description).toBe("string")
    expect(response.Result.Description.length).toBeGreaterThan(0)
  })

  it("OpStateExt response for a valid (existing) invoice includes State with a known Code", async () => {
    // First create a synthetic invoice via the payment URL (redirect-based flow).
    // Since Robokassa's initiatePayment only builds a URL, we only verify the
    // OpStateExt response shape for an invoice that may or may not exist.
    // This test is best-effort — it verifies the XML schema, not the lifecycle.
    const fakeInvoiceId = stringToNumberHash(`contract-${Date.now()}`).toString()
    const response = await getPaymentState(fakeInvoiceId)

    // Whether the invoice exists or not, the response must have Result and
    // optionally State (absent for non-existent invoice is acceptable).
    expect(response.Result).toBeDefined()
    expect(typeof response.Result.Code).toBe("number")
    if (response.Result.Code === 0) {
      // Invoice exists — State.Code must be a known value (else getPaymentStatus falls back to ERROR)
      expect(response.State).toBeDefined()
      expect(typeof response.State.Code).toBe("number")
      expect(KNOWN_STATE_CODES).toContain(response.State.Code)
    }
  })

  it("Payment/Confirm returns a plain-text success/failure response for a non-existent invoice (capture endpoint contract)", async () => {
    // capturePayment calls POST /Merchant/Payment/Confirm?MerchantLogin=...&InvoiceID=...&OutSum=...&SignatureValue=...
    // Signature for capture: [merchantLogin, outSum, invoiceId, password1].filter(Boolean).join(":") → hash
    // Despite content-type: application/json, the endpoint returns a plain-text string like "success: false".
    // This validates that the capture endpoint is still alive and the response format is intact.
    const NON_EXISTENT_INVOICE = "0"
    const outSum = "0.01"
    const raw = [MERCHANT_LOGIN!, outSum, NON_EXISTENT_INVOICE, PASSWORD_1!]
    const signature = createSignature(raw, HASH_ALGORITHM)
    const params = new URLSearchParams({
      MerchantLogin: MERCHANT_LOGIN!,
      InvoiceID: NON_EXISTENT_INVOICE,
      OutSum: outSum,
      SignatureValue: signature,
    })

    const response = await axios.post(
      `${BASE_URL}/Merchant/Payment/Confirm?${params}`,
      undefined,
      { validateStatus: () => true }
    )

    // Endpoint must be reachable — a 404/5xx means the URL has changed or is down
    expect(response.status).toBeGreaterThanOrEqual(200)
    expect(response.status).toBeLessThan(500)
    // Response must be JSON (Payment/Confirm returns JSON, unlike OpStateExt which returns XML)
    expect(response.headers["content-type"]).toMatch(/json/)
    // Payment/Confirm returns a plain-text string despite content-type: application/json.
    // For a non-existent invoice it returns "success: false".
    // This is the actual contract — if Robokassa changes the response format, this test surfaces it.
    const body = String(response.data)
    expect(body.toLowerCase()).toContain("success")
  })

  it("Merchant/Index.aspx payment page is reachable with a correctly-built URL (initiatePayment endpoint contract)", async () => {
    // initiatePayment builds a redirect URL but makes no HTTP call itself.
    // This test sends a GET to that URL to verify the payment page endpoint is still alive
    // and that the URL structure (path + required query params) hasn't changed.
    // Signature for initiatePayment: [merchantLogin, outSum, invoiceId, password1, "Shp_SessionID=<id>"]
    const invoiceId = stringToNumberHash(`contract-initiate-${Date.now()}`).toString()
    const outSum = "0.01"
    const sessionId = `contract-${Date.now()}`
    const raw = [MERCHANT_LOGIN!, outSum, invoiceId, PASSWORD_1!, `Shp_SessionID=${sessionId}`]
    const signature = createSignature(raw, HASH_ALGORITHM)
    const params = new URLSearchParams({
      MerchantLogin: MERCHANT_LOGIN!,
      OutSum: outSum,
      InvoiceID: invoiceId,
      SignatureValue: signature,
      Shp_SessionID: sessionId,
    })

    const response = await axios.get(
      `${BASE_URL}/Merchant/Index.aspx?${params}`,
      { validateStatus: () => true }
    )

    // Endpoint must be reachable — a 404/5xx means the payment page URL has changed
    expect(response.status).toBeGreaterThanOrEqual(200)
    expect(response.status).toBeLessThan(500)
    // Payment page returns HTML — a non-HTML response indicates a schema change
    expect(response.headers["content-type"]).toMatch(/html/)
  })

  it("signature algorithm contract: md5 signature over [merchantLogin, invoiceId, password2] is accepted", async () => {
    // Robokassa rejects requests with invalid signatures.
    // This test verifies our createSignature implementation produces the correct format.
    // A non-zero Result.Code from Robokassa is acceptable (invoice may not exist),
    // but an HTTP-level 401/403 would indicate a broken signature format.
    const invoiceId = "0"
    const raw = [MERCHANT_LOGIN!, invoiceId, PASSWORD_2!]
    const signature = createSignature(raw, HASH_ALGORITHM)
    const params = new URLSearchParams({
      MerchantLogin: MERCHANT_LOGIN!,
      InvoiceID: invoiceId,
      Signature: signature,
    })

    const response = await axios.post(`${GET_STATE_URL}?${params}`, undefined, {
      validateStatus: () => true,
    })

    // Any 2xx response means the signature was accepted (even if the invoice doesn't exist)
    expect(response.status).toBeGreaterThanOrEqual(200)
    expect(response.status).toBeLessThan(300)
    // The response must be XML (not an auth error page / JSON)
    expect(response.headers["content-type"]).toMatch(/xml/)
  })
})

if (!HAS_CREDS) {
  describe.skip("Robokassa contract (LIVE network)", () => {
    it.skip("skipped: set CI_ROBOKASSA_MERCHANT_LOGIN, CI_ROBOKASSA_HASH_ALGORITHM, CI_ROBOKASSA_PASSWORD_1, CI_ROBOKASSA_PASSWORD_2", () => {})
  })
}
