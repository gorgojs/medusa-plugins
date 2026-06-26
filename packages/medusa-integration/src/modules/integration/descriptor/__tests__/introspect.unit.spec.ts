import { z } from "zod"
import { describe, expect, it } from "@jest/globals"
import { introspectDescriptor, secretFieldNames } from "../introspect"
import type { IntegrationDescriptor } from "../define"

const descriptor: IntegrationDescriptor = {
  module: "payment",
  pluginId: "demo",
  instanceId: null,
  displayName: { en: "Demo", ru: "Демо" },
  schema: z.object({}),
  sections: [
    {
      id: "general",
      title: { en: "General", ru: "Общее" },
      schema: z.object({
        login: z.string().meta({ control: "text", label: { en: "Login", ru: "Логин" } }),
        password: z.string().meta({ control: "secret", secret: true, label: { en: "Password", ru: "Пароль" } }),
      }),
    },
    {
      id: "behavior",
      title: { en: "Behavior", ru: "Поведение" },
      schema: z.object({
        test_mode: z.boolean().default(false).meta({ control: "switch", label: { en: "Test", ru: "Тест" } }),
      }),
    },
  ],
}

describe("introspect", () => {
  it("groups fields by their declaring section in order", () => {
    const ui = introspectDescriptor(descriptor)
    expect(ui.sections.map((s) => s.id)).toEqual(["general", "behavior"])
    expect(ui.sections[0].fields.map((f) => f.name)).toEqual(["login", "password"])
    expect(ui.sections[1].fields.map((f) => f.name)).toEqual(["test_mode"])
  })

  it("carries control, label and secret flags", () => {
    const ui = introspectDescriptor(descriptor)
    const pw = ui.sections[0].fields.find((f) => f.name === "password")!
    expect(pw.control).toBe("secret")
    expect(pw.secret).toBe(true)
    expect(pw.label).toEqual({ en: "Password", ru: "Пароль" })
  })

  it("marks non-optional fields as required", () => {
    const ui = introspectDescriptor(descriptor)
    expect(ui.sections[0].fields.find((f) => f.name === "login")!.required).toBe(true)
    expect(ui.sections[1].fields.find((f) => f.name === "test_mode")!.required).toBe(false)
  })

  it("lists secret field names across sections", () => {
    expect(secretFieldNames(descriptor)).toEqual(["password"])
  })

  it("is JSON-serializable (no functions/zod refs)", () => {
    const ui = introspectDescriptor(descriptor)
    expect(() => JSON.stringify(ui)).not.toThrow()
  })
})
