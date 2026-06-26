import { z } from "zod"
import { describe, expect, it } from "@jest/globals"
import type { IntegrationDescriptor } from "../define"
import { collectValidationIssues, isDescriptorComplete, validateSection } from "../validate"

const descriptor: IntegrationDescriptor = {
  module: "payment",
  pluginId: "demo",
  instanceId: null,
  displayName: { en: "Demo", ru: "Демо" },
  schema: z.object({}),
  sections: [
    {
      id: "credentials",
      title: { en: "Credentials", ru: "Доступы" },
      schema: z.object({
        terminalKey: z.string().min(1).meta({ control: "text", label: { en: "T", ru: "Т" } }),
        password: z.string().min(1).meta({ control: "secret", secret: true, label: { en: "P", ru: "П" } }),
      }),
    },
    {
      id: "behavior",
      title: { en: "Behavior", ru: "Поведение" },
      schema: z.object({
        capture: z.boolean().default(true).meta({ control: "switch", label: { en: "C", ru: "С" } }),
      }),
    },
  ],
  // Cross-section rule: behavior.capture requires credentials.terminalKey to be set.
  validate: (full, ctx) => {
    if (full.capture && !full.terminalKey) {
      ctx.addIssue({ path: ["terminalKey"], message: "terminalKey required when capture is on" })
    }
  },
}

describe("validateSection", () => {
  it("validates only its own fields and applies defaults", () => {
    const res = validateSection(descriptor.sections[1], {})
    expect(res.success).toBe(true)
    if (res.success) expect(res.data).toEqual({ capture: true })
  })

  it("reports field issues for the edited section", () => {
    const res = validateSection(descriptor.sections[0], { terminalKey: "", password: "p" })
    expect(res.success).toBe(false)
    if (!res.success) expect(res.issues.map((i) => i.path)).toContain("terminalKey")
  })
})

describe("isDescriptorComplete", () => {
  it("is incomplete when a required field (any section) is missing", () => {
    expect(isDescriptorComplete(descriptor, { terminalKey: "t" })).toBe(false) // password missing
  })

  it("is complete when all required fields are present and rules pass", () => {
    expect(isDescriptorComplete(descriptor, { terminalKey: "t", password: "p" })).toBe(true)
  })

  it("runs the cross-section validate rule", () => {
    // capture defaults to true via the section schema; terminalKey present satisfies it.
    const issues = collectValidationIssues(descriptor, { password: "p", capture: true })
    expect(issues.some((i) => i.path === "terminalKey")).toBe(true)
  })
})
