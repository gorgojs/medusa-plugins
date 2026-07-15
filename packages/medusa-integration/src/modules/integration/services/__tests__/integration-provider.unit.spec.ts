import { describe, expect, it } from "@jest/globals"
import IntegrationProviderService from "../integration-provider"

// Minimal provider stubs — the registry only needs getIdentifier/getInstanceId/getDescriptor.
const mkProvider = (identifier: string, instanceId: string | null, withTest = false) => {
  const p: any = {
    getIdentifier: () => identifier,
    getInstanceId: () => instanceId,
    getDescriptor: () => ({
      module: "payment",
      displayName: `${identifier}.name`,
      options: {},
      sections: [],
    }),
  }
  if (withTest) p.testConnection = async () => ({ status: "ok" })
  return p
}

// Mimics the awilix cradle: container keys are `int_<identifier>[_<id>]`.
const makeRegistry = () =>
  new IntegrationProviderService({
    int_tkassa: mkProvider("tkassa", null),
    int_ozon_acct1: mkProvider("ozon", "acct1", true),
    int_ozon_acct2: mkProvider("ozon", "acct2"),
    // a non-provider cradle entry must be ignored
    integrationModuleOptions: { encryptionKey: "x" },
  } as any)

describe("IntegrationProviderService (registration identity)", () => {
  it("builds container keys from (pluginId, instanceId)", () => {
    expect(IntegrationProviderService.key("tkassa")).toBe("int_tkassa")
    expect(IntegrationProviderService.key("tkassa", null)).toBe("int_tkassa")
    expect(IntegrationProviderService.key("ozon", "acct1")).toBe("int_ozon_acct1")
  })

  it("lists registrations with derived identity, ignoring non-provider keys", () => {
    const regs = makeRegistry().listRegistrations()
    expect(regs.map((r) => [r.key, r.pluginId, r.instanceId]).sort()).toEqual([
      ["int_ozon_acct1", "ozon", "acct1"],
      ["int_ozon_acct2", "ozon", "acct2"],
      ["int_tkassa", "tkassa", null],
    ])
  })

  it("resolves a provider by key and by (pluginId, instanceId)", () => {
    const reg = makeRegistry()
    expect(reg.retrieveByKey("int_ozon_acct1").getInstanceId()).toBe("acct1")
    expect(reg.retrieveProvider("ozon", "acct2").getInstanceId()).toBe("acct2")
    expect(reg.retrieveProvider("tkassa").getInstanceId()).toBe(null)
  })

  it("reports registration existence exactly", () => {
    const reg = makeRegistry()
    expect(reg.hasProvider("tkassa")).toBe(true)
    expect(reg.hasProvider("tkassa", null)).toBe(true)
    expect(reg.hasProvider("ozon", "acct1")).toBe(true)
    expect(reg.hasProvider("ozon")).toBe(false) // no null-instance ozon
    expect(reg.hasProvider("ozon", "nope")).toBe(false)
  })

  it("maps a key back to its (pluginId, instanceId)", () => {
    expect(makeRegistry().getRegistration("int_ozon_acct2")).toMatchObject({
      pluginId: "ozon",
      instanceId: "acct2",
    })
    expect(makeRegistry().getRegistration("int_unknown")).toBeUndefined()
  })

  it("throws on an unknown key", () => {
    expect(() => makeRegistry().retrieveByKey("int_nope")).toThrow(/Unable to retrieve/)
  })

  it("stamps pluginId + instanceId onto each descriptor", () => {
    const ds = makeRegistry().listDescriptors()
    const ozon1 = ds.find((d) => d.instanceId === "acct1")!
    expect(ozon1.pluginId).toBe("ozon")
    expect(ds.find((d) => d.pluginId === "tkassa")!.instanceId).toBe(null)
  })
})
