import { z } from "zod"
import { describe, expect, it } from "@jest/globals"
import type { IntegrationDescriptor } from "../define"
import { splitSecrets } from "../split"

const descriptor: IntegrationDescriptor = {
  module: "payment",
  pluginId: "demo",
  instanceId: null,
  displayName: { en: "Demo", ru: "Демо" },
  options: z.object({}),
  sections: [
    {
      id: "general",
      title: { en: "General", ru: "Общее" },
      options: z.object({
        login: z.string().min(1).meta({ control: "text", label: { en: "Login", ru: "Логин" } }),
        password: z.string().min(1).meta({ control: "secret", secret: true, label: { en: "Pw", ru: "Пароль" } }),
      }),
    },
  ],
}

describe("splitSecrets", () => {
  it("splits secrets from options by field metadata", () => {
    const { options, secrets } = splitSecrets(descriptor, { login: "u", password: "p" })
    expect(options).toEqual({ login: "u" })
    expect(secrets).toEqual({ password: "p" })
  })

  it("does not validate (splitting is independent of validity)", () => {
    expect(() => splitSecrets(descriptor, { login: "", password: "p" })).not.toThrow()
  })
})
