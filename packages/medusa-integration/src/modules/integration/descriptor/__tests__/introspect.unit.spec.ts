import { z } from "zod"
import { describe, expect, it } from "@jest/globals"
import { introspectDescriptor, secretFieldNames } from "../introspect"
import { defineIntegration } from "../define"

const descriptor = defineIntegration({
  pluginKind: "payment",
  pluginId: "demo",
  displayName: { en: "Demo", ru: "Демо" },
  sections: [
    { id: "general", title: { en: "General", ru: "Общее" } },
    { id: "behavior", title: { en: "Behavior", ru: "Поведение" } },
  ],
  schema: z.object({
    login: z.string().meta({ section: "general", control: "text", label: { en: "Login", ru: "Логин" } }),
    password: z.string().meta({ section: "general", control: "secret", secret: true, label: { en: "Password", ru: "Пароль" } }),
    test_mode: z.boolean().default(false).meta({ section: "behavior", control: "switch", label: { en: "Test", ru: "Тест" } }),
  }),
})

describe("introspect", () => {
  it("groups fields by section in declared order", () => {
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

  it("lists secret field names", () => {
    expect(secretFieldNames(descriptor)).toEqual(["password"])
  })

  it("is JSON-serializable (no functions/zod refs)", () => {
    const ui = introspectDescriptor(descriptor)
    expect(() => JSON.stringify(ui)).not.toThrow()
  })
})
