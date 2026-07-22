import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import { Modules } from "@medusajs/framework/utils"

jest.setTimeout(120 * 1000)

// Needs the FULL app (real event bus + the plugin's subscriber), so it uses
// medusaIntegrationTestRunner rather than moduleIntegrationTestRunner.
const A = "int_test_a"

async function eventually(assertion: () => Promise<void>, tries = 30, delayMs = 100) {
  let last: unknown
  for (let i = 0; i < tries; i++) {
    try {
      await assertion()
      return
    } catch (e) {
      last = e
      await new Promise((r) => setTimeout(r, delayMs))
    }
  }
  throw last
}

medusaIntegrationTestRunner({
  testSuite: ({ getContainer }) => {
    let svc: any

    beforeAll(() => {
      svc = getContainer().resolve("integration")
    })

    beforeEach(async () => {
      const rows = await svc.listIntegrations({}, { take: 1000 })
      if (rows.length) await svc.deleteIntegrations(rows.map((r: any) => r.id))
      svc.clearOptionsCache()
    })

    it("clears the resolved-options cache when integration.updated is emitted (subscriber wiring)", async () => {
      const descriptor = svc.getProviderDescriptor(A)
      const options = svc.encryptForStorage(descriptor, { apiKey: "pub", secretKey: "shh" })
      const record = await svc.createIntegrations({ provider_id: A, category: "payment", options, is_enabled: true })

      expect(await svc.getResolvedOptions("test", "a")).not.toBeNull() // populates the cache

      // Disable directly (no manual clearOptionsCache), then announce it on the real event bus
      // exactly as the workflows do — the plugin's subscriber must invalidate the cache.
      await svc.updateIntegrations({ id: record.id, is_enabled: false })
      const eventBus = getContainer().resolve(Modules.EVENT_BUS)
      await eventBus.emit({ name: "integration.updated", data: { provider_id: A } })

      await eventually(async () => {
        expect(await svc.getResolvedOptions("test", "a")).toBeNull()
      })
    })
  },
})
