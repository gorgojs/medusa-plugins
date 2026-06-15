import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import { Modules } from "@medusajs/framework/utils"

jest.setTimeout(120 * 1000)

const PROVIDER_DB_ID = "apiship_apiship"

medusaIntegrationTestRunner({
  inApp: true,
  env: {},
  testSuite: ({ getContainer }) => {
    describe("ApiShip fulfillment provider", () => {
      it("is registered in the Fulfillment module", async () => {
        const fulfillmentModule: any = getContainer().resolve(Modules.FULFILLMENT)
        const providers = await fulfillmentModule.listFulfillmentProviders()
        const ids = providers.map((p: any) => p.id)
        expect(ids).toContain(PROVIDER_DB_ID)
      })

      it("getFulfillmentOptions returns all 5 expected option types", async () => {
        const fulfillmentModule: any = getContainer().resolve(Modules.FULFILLMENT)
        const options = await fulfillmentModule.retrieveFulfillmentOptions(PROVIDER_DB_ID)

        const ids: string[] = options.map((o: any) => o.id)

        expect(ids).toContain("apiship_doortodoor")
        expect(ids).toContain("apiship_doortopoint")
        expect(ids).toContain("apiship_pointtodoor")
        expect(ids).toContain("apiship_pointtopoint")
        expect(ids).toContain("apiship_return")
        expect(options).toHaveLength(5)
      })

      it("apiship_return option has is_return:true and no deliveryType/pickupType", async () => {
        const fulfillmentModule: any = getContainer().resolve(Modules.FULFILLMENT)
        const options: any[] = await fulfillmentModule.retrieveFulfillmentOptions(PROVIDER_DB_ID)

        const returnOption = options.find((o: any) => o.id === "apiship_return")
        expect(returnOption).toBeDefined()
        expect(returnOption.is_return).toBe(true)
        expect(returnOption.deliveryType).toBeUndefined()
        expect(returnOption.pickupType).toBeUndefined()
      })

      it("delivery options have correct deliveryType and pickupType values", async () => {
        const fulfillmentModule: any = getContainer().resolve(Modules.FULFILLMENT)
        const options: any[] = await fulfillmentModule.retrieveFulfillmentOptions(PROVIDER_DB_ID)

        const deliveryOptions = options.filter((o: any) => o.id !== "apiship_return")
        expect(deliveryOptions).toHaveLength(4)

        for (const opt of deliveryOptions) {
          expect([1, 2]).toContain(opt.deliveryType)
          expect([1, 2]).toContain(opt.pickupType)
        }

        // Door-to-door (courier pickup, courier delivery)
        const optDoorToDoor = options.find((o: any) => o.id === "apiship_doortodoor")
        expect(optDoorToDoor.deliveryType).toBe(1)
        expect(optDoorToDoor.pickupType).toBe(1)

        // Door-to-point (courier pickup, pickup point delivery)
        const optDoorToPoint = options.find((o: any) => o.id === "apiship_doortopoint")
        expect(optDoorToPoint.deliveryType).toBe(2)
        expect(optDoorToPoint.pickupType).toBe(1)

        // Point-to-door (pickup point, courier delivery)
        const optPointToDoor = options.find((o: any) => o.id === "apiship_pointtodoor")
        expect(optPointToDoor.deliveryType).toBe(1)
        expect(optPointToDoor.pickupType).toBe(2)

        // Point-to-point (pickup point, pickup point delivery)
        const optPointToPoint = options.find((o: any) => o.id === "apiship_pointtopoint")
        expect(optPointToPoint.deliveryType).toBe(2)
        expect(optPointToPoint.pickupType).toBe(2)
      })
    })
  },
})
