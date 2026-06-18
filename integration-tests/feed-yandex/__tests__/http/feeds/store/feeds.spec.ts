import { medusaIntegrationTestRunner } from "@medusajs/test-utils"
import { FEED_MODULE } from "@gorgo/medusa-feed-yandex/modules/feed"

medusaIntegrationTestRunner({
  testSuite: ({ api, getContainer }) => {
    describe("GET /feeds/:id/:fileName", () => {
      it("returns 404 for non-existent feed id", async () => {
        const res = await api.get("/feeds/non-existent-id/feed.xml", {
          validateStatus: () => true,
        })

        expect(res.status).toBe(404)
      })

      it("returns 404 for feed with no file", async () => {
        const container = getContainer()
        const service: any = container.resolve(FEED_MODULE)

        const created = await service.createFeeds({
          title: "Feed without file",
          file_name: "no-file",
          is_active: false,
          schedule: 30,
        })

        const res = await api.get(`/feeds/${created.id}/no-file.xml`, {
          validateStatus: () => true,
        })

        expect(res.status).toBe(404)
      })

      it("returns 404 for mismatched file name", async () => {
        const container = getContainer()
        const service: any = container.resolve(FEED_MODULE)

        const created = await service.createFeeds({
          title: "Feed for mismatch test",
          file_name: "correct-name",
          is_active: true,
          schedule: 30,
        })

        const res = await api.get(`/feeds/${created.id}/wrong-name.xml`, {
          validateStatus: () => true,
        })

        expect(res.status).toBe(404)
      })
    })
  },
})

jest.setTimeout(60 * 1000)
