// Settings validation moved off the payment provider's `validateOptions` and onto the
// integration descriptor's zod schema (validated on write, when an admin saves settings).
// These tests exercise that schema — the single source of truth for T-Kassa settings.
import TkassaIntegrationProvider from "../services/tkassa-integration"

const schema = new TkassaIntegrationProvider().getDescriptor().options

const validBase = {
  terminalKey: "TestTerminalKey",
  password: "test_password",
}

const validReceipt = {
  ...validBase,
  useReceipt: true,
  ffdVersion: "1.05",
  taxation: "osn",
  taxItemDefault: "none",
  taxShippingDefault: "none",
}

const issuePaths = (input: unknown): string[] => {
  const res = schema.safeParse(input)
  return res.success ? [] : res.error.issues.map((i) => String(i.path[0]))
}

describe("T-Kassa integration descriptor schema", () => {
  describe("required credentials", () => {
    it("rejects a missing terminalKey", () => {
      expect(issuePaths({ ...validBase, terminalKey: undefined })).toContain("terminalKey")
    })

    it("rejects an empty terminalKey", () => {
      expect(issuePaths({ ...validBase, terminalKey: "" })).toContain("terminalKey")
    })

    it("rejects a missing password", () => {
      expect(issuePaths({ ...validBase, password: undefined })).toContain("password")
    })

    it("accepts minimal valid settings and applies defaults", () => {
      const res = schema.safeParse(validBase)
      expect(res.success).toBe(true)
      if (res.success) {
        // capture defaults to true, useReceipt to false
        expect(res.data.capture).toBe(true)
        expect(res.data.useReceipt).toBe(false)
      }
    })
  })

  describe("receipt sub-options (only required when useReceipt is true)", () => {
    it("does not require receipt fields when useReceipt is omitted (defaults to false)", () => {
      expect(schema.safeParse(validBase).success).toBe(true)
    })

    it("does not require receipt fields when useReceipt is explicitly false", () => {
      expect(schema.safeParse({ ...validBase, useReceipt: false }).success).toBe(true)
    })

    it("accepts fully-configured receipt settings", () => {
      expect(schema.safeParse(validReceipt).success).toBe(true)
    })

    it.each<[string, string]>([
      ["ffdVersion", "ffdVersion"],
      ["taxation", "taxation"],
      ["taxItemDefault", "taxItemDefault"],
      ["taxShippingDefault", "taxShippingDefault"],
    ])("requires %s when useReceipt is true", (field, path) => {
      expect(issuePaths({ ...validReceipt, [field]: undefined })).toContain(path)
    })

    it.each<[string, Record<string, unknown>]>([
      ["taxation invalid", { ...validReceipt, taxation: "bogus" }],
      ["taxItemDefault invalid", { ...validReceipt, taxItemDefault: "vat999" }],
      ["taxShippingDefault invalid", { ...validReceipt, taxShippingDefault: "vat999" }],
      ["ffdVersion invalid", { ...validReceipt, ffdVersion: "2.0" }],
    ])("rejects when %s", (_name, input) => {
      expect(schema.safeParse(input).success).toBe(false)
    })
  })
})
