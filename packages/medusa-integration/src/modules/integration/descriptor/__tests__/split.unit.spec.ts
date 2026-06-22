import { z } from "zod"
import { describe, expect, it } from "@jest/globals"
import type { IntegrationDescriptor } from "../define"
import { validateAndSplit } from "../split"

const descriptor: IntegrationDescriptor = {
  module: "payment",
  pluginId: "demo",
  instanceId: null,
  displayName: { en: "Demo", ru: "Демо" },
  sections: [{ id: "general", title: { en: "General", ru: "Общее" } }],
  schema: z.object({
    login: z.string().min(1).meta({ section: "general", control: "text", label: { en: "Login", ru: "Логин" } }),
    password: z.string().min(1).meta({ section: "general", control: "secret", secret: true, label: { en: "Pw", ru: "Пароль" } }),
  }),
}

describe("validateAndSplit", () => {
  it("splits secrets from options", () => {
    const { options, secrets } = validateAndSplit(descriptor, { login: "u", password: "p" })
    expect(options).toEqual({ login: "u" })
    expect(secrets).toEqual({ password: "p" })
  })
  it("throws on invalid payload", () => {
    expect(() => validateAndSplit(descriptor, { login: "", password: "p" })).toThrow()
  })
})
